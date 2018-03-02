const express = require('express');
const router = express.Router();
// const router = require('express').Router();

router.use('/scraper', require('./scraper'));

// router.use("/scraper", function(req, res) {
//     scraper(req.body.restaurant).then(data => {
//         res.send(data);
//     });
// });

//other routes

module.exports = router;