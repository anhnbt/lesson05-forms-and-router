import React from "react";
import ReactDOM from "react-dom/client";
import DanhSachSinhVien from "./components/DanhSachSinhVien";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import ChinhSuaSinhVien from "./components/ChinhSuaSinhVien";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DanhSachSinhVien />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/students/:id" element={<ChinhSuaSinhVien />}></Route>
        <Route path="/add-student" element={<ChinhSuaSinhVien />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);
