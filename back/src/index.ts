import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { api } from "./api"


const app = new Elysia()
    .use(swagger())
    .get("/", () => "Hello Elysia\nlocalhost:3000/swagger")
    .use(api)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
