import { createSeedClient } from "@snaplet/seed";
// import dotenv from "dotenv";

// dotenv.config({ path: "./.env.local" });

const seed = await createSeedClient();

// Truncate all tables in the database
await seed.$resetDatabase();

// Seed the database with 10 users
await seed.session((x) => x(20));

process.exit();
