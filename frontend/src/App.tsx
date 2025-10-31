import { Navigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import { Homepage } from "./layouts/Homepage/Homepage";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ItemPage } from "./layouts/ItemPage/ItemPage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { CallbackPage } from "./auth/CallbackPage";

export const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname == "/callback";

  return (
    <div className="d-flex flex-column min-vh-100">
      {!hideLayout && <Navbar />}
      <div className="flex-grow-1 container-fluid">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </div>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
