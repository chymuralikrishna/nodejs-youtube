const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
const dbname = 'ecom-mk';

async function dbConnection() {
    await client.connect();
    let db = client.db(dbname);
    return db.collection('product');
}

async function close() {
    await client.close();
    console.info('DbConnection is closed');
}

module.exports=dbConnection;

