import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { api } from "./api";
import "dotenv/config";
import { drizzle } from "drizzle-orm/bun-sqlite";

const db = drizzle(process.env.DB_FILE_NAME!);

const app = new Elysia()
    .use(swagger())
    .get("/", () => "Hello Elysia\nAPI docs at http://localhost:3000/swagger")
    .use(api)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
