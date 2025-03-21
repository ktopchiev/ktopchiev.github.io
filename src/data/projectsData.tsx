import Project from "../models/project";

export const projectsData: Project[] = [
    {
        id: 1,
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
            "Redux",
            "MaterialUI",
            "Responsive Design",
            "GitHub Actions"
        ]
    },
    {
        id: 2,
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
    }
]