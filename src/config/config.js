import { Pool } from "pg";
import Dotenv from "dotenv";
Dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export default pool;