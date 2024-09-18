import { Container } from "@mui/material"
import Header from "./header/Header"
import { Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

function App() {

	return (

		<>
			<Header />
			<AnimatePresence initial={false} mode={"wait"}>
				<Container sx={{ overflow: 'hidden' }}>
					<Outlet key={window.location.pathname} />
				</Container>
			</AnimatePresence>
		</>
	)
}

export default App
