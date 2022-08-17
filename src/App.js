import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Gallery from "./pages/Gallery";
import Effects from "./pages/Effects";
import NoPage from "./pages/NoPage";
import Newsletter from "./pages/Newsletter"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="Newsletter" element={<Newsletter />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Web" element={<Web />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Effects" element={<Effects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

