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


  router.get('/getAllExpired', async (req, res) => {                                // Route for getting all documents

    let todaysDate = new Date().toISOString().slice(0, 10)

    res.json( await collection.countDocuments( {  expires: { $gt: todaysDate } })

  )});

  router.get('/getTenDayExpires', async (req, res) => {                                // Route for getting all documents

    let todaysDate = new Date().toISOString().slice(0, 10);
    let tenDayUnFormatted = new Date().setTime(new Date().getTime() +  (10 * 24 * 60 * 60 * 1000));
    let tenDays = new Date(tenDayUnFormatted).toISOString().slice(0, 10);

    res.json( await collection.countDocuments( {  expires: { $gt: todaysDate, $lt: tenDays }  } )

  )});

  router.get('/getThirtyDayExpires', async (req, res) => {                                // Route for getting all documents

    let todaysDate = new Date().toISOString().slice(0, 10);
    let thirtyDayUnFormatted = new Date().setTime(new Date().getTime() +  (30 * 24 * 60 * 60 * 1000));
    let thirtyDays = new Date(thirtyDayUnFormatted).toISOString().slice(0, 10);

    res.json( await collection.countDocuments( {  expires: { $gt: todaysDate, $lt: thirtyDays }  } )

  )});

  router.get('/getNinetyDayExpires', async (req, res) => {                                // Route for getting all documents

    let todaysDate = new Date().toISOString().slice(0, 10);
    let ninetyDayUnFormatted = new Date().setTime(new Date().getTime() +  (90 * 24 * 60 * 60 * 1000));
    let ninetyDays = new Date(ninetyDayUnFormatted).toISOString().slice(0, 10);

    res.json( await collection.countDocuments( {  expires: { $gt: todaysDate, $lt: ninetyDays }  } )

  )});

  router.get('/getOneEightyDayExpires', async (req, res) => {                                // Route for getting all documents

    let todaysDate = new Date().toISOString().slice(0, 10);
    let oneEightyDaysDayUnFormatted = new Date().setTime(new Date().getTime() +  (180 * 24 * 60 * 60 * 1000));
    let oneEightyDays = new Date(oneEightyDaysDayUnFormatted).toISOString().slice(0, 10);

    res.json( await collection.countDocuments( {  expires: { $gt: todaysDate, $lt: oneEightyDays }  } )

  )});

  router.post('/entry', (req, res) => {                                     // Route for creating new documents
    const newData = req.body;
    collection
    .insertOne(newData)     
  });


  return router;

};

module.exports = newRouter;