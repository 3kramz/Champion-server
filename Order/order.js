const {  ObjectId } = require('mongodb');
const order = (app, db) => {

    app.get(`/order`, async (req, res) => {
      const result = await db.find().toArray()
      res.send(result)
    })

    app.get(`/order/:email`, async (req, res) => {
      const email = req.params.email;
      const result = await db.find({ email }).toArray()
      res.send(result)
    })
  
    app.post(`/order/:email`, async (req, res) => {
      const data = req.body;
      const result = await db.insertOne(data )
      res.send(result)
    })
 


    app.get(`/order-status/:id`, async (req, res) => {
      const _id = req.params.id;
      const result = await db.findOne({ _id: ObjectId(_id) })
      res.send(result)
    })


    app.get(`/order-status/:id`, async (req, res) => {
      const _id = req.params.id;
      const result = await db.findOne({ _id: ObjectId(_id) })
      res.send(result)
    })

    app.put(`/order-status/:id`, async (req, res) => {
      const id = req.params.id;
      const status = req.body.status;
   
      const updateDoc = { $set: { status: status } };
      const result = await db.updateOne({ _id: ObjectId(id) }, updateDoc, { upsert: true });
      
      res.send(result)
    })

  }
  module.exports = order