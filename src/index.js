import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimerPage from "./components/TimerPage"


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/TimerPage" element={<TimerPage/>} />
         
        </Routes>
    </BrowserRouter >
)
