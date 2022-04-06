const { request } = require('express');
const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
    console.log('Time',Date.now());
})

request.get('/',(req,res) => {

    res.send("birds Home page");
})





module.exports = router;