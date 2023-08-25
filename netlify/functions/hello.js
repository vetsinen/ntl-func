const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://superadmin:rbDkYE2K4Qir69Om@dvas-cluster0.o1qow.mongodb.net/');

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db('main');
        const collection = database.collection('ast');
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
