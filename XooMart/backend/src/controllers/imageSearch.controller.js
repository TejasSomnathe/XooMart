import multer from "multer";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import fs from "fs";
import { Product } from "../models/product.model.js";

// Multer for user upload
const upload = multer({ dest: "uploads/" });

let model;

// Load MobileNet model once
export const initModel = async () => {
  model = await mobilenet.load({ version: 2, alpha: 1.0 });
};

// Get embedding vector from image file
async function getEmbeddingFromFile(filePath) {
  const imageBuffer = fs.readFileSync(filePath);
  const image = tf.node
    .decodeImage(imageBuffer, 3)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .expandDims();
  const embedding = model.infer(image, true);
  return embedding.arraySync()[0]; // convert tensor → JS array
}

// Calculate cosine similarity
function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (normA * normB);
}

// Search by uploaded image
export const searchByImage = [
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file)
        return res.status(400).json({ error: "No image uploaded" });

      // Step 1: embedding of uploaded image
      const queryEmbedding = await getEmbeddingFromFile(req.file.path);

      // Step 2: get all product embeddings (pre-computed and stored in DB)
      const products = await Product.find();

      // Step 3: compute similarity
      const matches = products
        .map((p) => ({
          ...p.toObject(),
          score: cosineSimilarity(queryEmbedding, p.embedding), // compare with saved embedding
        }))
        .sort((a, b) => b.score - a.score) // sort by similarity
        .slice(0, 5); // top 5 results

      res.json({ matches });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];
