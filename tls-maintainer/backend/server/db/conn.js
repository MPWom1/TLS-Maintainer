//Node Server needs to be running for calls to execute
//^^^^^^^^^^^^^^


import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27017"; 
               //Local MongoDB connection w/ port
export const client = new MongoClient(uri);

export async function display_one_document() {

  try {
    await client.connect();
    const database = client.db('CA_DB');
    const collection = database.collection('CN_EXP');
    const query = { };                                                      //Unique CN name goes in query 
    const output = await collection.findOne(query)                          //Queries document in the collection

    console.log(output);

  } finally {
    await client.close();                                           //Ensures that the client will close when you finish/error
  }
}


export async function getNumberOfDocuments() {
  let output;
  try {
    await client.connect();
    const database = client.db('CA_DB');
    const collection = database.collection('CN_EXP');
    output = await collection.countDocuments();                       //Queries and counts every document in the collection
  } finally {
    await client.close();                                           
  }
  return output;
}


export async function getAllDocuments() {
  let data;
  try {
    await client.connect();
    const database = client.db('CA_DB');
    const collection = database.collection('CN_EXP');
    const cursor = collection.find({});                       //Queries every document in the collection -> returns as a cursor
    data = await cursor.toArray();                            //Iterates over cursor to find all documents           https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
  } finally {
    client.close();                                         
  }
  return data;
}
