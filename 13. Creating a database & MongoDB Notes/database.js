const { MongoClient } = require("mongodb")

const mongoURI = "mongodb+srv://neoGStudent:ashiya@neog.b6txi.mongodb.net/"

const client = new MongoClient(mongoURI);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data = {
    "firstname": "Deepika",
    "lastName": "Padukone",
    "city": "Mumbai"
  }

  const findResult = await collection.find({firstname: "Deepika"}).countDocuments()
console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());