const express = require('express');
const router = express.Router();

router.get(
    '/',
    (req, res) => {
        console.log('Path root hit');
        res.render('index.html', {'title': 'Demo Node Website'});
    }
);

router.get(
    '/contact',
    (req, res) => {
        console.log('Path contact hit');
        res.render('contact.html', {'title': 'Contact Page'});
    }
);

module.exports = router;