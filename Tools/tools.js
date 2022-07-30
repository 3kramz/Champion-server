const tools = (app, db) => {

    app.get(`/tools`, async (req, res) => {
        const result = await db.find().toArray()
        res.send(result)
    })

}
module.exports = tools