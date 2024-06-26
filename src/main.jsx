import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
);
