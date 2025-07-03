import { Container, CssBaseline } from "@mui/material"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import { AnalyticsTracker } from "../analytics/AnalyticsTracker";

function App() {

	return (
		<div>
			<CssBaseline />
			<Header />
			<AnimatePresence initial={false} mode={"wait"}>
				<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 0, p: 0, minHeight: '100vh', minWidth: '100vw' }}>
					<AnalyticsTracker />
					<Outlet key={window.location.pathname} />
				</Container>
			</AnimatePresence>
		</div>
	)
}

export default App
