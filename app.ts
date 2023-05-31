import express from "express";
import { Pool } from "pg";
import config from "./config";

const app = express();
const pool = new Pool(config);

app.use(express.json());

app.get("/api/products", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM products");
  res.json(rows);
});

app.post("/api/products", async (req, res) => {
  const { product_name, category } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO products (product_name, category) VALUES ($1, $2) RETURNING *",
    [product_name, category]
  );
  res.json(rows[0]);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
