import { createBrowserRouter } from "react-router-dom";
import AboutMePage from "../features/AboutMePage";
import ProjectsPage from "../features/ProjectsPage";
import App from "../layout/App";
import ConnectPage from "../features/ConnectPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'about', element: <AboutMePage /> },
            { path: 'projects', element: <ProjectsPage /> },
            { path: 'connect', element: <ConnectPage /> },
        ]
    }
])

export default router