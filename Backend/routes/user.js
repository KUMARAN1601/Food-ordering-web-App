const express = require('express');
const userMiniApp = express.Router();
const mongoUtil = require('../mongoutil')
//have the middleware to read the body
userMiniApp.use(express.json())

//register the GET
userMiniApp.post('/login',async (req, res)=>{
    const {
        email,
        password
    } = req.body
    //if email and password is present
    if(email && password){
       const user = await mongoUtil.getDoc("eator","users", {email,password})
       //if user exists
       if(user){
            res.json({
                firstname : user.firstname
            }).status(200)
       }else{
           //send un auth excpetion
           res.send({message:'User forbidden'})
              .status(401)
       }
    } 
});
/// => add the user to the DB=> users
/// http://localhost:8888/user/register
userMiniApp.post('/register',async (req,res)=>{
    //read the registration details
    const userDetails = req.body
    console.log(userDetails)
    //add the details to database
    const result = await mongoUtil.addDoc("eator","users",userDetails)
    res.status(201)
       .send(result)
})

module.exports = userMiniApp;