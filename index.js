const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

const app = express()
const port = process.env.PORT || 5000


//midaleware
app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://C_ADMIN:${process.env.C_PASS}@cluster0.uclg8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const usersCollection = client.db("champion").collection("users");
  
    app.post(`/user/:email`, async (req, res) => {
      const email = req.params.email
      const result = await usersCollection.insertOne({email, role:"user"});
      res.send(result)
    })
    

    app.get('/',(req,res)=>{
        res.send("Champion equipment server is running")
    })

  } finally {}
}
run().catch(console.dir);

app.listen(port, function() {
    console.log(`Champion server listening on port ${port}!`)
  });

