const express = require('express');
const router = express.Router();

router.get(
    '/',
    (req, res) => {
        console.log('Path hit');
        res.render('index', {'title': 'Demo Node Website'});
    }
);

module.exports = router;