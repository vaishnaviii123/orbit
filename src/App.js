import React, { useEffect, useRef } from "react";
import ParentComponent from "./components/UseCallBackConcept/ParentComponent";
import Counter from "./components/UseMemo/Counter";
import FocusInput from "./components/UseRef/FocusInput";
import ClassTimer from "./components/UseRef/ClassTimer";
import HookTimer from "./components/UseRef/HookTimer";

function App() {
  
  return (
    <div>
      <HookTimer/>
      <ClassTimer/>
      {/* <FocusInput /> */}
      {/* <ParentComponent/>
      <Counter/> */}
    </div>
  );
}

export default App;
