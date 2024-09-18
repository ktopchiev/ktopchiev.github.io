import { Box, Container, Grid, Typography } from "@mui/material"
import { motion as m } from 'framer-motion'
import useAnimationState from "../hooks/useAnimationState"

function HomePage() {

    const isLoaded = useAnimationState();

    return (
        <Container>
            <Grid container spacing={8}
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid item xs={12} md={6} sx={{ padding: '15px' }}>
                    <Box
                        sx={{
                            width: '100%',
                            clipPath: 'circle()'
                        }}
                        component="img"
                        alt="My portrait photo."
                        src='/images/me.jpg'
                    >

                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <m.div
                        initial={{ x: "-100%", opacity: 0, zIndex: 1 }}
                        animate={isLoaded ? { x: "0%", opacity: 1, zIndex: 6 } : { x: "-100%", opacity: 0, zIndex: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        exit={{ opacity: 1 }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white'
                            }}
                        >
                            <Typography variant="h3">Hi, I'm Karol. A passionate software developer. Explore my portfolio.</Typography>
                        </Box>
                    </m.div>
                </Grid>

            </Grid>
        </Container >
    )
}

export default HomePage