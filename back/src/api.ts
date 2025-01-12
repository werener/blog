import { Elysia, t } from "elysia";
import { dbRoutes } from "./db";
 
export const api = new Elysia({ prefix: "/api" })
    .use(dbRoutes);
