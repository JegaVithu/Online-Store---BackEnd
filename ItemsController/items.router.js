var express = require('express');
var controller = require('./controller')
var router = express.Router();

router.get('/', (req, res) => {
    controller.getAll().then((data) => {
        res.status(data.status).send({blogs: data.blogs})
    });
});

router.get('/:id',function (req,res) {
    controller.getItem(req.params.id).then((data) => {
        res.status(data.status).send({blogs:data.blog_for_id});
    });
});

module.exports = router;