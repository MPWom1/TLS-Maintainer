const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";                //Local MongoDB connection w/ port
const client = new MongoClient(uri);


async function display_one_document() {

  try {
    const database = client.db('CA_DB');
    const collection = database.collection('CN_EXP');
    const query = { };                                                     //Unique CN name goes in query 
    const output = await collection.findOne(query)                         //Queries every document in the collection

    console.log(output);


  } finally {
    await client.close();                                           //Ensures that the client will close when you finish/error
  }
}
display_one_document();




async function display_number_of_documents() {

    try {
      const database = client.db('CA_DB');
      const collection = database.collection('CN_EXP');
      const query = { };                                                     //Unique CN name goes in query 
      const output = await collection.countDocuments()                       //Queries every document in the collection
  
      console.log(output);
  
  
    } finally {
      await client.close();                                           //Ensures that the client will close when you finish/error
    }
  }
display_number_of_documents();



async function display_all_documents() {

    try {
      const database = client.db('CA_DB');
      const collection = database.collection('CN_EXP');
      const query = { };                                                //Query is empty to display all results
      const output = await collection.find(query)                       //Queries every document in the collection
  
      console.log(output);
  
  
    } finally {
      await client.close();                                           //Ensures that the client will close when you finish/error
    }

  }
  display_all_documents();