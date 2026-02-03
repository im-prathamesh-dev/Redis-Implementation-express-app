import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  // ✅ required for Supabase cloud
  ssl: {
    rejectUnauthorized: false,
  },

  // ✅ VERY IMPORTANT (fixes Docker + Supabase IPv6 issue)
  family: 4,

  // optional good defaults
  max: 10, // max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});


// ✅ Test connection once at startup
(async () => {
  try {
    const client = await pool.connect();
    console.log("✅ PostgreSQL connected successfully");
    client.release();
  } catch (err) {
    console.error("❌ PostgreSQL connection failed:", err.message);
  }
})();
