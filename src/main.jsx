import React, { StrictMode }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App.jsx'; 
/*import { createBrowserRouter, RouterProvider } from 'react-router-dom'*/


ReactDOM.createRoot(document.getElementById('root')).render(
  /*<RouterProvider router={router} />*/
  <StrictMode>
  <App />
</StrictMode>
)
