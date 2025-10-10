import { HashRouter, Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Testing from "./pages/Testing";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
