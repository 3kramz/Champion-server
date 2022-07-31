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
 
  
  
  }
  module.exports = order