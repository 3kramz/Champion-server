const role = (app, db) => {
    app.get(`/role/:email`, async (req, res) => {
        const email = req.params.email
        const result = await db.findOne({ email });
   
        res.send(result)
    })
}
module.exports = role