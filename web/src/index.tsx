import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import reportWebVitals from "./reportWebVitals";
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/router";
import App from "./App";
import HostPage from "./components/Host/HostPage";
import ParticipantPage from "./components/Participant/ParticipantPage";

// Create a root route
const rootRoute = new RootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",

  component: App,
});

const participantRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/participant",
  component: ParticipantPage,
});
const hostRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/host",
  component: HostPage,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  hostRoute,
  participantRoute,
]);

// Create the router using your route tree
const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
