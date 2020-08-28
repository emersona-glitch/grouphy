const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites";`
  pool.query(queryText)
  .then( (result) => {
      console.log(result.rows)
      res.send(result.rows);
    })
    .catch( (error) => {
      console.log(`Error on favorites get query ${error}`);
      res.sendStatus(500);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "favorites" ("url") VALUES ('${req.body.url}');`
  console.log(req.body.url);
  pool.query(queryText)
    .then( () => {
      res.sendStatus(200);
    }).catch( (error) => {
      console.log(`error on favorites post query ${error}`)
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
