const posts = require('../model/postModel')

exports.addPostController = async (req,res)=>{
    console.log("Inside addPostController");
    const {title,content,author,date,tags} = req.body
    const postVideo = req.file.filename
    console.log(title,content,author,date,tags,postVideo);
    try{
            const newPosts = new posts({
                title,content,author,date,tags,postVideo
            })
            await newPosts.save()
            res.status(200).json(newPosts)
    }
    catch(err){
        res.status(401).json(err)
    } 
}

exports.allPostsController = async(req,res)=>{
    console.log("Inside allProjectController");
    const searchKey = req.query.search
    console.log(searchKey);
    const query = {
        title:{
            $regex:searchKey,$options:'i'
        }
    }
    try{
        const allPosts = await posts.find(query)
        res.status(200).json(allPosts)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.editPostController = async(req,res)=>{
    console.log("inside editProjectController");
    const id = req.params.id
    console.log(id);
    const {title,content,author,date,tags,postVideo} = req.body
    console.log(title,content,author,date,tags,postVideo);
    
    const reUploadPostVideo = req.file ? req.file.filename : postVideo
    try{
        const updatePost = await posts.findByIdAndUpdate({_id:id},{
            title,content,author,date,tags,postVideo:reUploadPostVideo
        },{new:true})
        await updatePost.save()
        res.status(200).json(updatePost)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.removePostController = async(req,res)=>{
    console.log("Inside removeProjectController");
    const {id} =req.params
    try{
        const deletePost = await posts.findByIdAndDelete({_id:id})
        res.status(200).json(deletePost)
    }
    catch(err){
        res.status(401).json(err)
    }
}