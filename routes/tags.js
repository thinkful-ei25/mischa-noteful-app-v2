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
    .then(result => {
      res.json(result);
    })
    .catch(err => next(err));
});

module.exports = router;