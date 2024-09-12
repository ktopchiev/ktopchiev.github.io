import { Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useMemo } from "react";

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	);

	return (

		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: 'false' }}>
					<Outlet />
				</Container >

			</ThemeProvider>
		</>
	)
}

export default App
