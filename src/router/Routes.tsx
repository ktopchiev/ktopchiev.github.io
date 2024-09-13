import { createHashRouter } from "react-router-dom";
import App from "../layout/App";
import ConnectPage from "../features/ConnectPage";
import AboutMePage from "../features/AboutMePage";
import ProjectsPage from "../features/ProjectsPage";

const router = createHashRouter([
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