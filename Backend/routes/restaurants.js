const express = require('express')
const { ObjectId } = require('mongodb')
const restaurantsMiniApp = express.Router()
const mongoUtil = require('../mongoutil')

//read the body
restaurantsMiniApp.use(express.json())

//gets all the locations
//=>http:localhost:8888/restaurants/locations  GET
restaurantsMiniApp.get('/locations',async (req,res)=>{
   // get the docs from locations coll
   try{
    const cursor = await mongoUtil.getDocs('eator','locations')
    const locations = await cursor.toArray()
    res.send(locations)
   }catch(err){
     res.send(err.message)
        .status(500)
   }
})

//gets all the locations
//=>http:localhost:8888/restaurants/orders  GET
restaurantsMiniApp.get('/orders/:restaurant',async (req,res)=>{
   // get the docs from locations coll
   try{
    const restaurant = req.params.restaurant
    const cursor = await mongoUtil.getDocs('eator','orders', {restaurant})
    const locations = await cursor.toArray()
    res.send(locations)
   }catch(err){
     res.send(err.message)
        .status(500)
   }
})

// get all the addresses for a given city
restaurantsMiniApp.get('/locations/:city', async (req,res)=>{
   // get the docs from locations coll
   try{
      //read the city value
      const city = req.params.city
      const cursor = await mongoUtil.getDocs('eator','locations', {city})
      const locations = await cursor.toArray()
      res.send(locations)
     }catch(err){
       res.send(err.message)
          .status(500)
     }
})


// the filters 
// http://localhost:8888/restaurants/filters     [POST]
restaurantsMiniApp.post('/filters/:order/:pg',async (req,res)=>{
   /*  The below is the post object
         {
            "city":"Pune",
            "address": "FC Road",
            "costfortwo": {
               "min": 0,
               "max": 500
             },
            "mealtypes": "NightLife",
            "cuisines": {"$in":["North Indian","Fast Food"]}
         }
   */
   const query = req.body  //{} we can read the filters
   try {
     const cursor = await mongoUtil.getDocs(
                                          "eator",
                                          "restaurants",
                                          query,
                                          {"costfortwo.min":req.params.order},
                                          req.params.pg,
                                          3)
     const restaurants = await cursor.toArray()
     res.json(restaurants)
   } catch (error) {
      res.send(error.message)
         .status(500)
   }
})

//gets restaurant details for the given id
// here id is optional hence ? is put
// http://localhost:8888/restaurants
restaurantsMiniApp.get('/:id?',async (req,res)=>{
    // get the docs from locations coll
    try{
     //get the id from the parameters
     const {id} = req.params   //optional => ther may be no id
     //get the city and address the query strings
     const {city,address}=req.query

     let cursor
     if(id){
        //that means id is passed
        cursor = await mongoUtil.getDocs('eator','restaurants',{"_id":ObjectId(id)})
     }else if(city && address){
        //that means city and address is passed
        cursor = await mongoUtil.getDocs('eator',
                                        'restaurants',
                                        {"city":city, "address":address})
     }else{
        // that means there is no id, no city and no address
        // in this case we will return all the restaurants
        cursor = await mongoUtil.getDocs('eator','restaurants')
     }
     
     const restaurant = await cursor.toArray()
     res.send(restaurant)
    }catch(err){
      res.send(err.message)
         .status(500)
    }
 })



module.exports= restaurantsMiniApp








// const express = require('express')
// const { ObjectId } = require('mongodb')
// const restaurantsMiniApp = express.Router()
// const mongoUtil = require('../mongoutil')

// //read the body
// restaurantsMiniApp.use(express.json())

// //gets all the locations
// //=>http:localhost:8888/restaurants/locations  GET
// restaurantsMiniApp.get('/locations',async (req,res)=>{
//    // get the docs from locations coll
//    try{
//     const cursor = await mongoUtil.getDocs('eator','locations')
//     const locations = await cursor.toArray()
//     res.send(locations)
//    }catch(err){
//      res.send(err.message)
//         .status(500)
//    }
// })


// // the filters 
// // http://localhost:8888/restaurants/filters     [POST]
// restaurantsMiniApp.post('/filters/:order/:pg',async (req,res)=>{
//    /*  The below is the post object
//          {
//             "city":"Chennai",
//             "address": "Porur",
//             "costfortwo": "1000 - 1500",
//             "mealtypes": "NightLife",
//             "cuisines": {"$in":["North Indian","Fast Food"]}
//          }
//    */
//    const query = req.body  //{} we can read the filters
//    try {
//      const cursor = await mongoUtil.getDocs(
//                                           "eator",
//                                           "restaurants",
//                                           query,
//                                           {"costfortwo.min":req.params.order},
//                                           req.params.pg,
//                                           3)
//      const restaurants = await cursor.toArray()
//      res.json(restaurants)
//    } catch (error) {
//       res.send(error.message)
//          .sendStatus(500)
//    }
// })

// //gets restaurant details for the given id
// // here id is optional hence ? is put
// // http://localhost:8888/restaurants
// restaurantsMiniApp.get('/:id?',async (req,res)=>{
//     // get the docs from locations coll
//     try{
//      //get the id from the parameters
//      const {id} = req.params   //optional => ther may be no id
//      //get the city and address the query strings
//      const {city,address}=req.query

//      let cursor
//      if(id){
//         //that means id is passed
//         cursor = await mongoUtil.getDocs('eator','restaurants',{"_id":ObjectId(id)})
//      }else if(city && address){
//         //that means city and address is passed
//         cursor = await mongoUtil.getDocs('eator',
//                                         'restaurants',
//                                         {"city":city, "address":address})
//      }else{
//         // that means there is no id, no city and no address
//         // in this case we will return all the restaurants
//         cursor = await mongoUtil.getDocs('eator','restaurants')
//      }
     
//      const restaurant = await cursor.toArray()
//      res.send(restaurant)
//     }catch(err){
//       res.send(err.message)
//          .status(500)
//     }
//  })



// module.exports= restaurantsMiniApp