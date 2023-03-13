const express = require('express');
const router = express.Router()
const users = require('../models/userSchema')
const posts = require('../models/postSchema')
const messages= require('../models/messageSchema')
var validator = require("email-validator");
const feed1=require("../models/feedSchema")
/*
router.get("/",(req,res)=>{
    console.log("Connect")
})
*/

router.post('/register', async (req, res) => {
    console.log(req.body);
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const { name, email,given_name,picture,token,family_name } = req.body

    var m=1;
   
    console.log(name)
    if(validator.validate(email)){
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
    }}else{
        res.status(404).send("Email Not valid")
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
    const { head, body ,time,user,likes,comments} = req.body
    console.log(head)
    try {
        
            const feed=new feed1({
                head, body,time,user,likes,comments

            })
            await feed.save();
            response.status(201).json(feed)
            console.log(feed)
        
    } catch (error) {
        res.status(404).send(error)
    }
})
router.get('/fetchPosts', async (req, res) => {
    try{
        const feed = await feed1.find({})
        res.status(200).json(feed)
        console.log(feed)
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
router.post('/search', async (req, res) => {
    console.log(req.body);
   
    const { name, email,given_name,picture,token,family_name } = req.body


   
  
    try {
        const preuser = await users.find({name:{$regex:`${name}`,$options:"$i"}})
        console.log(preuser)
        if(preuser){
            res.status(404).send(preuser)
        }
        else{
            res.status(404).send("No user Found")
        }
    } catch (error) {
        res.status(404).send(error)
    }

})
router.post('/comment', async (req, res) => {
    console.log(req.body);
    const {  head, body ,time,user,likes,comments} = req.body
    console.log(likes)
    try {
        
            const feed=new feed1({
                head, body ,time,user,likes,comments

            })
            await feed.save();
            response.status(201).json(feed)
            console.log(feed)
        
    } catch (error) {
        res.status(404).send(error)
    }
})
router.patch('/updateComment', async (req, res) => {
    console.log(req.body);
    const { id,user,time,comments} = req.body
    console.log(id)
    try {
        
           
            const upd=await feed1.findByIdAndUpdate(id,{$push:{comments:{content:comments,time:time,user:user}}},{new:true});
            //const upd=await comment1.findByIdAndUpdate('640def63faa537f85aac2e28',{ $inc: {likes: 1 }},{new:true});
            response.status(201).json(comment)
            console.log(upd)
        
    } catch (error) {
        res.status(404).send(error)
    }
})
router.patch('/updateLikes', async (req, res) => {
    console.log(req.body);
    const { id,user} = req.body
    console.log(id)
    try {
           const feed=await feed1.find({ _id:id,likes:user })
         //  console.log(feed)
           if(feed.length===0){
            const upd=await feed1.findByIdAndUpdate(id,{$push:{likes:user}},{new:true});
            //const upd=await comment1.findByIdAndUpdate('640def63faa537f85aac2e28',{ $inc: {likes: 1 }},{new:true});
            response.status(201).json(feed)
            //console.log(upd)}
        
    }else{
        const upd=await feed1.findByIdAndUpdate(id,{$pull:{likes:user}},{new:true});
            console.log("You have already liked")
            response.status(404).send("You have already liked")

           }} catch (error) {
        res.status(404).send(error)
    }
})
router.patch('/likeStatus', async (req, res) => {
    console.log(req.body);
    const { id,user} = req.body
    console.log(id)
    try {
           const feed=await feed1.find({ _id:id,likes:user })
         //  console.log(feed)
           if(feed.length===0){
            //const upd=await feed1.findByIdAndUpdate(id,{$push:{likes:user}},{new:true});
            //const upd=await comment1.findByIdAndUpdate('640def63faa537f85aac2e28',{ $inc: {likes: 1 }},{new:true});
            response.status(201).json("0")
            //console.log(upd)}
        
    }else{
       // const upd=await feed1.findByIdAndUpdate(id,{$pull:{likes:user}},{new:true});
           // console.log("You have already liked")
            response.status(404).send("1")

           }} catch (error) {
        res.status(404).send(error)
    }
})

router.get('/fetchComments', async (req, res) => {
    try{
        const feed = await feed1.find({})
        res.status(200).json(feed)
        console.log(feed)
        console.log("Raman")

    }catch(error){
        //error.status(404).json({message:error.message})
        console.log("error")
          
    }

})

module.exports = router;