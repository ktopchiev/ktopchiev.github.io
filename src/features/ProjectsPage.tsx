import { Container, Typography } from "@mui/material"
import { motion as m } from 'framer-motion';
import useAnimationState from "../hooks/useAnimationState";

function ProjectsPage() {

    const isLoaded = useAnimationState();

    return (
        <m.div
            initial={{ y: "100%" }}
            animate={isLoaded ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    padding: '50px'
                }}
            >
                <Typography>Comming soon...</Typography>
            </Container>
        </m.div>
    )
}

export default ProjectsPage