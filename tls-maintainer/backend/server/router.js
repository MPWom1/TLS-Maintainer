const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const newRouter = function (collection) {                       // This function will hold all the routing functionality for the database, and will be used in server.js

  const router = express.Router();
  
  
  router.get('/getAll', async (req, res) => {                                // Route for getting all documents

    res.json( await collection.find().toArray() )
    
  });

  router.get('/getAllCount', async (req, res) => {                          //Route for getting count of all documents

    res.json( await collection.countDocuments() )

  });  


  router.post('/entry', (req, res) => {                                     // Route for creating new documents
    const newData = req.body;
    collection
    .insertOne(newData)     
  });


  return router;

};

module.exports = newRouter;