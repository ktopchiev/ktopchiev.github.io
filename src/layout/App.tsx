import { Container, CssBaseline } from "@mui/material"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

function App() {

	return (
		<div>
			<CssBaseline />
			<Header />
			<AnimatePresence initial={false} mode={"wait"}>
				<Container sx={{ mt: 2, maxHeight: '100vh' }}>
					<Outlet key={window.location.pathname} />
				</Container>
			</AnimatePresence>
		</div>
	)
}

export default App
