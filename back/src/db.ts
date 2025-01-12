import { Elysia, t } from "elysia";

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
            description: "kill yourself",
        },
    ]
};

export const dbRoutes = new Elysia({ prefix: "/db" })
    .get("/gallery",
         ({ set }) => {
            set.headers = {"Access-Control-Allow-Origin": "*"}
            return tempDB.gallery
         },
         {
            response: t.Array(
                t.Object({
                    img: t.String(),
                    name: t.String(),
                    description: t.String()
                })
            )
         }
        )
    .get("/projects",
         tempDB.projects,
         {
            response: t.Array(
                t.Object({
                    carousel: t.Array(t.String()),
                    name: t.String(),
                    link: t.Optional(t.String()),
                    description: t.String()
                })
            )
         }
        );