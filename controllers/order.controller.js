import { pool } from "../config/db.js";
import { redis } from "../config/redis.js";


// CREATE ORDER
export const createOrder = async (req, res) => {
  const { amount } = req.body;

  await pool.query(
    "INSERT INTO orders(amount) VALUES($1)",
    [amount]
  );

  // invalidate cache
  await redis.del("stats");

  res.json({ msg: "order added" });
};


// GET STATS (WITH REDIS CACHE)
export const getStats = async (req, res) => {

  const cache = await redis.get("stats");

  if (cache) {
    console.log("⚡ FROM REDIS");
    return res.json(JSON.parse(cache));
  }

  console.log("🐢 FROM POSTGRES");

  const result = await pool.query(
    "SELECT COUNT(*) as total_orders, SUM(amount) as revenue FROM orders"
  );

  const stats = result.rows[0];

  await redis.set("stats", JSON.stringify(stats), { EX: 30 });

  res.json(stats);
};
