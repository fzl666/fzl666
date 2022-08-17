import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Gallery from "./pages/Gallery";
import Effects from "./pages/Effects";
import NoPage from "./pages/NoPage";
import Bulletin from "./pages/Bulletin.js";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Bulletin" element={<Bulletin/>} />
          <Route path="Web" element={<Web />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Effects" element={<Effects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

