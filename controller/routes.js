const express = require("express");
const router = express.Router();
const { request, response } = require('express');

const blog = require("../static/text/blog/blog.js")

//layout: false or express will start looking for layout with main.handlebars by default
router.get('/', function (req, res) {
    res.render('index', { title: "Art Pham's Portfolio" });
})

router.get('/blog', function (req, res) {
    res.render('blog', {
        title: "Art Pham's Portfolio: Blog",
        blogs: blog.blogs
    });
})
module.exports = router;