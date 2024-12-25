import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const App = React.lazy(() => import("./App.jsx"));
const Home = React.lazy(() => import("./components/Home.jsx"));
const Login = React.lazy(() => import("./components/Login.jsx"));
const Register = React.lazy(() => import("./components/Register.jsx"));
const Videoplayer = React.lazy(() => import("./components/Videoplayer.jsx"));
const Channel = React.lazy(() => import("./components/Channel.jsx"));
const Error = React.lazy(() => import("./components/Error.jsx"));

/* Creating routes by using createBrowserRouter */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "100px", fontSize: "20px" }}>Loading...</div>
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/video/:pid",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Videoplayer />
          </Suspense>
        ),
      },
      {
        path: "/:username",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Channel />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense
        fallback={
          <div style={{ marginTop: "100px", fontSize: "20px" }}>Loading...</div>
        }
      >
        <Error />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>
);
