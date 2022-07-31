const {  ObjectId } = require('mongodb');

const tools = (app, db) => {

    app.get(`/tools`, async (req, res) => {
        const result = await db.find().toArray()
        res.send(result)
    })

    app.delete(`/tool-delete`, async (req, res) => {
        const _id = req.body._id
        console.log(_id)
        
        const result = await db.deleteOne({ _id: ObjectId(_id) } );

        res.send(result)
    })

}
module.exports = tools