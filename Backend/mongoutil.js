const mongoDB = require('mongodb')
require('dotenv').config()
// connection string
const uri = process.env.MONGOCON

// create a function which generates the client
// output : Promise<Client>
const createClient =()=>{
    // created a client
    const mongoClient = new mongoDB.MongoClient(uri)
    // create a connected client
    const client = mongoClient.connect()  // Promise <MongoClient>
    //return that client
    return client
}

// function to tell the client to close the connection
const closeClient = (client)=> client.close()

// function to add a document to a specific collection 
//in specfic DB
// document (JSON) ===> collection ====> DB
// output : Promise<result>
const addDoc =async (dbName, collName, doc) =>{
    // create our client
     const client  = await createClient()
    // create/fetch the DB
    const db = client.db(dbName)
    // create the coll
    const coll = db.collection(collName)
    // insert the doc
    const result = await coll.insertOne(doc)
    // return the result
    return result
}
// addDocs("eator","widgit", [{},{}])
const addDocs =async (dbName, collName, docs) =>{
  // create our client
   const client  = await createClient()
  // create/fetch the DB
  const db = client.db(dbName)
  // create the coll
  const coll = db.collection(collName)
  // insert the doc
  const result = await coll.insertMany(docs)
  // return the result
  return result
}




// getDocs("eator","restaurants",{"city":"Delhi"})
const getDocs = async (dbName, 
                      collName, 
                      query={}, 
                      sortfield={},  //{"costfortwo.min":-1}
                      pageNumber=1,
                      nPerPage=10)=>{
  // create our client
  const client  = await createClient()
  // create/fetch the DB
  const db = client.db(dbName)
  // create the coll
  const coll = db.collection(collName)
  // insert the doc
  const result = await coll.find(query)
                           .sort(sortfield)
                           .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
                           .limit( nPerPage )
  // return the result
  return result
}


const getDoc = async (dbName, collName, query={})=>{
  // create our client
  const client  = await createClient()
  // create/fetch the DB
  const db = client.db(dbName)
  // create the coll
  const coll = db.collection(collName)
  // insert the doc
  const result = await coll.findOne(query)
  // return the result
  return result
}

const updateDocs = async (dbName, collName, findQuery, updateQuery)=>{
   // create our client
   const client  = await createClient()
   // create/fetch the DB
   const db = client.db(dbName)
   // create the coll
   const coll = db.collection(collName)
   // insert the doc
   const result = await coll.updateMany(findQuery, updateQuery)
   // return the result
   return result
}

/*
updateDocs('eator','users',{"email":"tina@gmail.com"},{"$set":{"lastname":"J"}})
.then(status=>console.log(status))
*/
/*
getDocs('eator','restaurants',{"$and":[{"city":'Pune'},{"costfortwo":"1500 - 2000"}]}).then(docs=>{
  docs.forEach(d=>console.log(d))
})*/


module.exports={
    addDoc,
    addDocs,
    getDocs,
    getDoc
}
