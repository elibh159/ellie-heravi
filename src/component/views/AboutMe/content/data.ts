import imageOfEli from "./IMG.jpg";

export const data = {
    subHeader: "Know about me",
    header: "About me",
    mainContent: `My work aims to enrich the lives of others and allow me 
    to build on my own experiences. Knowledgeable in React.js and node.js.
     Passionate for learning DevOps, automating everything,
     writing scripts for any repeated job, and testing and monitoring them.`,
    listOfInfo: [
        {
            id: 1,
            name: "name",
            value: "Elham Baradaran Heravi",
            type: "text"
        },
        {
            id: 2,
            name: "freelance",
            value: "Available",
            type: "text"
        },
        {
            id: 3,
            name: "Email",
            value: "ebheravi159@gmail.com",
            type: "link"
        },
        {
            id: 4,
            name: "phone",
            value: "(098)-935-216-2416",
            type: "text"
        },
        {
            id: 5,
            name: "Work Status",
            value: "web developer",
            type: "text"
        },
        {
            id: 6,
            name: "Marital Status ",
            value: "marrid",
            type: "text"
        }
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
    ],
    media: {
        src: imageOfEli,
        alt: "ELLIE BH"
    }
};