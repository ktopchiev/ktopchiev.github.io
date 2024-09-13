import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import Header from "./Header"
import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

function App() {

	const location = useLocation();

	// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	// const theme = useMemo(
	// 	() =>
	// 		createTheme({
	// 			palette: {
	// 				mode: prefersDarkMode ? 'dark' : 'light',
	// 			},
	// 		}),
	// 	[prefersDarkMode],
	// );

	const theme = createTheme({
		components: {
			MuiTypography: {
				styleOverrides: {
					root: {
						variants: [
							{
								props: { variant: 'header-name' },
								style: {
									color: 'white',
									display: { xs: 'none', md: 'flex' },
									fontWeight: 700,
									letterSpacing: '.3rem',
									textDecoration: 'none'
								}
							}
						]
					}
				}
			},
			MuiContainer: {
				styleOverrides: {
					root: {
						variants: [
							{
								props: { variant: 'dark' },
								style: {
									margin: 0,
									maxWidth: false,
									width: '100vw',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									height: '100vh'
								},
							},
							{
								props: { variant: 'container' },
								style: {
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									color: 'white',
									backgroundColor: 'transparent'
								}
							}
						]
					}
				}
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						variants: [
							{
								props: { variant: 'transparent' },
								style: {
									backgroundColor: 'transparent'
								}
							}
						]
					}
				}
			},
			MuiButton: {
				styleOverrides: {
					root: {
						variants: [
							{
								props: { variant: 'contained' },
								style: {
									backgroundColor: '#60e356'
								}
							}
						]
					}
				}
			}
		}
	});

	return (

		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Container variant='dark' sx={{ overflow: 'hidden' }}>
					<AnimatePresence initial={false} mode={"wait"}>
						<Outlet key={location.pathname} />
					</AnimatePresence>
				</Container >
			</ThemeProvider >
		</>
	)
}

export default App
