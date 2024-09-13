const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/testmongodb2"

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect()
        console.log("Conectado ao MongoDB")
    } catch (error) {
        console.log("Deu ruim: " + err)
    }
}

run()

module.exports = client