import mapify from "../assets/images/mapify.png"
import covR from "../assets/images/coronaR.png"
import mu from "../assets/images/mu.png"
import covinfo from "../assets/images/covinfo.png"
import vscode from "../assets/images/vscode.png"
import insta from "../assets/icons/insta.webp"
import meme from "../assets/images/meme.png"

export const PROJECTS: { id: number, image: string, title: string, description: string, btnText: string, width: string, link: string }[] = [
    {
        id: 1,
        image: mapify,
        title: "Mapify Map App",
        description: "It's a web application, which can transform any image into map and you can find the shortest path from your desired source to destination. It's more like 'Your Map', that's why we created it too much personalized for your personal use.",
        btnText: "Project Link",
        width: "30vw",
        link: "https://github.com/soumya-99/mapify-map-app/"
    },
    {
        id: 2,
        image: covR,
        title: "Covid-19 Tracker",
        description: "This is a Covid-19 Tracker made with React JS and Firebase. It uses a government API to fetch the data and displays it in a table. You can also search for any country and get the data of that country. You can also see the data of the entire world.",
        btnText: "Project Link",
        width: "45vw",
        link: "https://github.com/soumya-99/Covid-19-Tracker/"
    },
    {
        id: 3,
        image: mu,
        title: "Material You Color Picker",
        description: "This is a Material You color picker. You can choose any color and get the hex code of that color. And voila! A Material 3 color palette is generated for you.",
        btnText: "Project Link",
        width: "40vw",
        link: "https://github.com/soumya-99/material-you-color-picker/"
    },
    {
        id: 4,
        image: covinfo,
        title: "Covid Info App",
        description: "Brief information about Corona Virus and how to stop its spreading. This a information app for those who need some simple awareness for covid. This is made with PHP and Bootstrap. Primary level app is made for the purpose of learning and practicing.",
        btnText: "Project Link",
        width: "35vw",
        link: "https://github.com/soumya-99/Covid-19_Pandemic/"
    },
    {
        id: 5,
        image: vscode,
        title: "Material Color Picker Extension",
        description: "This is nothing but a Material Design 3 color extractor which you can use in VSCode. You can choose any color and get the hex code of that color. And voila! A Material 3 color palette is generated for you.",
        btnText: "Project Link",
        width: "45vw",
        link: "https://github.com/soumya-99/material-3-color-vscode-extension/"
    },
    {
        id: 6,
        image: insta,
        title: "Instagram Reels Clone",
        description: "This is a clone app for Instagram Reels with React and Firebase. All those videos are coming from the Firebase database and you can also upload your own videos. You can also see the data of the entire world.",
        btnText: "Project Link",
        width: "30vw",
        link: "https://github.com/soumya-99/instagram-clone-react"
    },
    {
        id: 7,
        image: meme,
        title: "Meme App",
        description: "It's an Android Application which can generate memes. You can see unlimited memes with it and also you can share it with your friends.",
        btnText: "Project Link",
        width: "40vw",
        link: "https://github.com/soumya-99/meme-app"
    },
]