import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Gallery from "./pages/Gallery";
import Effects from "./pages/Effects";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
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

