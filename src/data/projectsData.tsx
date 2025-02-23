import Project from "../models/project";

export const projectsData: Project[] = [
    {
        id: 1,
        title: "E-Commerce Web App",
        image: "../images/carlos-e-commerce-app.png",
        url: "https://carlos-ecommerce-app.fly.dev/",
        repoUrl: "https://github.com/ktopchiev/E-Commerce",
        shortDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." +
            "Aperiam cumque error rem tenetur dolorum. Saepe aspernatur quod eius qui amet quaerat voluptatem, eos beatae. Pariatur, vel quaerat. Expedita, id quos.",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam voluptates excepturi nobis culpa?" +
            "Dolorum voluptatibus accusamus possimus, similique tenetur culpa quidem corrupti laboriosam ipsa exercitationem odit. Excepturi, nobis aliquam.",
        techStack: [
            "ASP.NET",
            "React",
            "Redux",
            "MaterialUI",
        ]
    },
]