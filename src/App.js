import { Navbar } from "./components/Navbar";

import React, { useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Works } from "./components/Works";

let modeStatus = false;
function getCurrTime() {
  let currTime = new Date().getHours();
  currTime = parseInt(currTime);
  if (currTime >= 19 || currTime <= 7) {
    modeStatus = true;
  } else {
    modeStatus = false;
  }
  return modeStatus;
}

function App() {
  const [mode, setMode] = useState(getCurrTime());
  const handleMode = () => {
    setMode(!mode);
  };
  return (
    <>
      <div
        onClick={handleMode}
        className={`fixed right-5 bottom-5 p-0 m-0 rounded-md cursor-pointer ${
          mode ? "text-slate-400" : "text-black"
        }`}
      >
        {mode ? <FaSun /> : <FaMoon />}
      </div>
      <div
        className={`w-full h-full ${
          mode
            ? "bg-slate-900 text-slate-200 duration-1000"
            : "bg-slate-200 text-slate-900 duration-1000"
        }`}
      >
        <Navbar />
        <Home />
        <Skills />
        <Works />
        <Contact />
      </div>
    </>
  );
}

export default App;
