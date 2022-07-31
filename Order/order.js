const order = (app, db) => {

    app.get(`/cart/:email`, async (req, res) => {
      const email = req.params.email;
      const result = await db.findOne({ email })
      res.send(result)
    })
  
    app.post(`/order/:email`, async (req, res) => {
      const data = req.body;
      const result = await db.insertOne(data )
      res.send(result)
    })
 
  
  
  }
  module.exports = order