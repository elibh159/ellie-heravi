 import imageOfEli from "./IMG.jpg";
 import cv from "./resume.pdf";

export const data = {
    header: "hello,",
    subHeader: "i am elham baradaran heravi",
    career: [{
        title: "full stack developer"
    }, {
        title: "backend developer"
    }, {
        title: "frontend developer"
    }],
    career2: [
        "FullStack-Developer"
        , "BackEnd"
        , "FrontEnd"
        , "Developer"
    ],
    mainContent: `David There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
         If you are going to use a passage of Lorem Ipsum, you need to be sure there.`,
    btn: {
        src: cv,
        name: "download my cv"
    },
    media: {
        src: imageOfEli,
        alt: "ELLIE BH"
    }
};