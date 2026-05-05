import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const collection = client
  .db(process.env.DB_NAME)
  .collection(process.env.COLLECTION_NAME);
console.log("Connected to MongoDB Atlas");

app.get("/api/items", async (req, res) => {
  const items = await collection.find({}).toArray();
  res.json(items);
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
