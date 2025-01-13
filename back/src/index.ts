import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { api } from "./api"
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DB_FILE_NAME!);
const db = drizzle({ client: sqlite });

const app = new Elysia()
    .use(swagger())
    .get("/", () => "Hello Elysia\nlocalhost:3000/swagger")
    .use(api)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
