import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './layout/style.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routes.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
