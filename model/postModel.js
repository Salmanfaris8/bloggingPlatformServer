const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    postVideo:{
        type:String,
        required:true
    }
})

const posts = mongoose.model("posts",postSchema)

module.exports = posts