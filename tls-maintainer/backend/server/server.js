const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const newRouter = require('./router.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());


MongoClient.connect('mongodb://127.0.0.1:27017')                        // This is the location of where your local database is living.
  .then((client) => {
    const db = client.db('CA_DB');                                      // The name we gave our DB
    const staffCollection = db.collection('CN_EXP');                    // The name we gave our collection inside the DB
    const staffRouter = newRouter(staffCollection);                     // We haven't built the router functionality yet, but we will next!
  
    app.use('/api', staffRouter);                                       // Defining the base route where we can later access our data
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});

