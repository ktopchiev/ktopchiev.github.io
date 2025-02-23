import { Container } from "@mui/material"
import { motion as m } from 'framer-motion';
import useAnimationState from "../../hooks/useAnimationState";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";
import Project from "../../models/project";

function ProjectsPage() {

    const isLoaded = useAnimationState();

    return (
        <m.div
            initial={{ y: "100%" }}
            animate={isLoaded ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", mt: 4, pt: 4 }}>
                {projectsData.map((proj: Project) =>
                    <ProjectCard key={proj.id} project={proj} />
                )}
            </Container>
        </m.div >
    )
}

export default ProjectsPage