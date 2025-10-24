import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Homepage } from "./layouts/Homepage/Homepage";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ItemPage } from "./layouts/ItemPage/ItemPage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 container-fluid">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
