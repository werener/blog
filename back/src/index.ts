import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const tempDB = {
    gallery: [
        {
            img: "https://i.imgur.com/q6hF7OO.jpeg",
            name: "slut",
            description: "merry christmas"
        },
        {
            img: "https://i.imgur.com/q6hF7OO.jpeg",
            name: "slut2",
            description: "feliz navidad"
        },{
            img: "https://i.imgur.com/q6hF7OO.jpeg",
            name: "slut3",
            description: "ho ho ho"
        },
    ],
    projects: [
        {
            carousel: ["https://i.imgur.com/q6hF7OO.jpeg", "https://i.imgur.com/q6hF7OO.jpeg", "https://i.imgur.com/q6hF7OO.jpeg"],
            name: "many sluts",
            link: "https://msun.itch.io/okayga",
            description: "have yourself a merry little christmas"
        },
        {
            carousel: ["https://i.imgur.com/q6hF7OO.jpeg", "https://i.imgur.com/q6hF7OO.jpeg", "https://i.imgur.com/q6hF7OO.jpeg"],
            name: "more sluts",
            link: "https://msun.itch.io/okayga",
            description: "kill yourself",
        },
    ]
};

const app = new Elysia()
    .use(swagger())
    .get("/", () => "Hello Elysia")
    .get("/gallery", tempDB.gallery)
    .get("/projects", tempDB.projects)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
