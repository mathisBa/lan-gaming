import "./index.scss";
import ConfirmRegister from "./pages/confirm-register/ConfirmRegister.tsx";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Register from "./pages/register/Register.tsx";
import Result from "./pages/result/Result.tsx";
import TournamentPage from "./pages/tournement/Tournement.tsx";
import { createRoot } from "react-dom/client";
import ErrorPage from "./pages/error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    )
  },
  {
    path: "/tournoi",
    element: (
      <Layout>
        <TournamentPage />
      </Layout>
    )
  },
  {
    path: "/resultats",
    element: (
      <Layout>
        <Result />
      </Layout>
    )
  },
  {
    path: "/confirm-register",
    element: (
      <Layout>
        <ConfirmRegister />
      </Layout>
    )
  },
  {
    path: "/error",
    element: (
      <Layout>
        <ErrorPage />
      </Layout>
    )
  },
  // Route "catch-all" pour gérer les erreurs 404
  {
    path: "*",
    element: (
      <Layout>
        <ErrorPage />
      </Layout>
    )
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker enregistré avec succès :",
          registration
        );
      })
      .catch((error) => {
        console.error(
          "Échec de l'enregistrement du Service Worker :",
          error
        );
      });
  });
}
