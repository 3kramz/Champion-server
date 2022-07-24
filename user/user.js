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

}
module.exports = user