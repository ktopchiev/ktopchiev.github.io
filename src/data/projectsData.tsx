import Project from "../models/project";

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Smarty Party",
        image: "../images/smarty-party-screen.png",
        url: "#",
        repoUrl: "https://github.com/ktopchiev/SmartyParty",
        shortDescription: `This is a full-stack AI Powered web application.
            It is a real-time multiplayer quiz game built with ASP.NET, React, Redux Toolkit, SignalR, and PostgreSQL.
            Players can join quiz rooms, chat, and compete in live trivia rounds.
            Note: It is still not live.`,
        description: `This is a full-stack AI Powered web application.
            It is a real-time multiplayer quiz game built with ASP.NET, React, Redux Toolkit, SignalR, and PostgreSQL.
            Players can join quiz rooms, chat, and compete in live trivia rounds.
            Note: It is still not live.`,
        techStack: [
            "ASP.NET",
            "React",
            "SignalR",
            "OpenAI",
            "Minimal API",
            "PostgreSQL",
            "Redux Toolkit",
            "RTK Query",
            "Bootstrap",
            "Responsive Design",
            "fly.io",
            "Docker",
            "GitHub Actions",
        ]
    },
    {
        id: 2,
        title: "E-Commerce Web App",
        image: "../images/carlos-e-commerce-app.png",
        url: "https://carlos-ecommerce-app.fly.dev/",
        repoUrl: "https://github.com/ktopchiev/E-Commerce",
        shortDescription: "This is a full-stack web application using ASP.NET Core (backend) and React + Redux (frontend)." +
            "It uses PostgreSQL as the database and is containerized with Docker and deployed on Fly.io,",
        description: "This is a full-stack web application using ASP.NET Core (backend) and React + Redux (frontend)." +
            "It uses PostgreSQL as the database and is containerized with Docker and deployed on Fly.io,",
        techStack: [
            "ASP.NET",
            "PostgreSQL",
            "Docker",
            "fly.io",
            "React",
            "Redux Toolkit",
            "Axios",
            "MaterialUI",
            "Responsive Design",
            "GitHub Actions",
        ]
    },
    {
        id: 3,
        title: "Blacksmith E-commerce Web App",
        image: "../images/blacksmith.png",
        url: "https://blacksmithsolution-e5dfd7auercug3cz.westeurope-01.azurewebsites.net/",
        repoUrl: "https://github.com/ktopchiev/BlacksmithSolution",
        shortDescription: "This is a Full-stack, Clean Architecture web application using ASP.NET Core (backend) and React + Redux (frontend)." +
            "It uses PostgreSQL on Supabase as the database and is deployed on Azure.",
        description: "",
        techStack: [
            "ASP.NET",
            "PostgreSQL",
            "React",
            "Redux Toolkit",
            "Rtk Query",
            "MaterialUI",
            "GitHub Actions",
            "CI/CD",
            "Supabase",
            "Azure",
            "Clean Architecture",
        ]
    },
    {
        id: 4,
        title: "Portfolio GitHub Page",
        image: "../images/my-portfolio-page.png",
        url: "",
        repoUrl: "https://github.com/ktopchiev/ktopchiev.github.io",
        shortDescription: "Portfolio web site made with React + Typescript and deployed on GitHub Pages",
        description: "",
        techStack: [
            "React",
            "MaterialUI",
            "Responsive Design",
            "GitHub Pages"
        ]
    },

]