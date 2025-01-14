import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  PrivateRoute,
  APrivateRoute,
  ApprovePrivateRoute,
} from "./component/Index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persist } from "./store/store.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Login,
  Signup,
  Share,
  Profile,
  Approve,
  Feed,
  Explore,
} from "./pages/index.js";

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
        element: (
          <APrivateRoute>
            <Login />
          </APrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <APrivateRoute>
            <Signup />
          </APrivateRoute>
        ),
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
          <ApprovePrivateRoute>
            <Approve />
          </ApprovePrivateRoute>
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
