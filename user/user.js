const user = (app, db) => {

    app.post(`/user/:email`, async (req, res) => {
        const email = req.params.email
        const result = await db.insertOne({ email, role: "user" });
        res.send(result)
    })


    app.get(`/user/:email`, async (req, res) => {
        const email = req.params.email
        
        const result = await db.findOne({ email });
        res.send(result)
    })


    app.put(`/user/bill/:email`, async (req, res) => {
        const email = req.params.email
        const info = req.body
        const updateDoc = { $set: { bill: info } };
        const filter = await db.findOne({ email });
        const result = await db.updateOne(filter, updateDoc, { upsert: true });
        res.send(result)
    })


    app.put(`/user/shipping/:email`, async (req, res) => {
        const email = req.params.email
        const info = req.body
       
        const updateDoc = { $set: { shipping: info } };
        const result = await db.updateOne({email}, updateDoc, { upsert: true });
        res.send(result)
    })

}
module.exports = user