import { config as cf } from "dotenv";

cf();

const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.DB_URL,
    env: process.env.env,
    JWT_SECRET: process.env.JWT_SECRET
}

export const config =  Object.freeze(_config)