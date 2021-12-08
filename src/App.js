import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Body from "./pages/body/Body";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/body" element={<Body />} />
    </Routes>
  );
}

export default App;
