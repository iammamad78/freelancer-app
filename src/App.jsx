import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="container xl:max-w-screen-xl">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
