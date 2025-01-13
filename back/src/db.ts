import { Elysia, t } from "elysia";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { galleryTable, projectsTable } from "./db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);


// TODO: map queries to normal responses
export const dbRoutes = new Elysia({ prefix: "/db" })
    .get("/gallery",
         async ({ set }) => {
            set.headers = {"Access-Control-Allow-Origin": "*"}
            const response = await db.select().from(galleryTable);
            return response;
         }
        )
    .get("/projects",
        async ({ set }) => {
            set.headers = {"Access-Control-Allow-Origin": "*"}
            const response = await db.select().from(projectsTable);
            return response;
         }
        );
