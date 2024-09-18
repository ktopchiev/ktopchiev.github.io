import { Box, Container, Grid, Typography } from "@mui/material"
import { motion as m } from 'framer-motion'
import useAnimationState from "../hooks/useAnimationState"
import useScreenSize from "../hooks/useScreenSize";

function HomePage() {

    const isLoaded = useAnimationState();
    const isSmallScreen = useScreenSize();

    return (
        <Container>
            <Grid container spacing={isSmallScreen ? 0 : 8}
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid item xs={12} md={6}>
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

                <Grid item xs={12} md={6} sx={{ py: 0 }}>
                    <m.div
                        initial={{ x: "-100%", opacity: 0, zIndex: 1 }}
                        animate={isLoaded ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        exit={{ opacity: 1 }}
                    >
                        <Typography sx={{ fontSize: { md: '30px', xs: '25px' } }} color={'white'}>Hi, I'm Karol. A passionate software developer. Explore my portfolio.</Typography>
                    </m.div>
                </Grid>

            </Grid>
        </Container >
    )
}

export default HomePage