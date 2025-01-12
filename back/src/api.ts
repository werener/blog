import { Elysia, t } from "elysia";
import { dbRoutes } from "./db";
import { authRoutes } from "./auth";
 
export const api = new Elysia({ prefix: "/api" })
    .use(dbRoutes)
    .use(authRoutes);
