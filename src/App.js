import { createContext, useState } from "react";
import "./App.css";
import Group from "./components/group";
import builderStructureData from "./components/builderStructureData";
import SebSolution2 from './SebSolution2'
import SebSolution3 from "./SebSolution3";
import SebSolution4 from "./SebSolution4";

export const BuilderContext = createContext();

function App() {
  return (
    <>
      <SebSolution4 />
    </>
  );
}

export default App;
