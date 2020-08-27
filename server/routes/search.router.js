const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    console.log(req.query.q);
    console.log('test');
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.query.q}`)
    .then((response) => {
        console.log(response.data); //this should be a bunch of data from giphy
        res.send(response.data);
    }).catch((error) => { //in case of errors
        console.log('error getting Giphy', error);
        res.sendStatus(500); //internal server error
    })
})
 

module.exports = router;