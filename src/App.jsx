import { HashRouter, Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Version1 from "./pages/Version1";
import Version2 from "./pages/Version2";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/testing" element={<Timeline />} />
        <Route path="/version1" element={<Version1 />} />
        <Route path="/version2" element={<Version2 />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
