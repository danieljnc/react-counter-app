import React from "react";
import { createRoot } from 'react-dom/client';
import CounterApp from "./CounterApp";
// import FirstApp from "./FirstApp";
import "./index.css";


const divRoot = document.querySelector("#root");
const root = createRoot(divRoot)
root.render(<CounterApp />);