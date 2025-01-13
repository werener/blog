import { Elysia, t } from "elysia";
import { dbRoutes } from "./db";
 
export const api = new Elysia({ prefix: "/api" })
    .onTransform(function log({ body, params, path, request: { method } }) { 
        console.log(`${method} ${path}`, { 
            body, 
            params 
        }) 
    }) 
    .use(dbRoutes);
