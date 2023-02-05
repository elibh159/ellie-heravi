import ahealthy from "./01.jpg";

export const data = {
    subHeader: "My Featured Work",
    header: "My Portfolio",
    category: [
        { id: 0, name: "all" },
        { id: 1, name: "website" },
        { id: 2, name: "portal" },
        { id: 3, name: "sample code" },
        { id: 4, name: "PSD to HTML" }
    ],
    listOfWork: [
        {
            id: 1,
            type: "website",
            name: "agile smart health technology",
            link: "http://ahealthyst.com/",
            tags: ["#react", "#bootstrap", "#multiLangulage"],
            image: ahealthy,
        },
        {
            id: 2,
            type: "website",
            name: "cto-co",
            link: "http://cto-co.eu/",
            tags: ["#react", "#bootstrap"],
            image: ahealthy,
        },
        {
            id: 3,
            type: "sample code",
            name: "task manager",
            link: "git",
            tags: ["#react", "#typescript", "#bootstrap"],
            image: ahealthy,
        },
        {
            id: 4,
            type: "website",
            name: "cto-co",
            link: "http://cto-co.eu/",
            tags: ["#react", "#bootstrap"],
            image: ahealthy,
        },
        {
            id: 5,
            type: "sample code",
            name: "task manager",
            link: "git",
            tags: ["#react", "#typescript", "#bootstrap"],
            image: ahealthy,
        },
    ],
    btns: [
        {
            src: "Resume",
            name: "Resume"
        },
        {
            src: "Contact",
            name: "Hire me"
        }
    ]
};