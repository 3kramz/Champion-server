const {  ObjectId } = require('mongodb');
const order = (app, db) => {

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

  }
  module.exports = order