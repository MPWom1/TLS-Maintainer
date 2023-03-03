const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const newRouter = function (collection) {                       // This function will hold all the routing functionality for the database, and will be used in server.js

  const router = express.Router();
  
  const errorCatcher = function(inputError){                    // Function for catching errors, this is to keep the code DRY
    console.error(inputError);
    res.status(500);
    res.json({ status: 500, error: inputError })
  }
  

  router.get('/', (req, res) => {                                // Route for getting all staff data
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      //.catch((err) => errorCatcher(err));                     //<<<<---- For catching errors, but it always throws error?????
  });


  router.get('/:id', (req, res) => {                            // Route for getting specific staff data
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      //.catch((err) => errorCatcher(err));                     //<<<<---- For catching errors, but it always throws error?????
  });


  router.delete('/:id', (req, res) => {                          // Route for deleting specific staff 
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      //.catch((err) => errorCatcher(err));                       //<<<<---- For catching errors, but it always throws error?????
  });


  router.post('/', (req, res) => {                              // Route for creating new staff
    const newData = req.body;
    collection
    .insertOne(newData)     
    //.catch((err) => errorCatcher(err));     //<<<<---- For catching errors, but it always throws error?????
  });

  
 router.put('/:id', (req, res) => {                             // Route for updating specific staff
    const itemId = req.params.id;
    const updatedItem = req.body;
    
    collection
    .findOneAndUpdate({ _id: ObjectID(itemId) }, { $set: updatedItem })
    .then(result => {
      res.json(result.value);
    })
    .catch((err) => errorCatcher(err));
  });
  
  
  return router;

};

module.exports = newRouter;