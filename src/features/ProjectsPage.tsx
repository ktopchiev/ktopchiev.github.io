import { Container, Typography } from "@mui/material"
import { motion as m } from 'framer-motion';

function ProjectsPage() {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
        >
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Comming soon...</Typography>
            </Container>
        </m.div>
    )
}

export default ProjectsPage