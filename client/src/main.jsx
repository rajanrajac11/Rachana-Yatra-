import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Feed,
  Explore,
  Login,
  Signup,
  Share,
  Approve,
  PrivateRoute,
  Profile,
  APrivateRoute,
} from "./component/Index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persist } from "./store/store.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/share",
        element: <Share />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
        path: "/approve",
        element: (
          <APrivateRoute>
            <Approve />
          </APrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persist} loading={null}>
      <StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </StrictMode>
    </PersistGate>
  </Provider>
);
