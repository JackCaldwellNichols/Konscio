import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms/Terms";
import Nav from "./Components/Navigation/Nav";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Pages/Privacy/Privacy";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Terms />} path="/términos-y-condiciones" />
        <Route element={<Privacy />} path="/política-de-privacidad" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
