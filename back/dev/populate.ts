import 'dotenv/config';
import { drizzle } from "drizzle-orm/bun-sqlite";
import { galleryTable, projectsTable } from '../src/db/schema';

const db = drizzle(process.env.DB_FILE_NAME!);

const testData = {
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

async function populate() {
    const galleryItems = testData.gallery.map((item) => {
        return { 
            imagePath: item.img, 
            name: item.name,
            description: item.description 
        }
    });
    for (let galleryItem of galleryItems) {
        await db.insert(galleryTable).values(galleryItem);
    }
    console.log('Populated gallery table');
    console.log(db.select().from(galleryTable));
    
    const projectsItems = testData.projects.map((item) => {
        return { 
            imagePath: item.carousel[0], // didnt create an array of image paths for projects schema yet
            name: item.name,
            link: item.link,
            description: item.description
        }
    });
    for (let projectItem of projectsItems) {
        await db.insert(projectsTable).values(projectItem);
    }
    console.log('Populated projects table');
    console.log(db.select().from(projectsTable));
}

populate();
