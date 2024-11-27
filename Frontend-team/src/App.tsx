// import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import MainApp from "./pages/mainApp";

import Onboarding from "./pages/onBoarding";
  /**
   * App component renders the main application layout.
   *
   * It includes the Navbar, Routes for landing page and main app, and the Footer.
   *
   * The container element has a dark gradient background and is set to at least
   * the height of the viewport.
   *
   * @returns {JSX.Element} The App component JSX
   */

function App() {
  return (
    <div className="min-h-screen bg-dark-gradient text-white relative overflow-hidden  flex flex-col justify-between">
      {/* <Navbar /> */}
      <Routes >
        <Route path="/" element={<MainApp/>}>
          <Route index element={<LandingPage />} />
          <Route path="/contributors" element={<h1>Contributors</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/rewards" element={<h1>Rewards</h1>} />
          <Route path="/learn" element={<h1>Learn</h1>} />

          <Route path="/community" element={<h1>Community</h1>} />
        </Route>
        {/* <Route element={<MainApp/>} path="/app" /> */}
        <Route element={<Onboarding/>} path="/onboarding"/>
      </Routes>
      {/* <Footer /> */}

    </div>
  )
}

export default App
