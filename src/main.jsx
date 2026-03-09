import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./page/ErrorPage.jsx";
import Login from "./page/Login.jsx";
import Home from "./page/Home.jsx";
import Registration from "./page/Registration.jsx";
import AddSpot from "./page/AddSpot.jsx";
import MyList from "./page/MyList.jsx";
import AllSpot from "./page/AllSpot.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import Profile from "./page/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import SpotDetails from "./page/SpotDetails.jsx";
import UpdateSpot from "./page/UpdateSpot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/add_spot",
        element: (
          <PrivateRoute>
            <AddSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/all_spot",
        element: <AllSpot />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/spot-details/:id",
        element: <SpotDetails />,
      },
      {
        path: "/update-spot/:id",
        element: <UpdateSpot />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </ThemeContextProvider>,
);
