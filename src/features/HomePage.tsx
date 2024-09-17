import { Box, Container, Grid, Typography } from "@mui/material"

function HomePage() {
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
                        src="../public/me.png"
                    >

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
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
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage