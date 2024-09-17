import { CssBaseline } from "@mui/material"
import Header from "./header/Header"
import { Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

function App() {

	return (

		<>
			<CssBaseline />
			<Header />
			<AnimatePresence initial={false} mode={"wait"}>
				<Outlet key={location.pathname} />
			</AnimatePresence>
		</>
	)
}

export default App
