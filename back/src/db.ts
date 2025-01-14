import { Elysia, t } from "elysia";
import "dotenv/config";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { galleryTable, projectsTable } from "./db/schema";
import { createSelectSchema } from "drizzle-typebox";

const db = drizzle(process.env.DB_FILE_NAME!);

function removeEmpty(obj: Object): Object {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v !== null)
    );
}

const _readGallery = createSelectSchema(galleryTable, {
    name: t.Optional(t.String()),
    description: t.Optional(t.String()),
});
const _readProjects = createSelectSchema(projectsTable, {
    link: t.Optional(t.String()),
    description: t.Optional(t.String()),
    mediaPaths: t.Array(t.String()),
});

type GalleryItem = {
    name?: string;
    description?: string;
    imagePath: string;
};

type ProjectsItem = {
    name: string;
    link?: string;
    description?: string;
    mediaPaths: string[];
};

export const dbRoutes = new Elysia({ prefix: "/db" })
    .get(
        "/gallery",
        async ({ set }) => {
            set.headers = { "Access-Control-Allow-Origin": "*" };
            const query = await db.select().from(galleryTable);
            const response: GalleryItem[] = query
                .map(({ id, ...keepAttrs }) => keepAttrs)
                .map((it) => removeEmpty(it) as GalleryItem);
            return response;
        },
        {
            response: t.Array(t.Omit(_readGallery, ["id"])),
        }
    )
    .get(
        "/projects",
        async ({ set }) => {
            set.headers = { "Access-Control-Allow-Origin": "*" };
            const query = await db.select().from(projectsTable);
            const response: ProjectsItem[] = query
                .map(({ id, ...keepAttrs }) => keepAttrs)
                .map((it) => removeEmpty(it) as ProjectsItem);
            return response;
        },
        {
            response: t.Array(t.Omit(_readProjects, ["id"])),
        }
    );
