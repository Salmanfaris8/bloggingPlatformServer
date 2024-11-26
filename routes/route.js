const express = require('express')
const postController = require('../controller/postController')
const multerMiddleware = require('../middleware/multerMiddleware')

const route = express.Router()

// add
route.post('/add-post',multerMiddleware.single("postVideo"),postController.addPostController)

// get
route.get('/all-posts',postController.allPostsController)

// edit
route.put('/edit/:id/post',multerMiddleware.single("postVideo"),postController.editPostController)

// remove
// projects/10/remove : http://localhost:3000/projects/:id/remove
route.delete("/post/:id/remove",postController.removePostController)


module.exports = route