const express = require('express');
const knex = require('../knex');
const router = express.Router();

//get all tags
router.get('/', (req, res, next) => {
  knex.select('*')
    .from('tags')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});
//get tag by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('tags')
    .select('*')
    .where('tags.id', id)
    .then(([result]) => {
      res.json(result);
    })
    .catch(err => next(err));
});

//POST
router.post('/', (req, res, next) => {
  const { name } = req.body;

  
  //validate user input
  if (!name){
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }
  const newTag = {name};
  knex
    .insert(newTag)
    .into('tags')
    .returning(['id', 'name'])
    .then(([result]) => {
      res.location(`http://${req.headers.host}/tags/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));

});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const updateObj = {id: id, name: req.body.name};
  if(!updateObj.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }
  knex('tags')
    .update(updateObj)
    .where('tags.id', id)
    .returning(['id', 'name'])
    .then(([results]) => res.json(results))
    .catch(err => next(err));
});

//Remove tag
router.delete('/:id', (req, res, next) =>{
  const id = req.params.id;
  knex('tags')
    .del()
    .where('tags.id', id)
    .then( () => res.sendStatus(204))
    .catch(err => next(err));
});
module.exports = router;