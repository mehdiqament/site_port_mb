import { createBrowserRouter } from "react-router"
import Layout from "./Layout"
import Home from "../pages/Home"
import Competences from "../pages/Competences"
import Parcours from "../pages/Parcours"
import Projets from "../pages/Projets"
import FromagerieDetail from "../pages/FromagerieDetail"
import GpsNmeaDetail from "../pages/GpsNmeaDetail"
import Alternance from "../pages/Alternance"
import Contact from "../pages/Contact"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "competences", Component: Competences },
      { path: "parcours", Component: Parcours },
      { path: "projets", Component: Projets },
      { path: "projets/fromagerie", Component: FromagerieDetail },
      { path: "projets/gps-nmea", Component: GpsNmeaDetail },
      { path: "alternance", Component: Alternance },
      { path: "contact", Component: Contact },
    ],
  },
])
