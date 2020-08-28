const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log('in put', req.params.id);
  let queryText = `
  UPDATE "favorites"
  SET "category_id" = $1
  WHERE "id" = $2;
  `;
  pool.query(queryText, [req.body, req.params.id])
  .then ((result) => {
    res.sendStatus(200)
  }) .catch ((error) => {
    console.log('error in PUT category', error);
    res.sendStatus(500)
  })

  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
