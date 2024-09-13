import { Container, Typography } from "@mui/material"
import { motion as m } from 'framer-motion';

function ProjectsPage() {
    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <Container variant="container">
                <Typography>Comming soon...</Typography>
            </Container>
        </m.div>
    )
}

export default ProjectsPage