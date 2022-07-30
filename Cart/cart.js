const cart = (app, db) => {

  app.get(`/cart/:email`, async (req, res) => {
    const email = req.params.email;
    const result = await db.findOne({ email })
    res.send(result)
  })

  app.post(`/cart/:email`, async (req, res) => {
    const data = req.body;
    const email = req.params.email;

    const options = { upsert: true };
    const updateDoc = {
      $set: {
        cart: data
      },
    };

    const result = await db.updateOne({ email }, updateDoc, options);
    res.send(result)
  })

  app.put(`/cart/:email`, async (req, res) => {
    const data = req.body;
    const email = req.params.email;
    const options = { upsert: true };
    const updateDoc = { $set: { cart: data  } };
    const updated = await db.updateOne({ email }, updateDoc, options);
    console.log(updated)
      res.send(updated)
    
  })


}
module.exports = cart