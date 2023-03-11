const express = require('express');
const router = express.Router()
const users = require('../models/userSchema')
const posts = require('../models/postSchema')
const messages= require('../models/messageSchema')
/*
router.get("/",(req,res)=>{
    console.log("Connect")
})
*/

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { name, email,given_name,picture,token,family_name } = req.body
    console.log(name)
    try {
        const preuser = await users.findOne({ email: email })
        console.log(preuser)
        if(preuser){
            res.status(404).send("This user already exists")
        }
        else{
            const adduser=new users({
                name, email,given_name,picture,token,family_name

            })
            await adduser.save();
            response.status(201).json(adduser)
            console.log(adduser)
        }
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/isUser', async (req, res) => {
    console.log(req.body);
    const { name, email,given_name,picture,token,family_name } = req.body
    console.log(name)
    try {
        const preuser = await users.findOne({ email: email,token:token })
        console.log(preuser)
        if(preuser){
            res.status(404).send(preuser)
        }
        else{
            res.status(404).send("0")
           
           
        }
    } catch (error) {
        res.status(404).send(error)
    }
})
router.post('/post', async (req, res) => {
    console.log(req.body);
    const { head, body ,time,user} = req.body
    console.log(head)
    try {
        
            const post=new posts({
                head, body,time,user

            })
            await post.save();
            response.status(201).json(post)
            console.log(post)
        
    } catch (error) {
        res.status(404).send(error)
    }
})
router.get('/fetchPosts', async (req, res) => {
    try{
        const post1 = await posts.find({})
        res.status(200).json(post1)
        console.log(post1)
        console.log("Raman")

    }catch(error){
        //error.status(404).json({message:error.message})
        console.log("error")
          
    }

})
router.get('/fetchUsers', async (req, res) => {
    try{
        const user1 = await users.find({})
        res.status(200).json(user1)
        console.log(user1)
        console.log("Raman")

    }catch(error){
        //error.status(404).json({message:error.message})
        console.log("error")
          
    }

})
router.post('/message', async (req, res) => {
    console.log(req.body);
    const { content, from ,to,time} = req.body
    console.log(content)
    try {
        
            const message=new messages({
                content, from ,to,time

            })
            await message.save();
            response.status(201).json(message)
            console.log(message)
        
    } catch (error) {
        res.status(404).send(error)
    }
})
router.post('/fetchMessage', async (req, res) => {
    console.log(req.body);
    const { content, from ,to,time} = req.body
    console.log(from)
    try {
        /*
        {
    "type" : { "$in": ["WebUser", "User"] },
    "city" : { "$in": ["Pune", "Mumbai"] }
}
        */
        const preMessage = await messages.find({ from:{"$in":[ from,to]},to:{"$in":[ from,to]}})
        console.log(preMessage)
        res.status(404).send(preMessage)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;