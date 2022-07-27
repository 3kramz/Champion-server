const user = (app, db) => {

    app.post(`/user/:email`, async (req, res) => {
        const email = req.params.email
        const result = await db.insertOne({ email, role: "user" });
        res.send(result)
    })

    app.get(`/a/:email`, async (req, res) => {
        const email = req.params.email
        const result = await db.findOne({ email });
        res.send(result)
    })
    app.put(`/user/bill/:email`, async (req, res) => {
        const email = req.params.email
        const info = req.body
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                bill: info
            },
        };
        const filter = await db.findOne({ email });
        const result = await db.updateOne(filter, updateDoc, options);
        console.log(result)

        res.send(result)
    })

}
module.exports = user