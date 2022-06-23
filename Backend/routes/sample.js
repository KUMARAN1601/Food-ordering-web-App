const express = require('express')
const sampleAPI = express.Router()
const mongoUtil = require('../mongoutil')
// this api will be used to add data the collection
sampleAPI.use(express.json())
//=>http://localhost:8888/sample/add POST
sampleAPI.post('/add',async (req,res)=>{
    console.log(req.body)
    const docs = req.body.data   //data
    const collName = req.body.collname  //coll name
    if(docs && collName){
        try {
            await mongoUtil.addDocs("eator",collName, docs)
       res.send(`${collName} added with ${docs.length} document(s)`)
          .sendStatus(201)
        } catch (error) {
            res.send(error.message)
               .sendStatus(500)
        }
    }
})




module.exports = sampleAPI