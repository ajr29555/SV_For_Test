import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const client = new MongoClient(process.env.MONGO_URI);
let connected = false;

async function getCollection() {
  if (!connected) {
    await client.connect();
    connected = true;
    console.log("Connected to MongoDB Atlas");
  }
  return client
    .db(process.env.DB_NAME)
    .collection(process.env.COLLECTION_NAME);
}

app.get("/movies", async (req, res) => {
  const collection = await getCollection();
  const movies = await collection.find({}).toArray();
  res.json(movies);
});

app.post("/movies", async (req, res) => {
  const { title, genre, description } = req.body;
  if (!title || !genre || !description) {
    return res.status(400).json({ error: "title, genre and description are required" });
  }
  const collection = await getCollection();
  const result = await collection.insertOne({ title, genre, description });
  res.json({ _id: result.insertedId, title, genre, description });
});

app.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const collection = await getCollection();
  await collection.deleteOne({ _id: new ObjectId(id) });
  res.json({ ok: true });
});

app.get("/movies/search", async (req, res) => {
  const { name } = req.query;
  if (!name) return res.json([]);
  const collection = await getCollection();
  const movies = await collection
    .find({ title: { $regex: name, $options: "i" } })
    .toArray();
  res.json(movies);
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
