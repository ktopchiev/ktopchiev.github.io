import { createBrowserRouter } from "react-router-dom";
import AboutMePage from "../features/AboutMePage";
import ProjectsPage from "../features/ProjectsPage";
import ContactsPage from "../features/ContactsPage";
import App from "../layout/App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'about', element: <AboutMePage /> },
            { path: 'projects', element: <ProjectsPage /> },
            { path: 'contacts', element: <ContactsPage /> },
        ]
    }
])

export default router