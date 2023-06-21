import crazyFrog from "./../assets/crazyFrogGame.jpg"
import musicEvents from "./../assets/musicEventsApp.jpg"
import musicTeams from "./../assets/musicTeamsApp.jpg"
import packSnak from "./../assets/packSnackSL.jpg"

export const projectsData = [
    {
        id: "Music Teams App",
        image: musicTeams,
        title: "Music Teams App",
        category: "Fullstack aplication",
        projectLink: "https://musicteamsapp.netlify.app/",
        description: "Proyect módulo 3 Ironhack. Aplicación web full MERN que consiste en una red social que pone en contactos músicos con salas de ensayo para poder quedar para tocar con otros músicos.",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "HTML5",
            "Express",
            "Mongoose",
            "MongoDb",
            "Node.js"
        ]
    },
    {
        id: "Music Events App",
        image: musicEvents,
        title: "Music Events App",
        category: "Backend aplication",
        projectLink: "https://music-events.fly.dev/",
        description: "Proyecto módulo 2 Ironhack. Aplicación web para asistir a eventos musicales de todo tipo, así como gestionar tus artistas favoritos usando la API de Spotify.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5",
            "Express",
            "Mongoose",
            "MongoDb",
            "Node.js"
        ]
    },
    {
        id: "The Crazy Frog Game",
        image: crazyFrog,
        title: "The Crazy Frog Game",
        category: "Frontend aplication",
        projectLink: "https://lourdesgonzalezt.github.io/Game/",
        description: "Proyecto módulo 1 Ironhack. Videojuego de plataformas para navegadores web.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5",
            "Canvas"
        ]
    },
    {
        id: "Pack Snack DSS",
        image: packSnak,
        title: "Pack Snack DSS",
        category: "Data aplication",
        projectLink: "https://www.inesem.es/articulos-investigacion/sistema-soporte-lineas-produccion",
        description: "Proyecto final Master Big Data. Aplicación para medir tiempos de producción de una planta de envasado y tratar los datos obtenidos para la ayuda en la toma de decisiones",
        tools: [
            "Python",
            "Sql",
            "R"
        ]
    },

];

export const projectsNav = [
    {
        name: "all"
    },

    {
        name: "frontend"
    },
    {
        name: "backend"
    },
    {
        name: "fullstack"
    },
    {
        name: "data"
    },
]
