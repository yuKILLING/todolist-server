const express = require('express')
const router = express.Router()
const service = require('../services/posts.service')


router.get('/', async (req,res)=>{
    const posts = await service.getAllPosts();
    res.send(posts)
})

router.get('/:id', async (req,res)=>{
    const post = await service.getPostById(req.params.id)
    post.length == 0 ? res.status(404).json('no record with given id: ' + req.params.id) : res.send(post)
})

router.delete('/:id', async (req,res)=>{
    const post = await service.deletePost(req.params.id)
    post.affectedRows == 0 ? res.status(404).json('no record with given id: ' + req.params.id) :     res.send('deleted successfully')
})

router.post('/', async (req, res) => {
    await service.addPost(req.body.text); 
    res.send('Post added')
});

module.exports = router