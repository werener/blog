import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const galleryTable = sqliteTable("gallery_table", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text(),
    description: text(),
    imagePath: text().notNull(),
});

export const projectsTable = sqliteTable("projects_table", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    link: text(),
    description: text(),
    mediaPaths: text({ mode: "json" })
        .notNull()
        .$type<string[]>()
        .default(sql`'[]'`),
});
