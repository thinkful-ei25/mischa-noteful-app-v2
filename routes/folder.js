const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});


router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex.select('id', 'name')
    .from('folders')
    .where('folders.id', id)
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  if (!req.body.name){
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const updateObj = {id: id, name: req.body.name};

  knex('folders')
    .returning('id','name')
    .where('folders.id', id)
    .update(updateObj)
    .then(results => res.json(results[0]))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  if (!req.body.name){
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const newFolder = {name: req.body.name};
  // const {name} = req.body.name;

  knex('folders')
    .insert(newFolder)
    .returning('*')
    .then(results => {
      res.location(`http://${req.headers.host}/folders/${results[0].id}`).status(201).json(results[0]);
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('folders')
    .where('folders.id', id)
    .del()
    .then(res.sendStatus(204))
    .catch(err => next(err));

});
module.exports = router;