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