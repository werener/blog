import { Elysia, t } from "elysia";
 
export const authRoutes = new Elysia({ prefix: "/auth" })
    .post("sign-up/", ({ error }) => error(501))
    .post("sign-in/", ({ error }) => error(501))
    .post("log-out/", ({ error }) => error(501))
