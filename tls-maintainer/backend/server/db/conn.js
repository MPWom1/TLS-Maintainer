//Node Server needs to be running for calls to execute
//^^^^^^^^^^^^^^

import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27017";                  //Local MongoDB connection w/ port
export const client = new MongoClient(uri);



export async function insertOneDocument() {
  let inputOne;
  try {
    await client.connect();
    const database = client.db('CA_DB');
    const collection = database.collection('CN_EXP');
    inputOne = await collection.insertOne( { CN: "*Toyota.com", Issued: new Date("2023-1-22"), Expires: new Date("2024-1-22") } );    //Convert to variables for New Entry button

  } finally {
    await client.close();                                           //Ensures that the client will close when you finish/error
  }
  return inputOne;
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
