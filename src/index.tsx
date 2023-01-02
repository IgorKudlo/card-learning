import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import Login from './features/auth/Login';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register';
import Recovery from './pages/Recovery';
import Reset from './pages/Reset';
import Profile from './components/Profile';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';

export const ROUTER_PATH = {
  MAIN: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  RECOVERY: "/recovery",
  RESET: "/reset",
  PROFILE: "/profile",
}

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.MAIN,
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: ROUTER_PATH.LOGIN,
        element: <Login/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: ROUTER_PATH.REGISTER,
        element: <Register/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: ROUTER_PATH.RECOVERY,
        element: <Recovery/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: ROUTER_PATH.RESET,
        element: <Reset/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: ROUTER_PATH.PROFILE,
        element: <Profile />,
        errorElement: <ErrorPage/>,
      },
    ],
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  /*<React.StrictMode>*/
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyledEngineProvider>
  /*</React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
