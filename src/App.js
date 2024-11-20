import React, { useEffect, useRef } from "react";
import ParentComponent from "./components/UseCallBackConcept/ParentComponent";
import Counter from "./components/UseMemo/Counter";
import FocusInput from "./components/UseRef/FocusInput";
import ClassTimer from "./components/UseRef/ClassTimer";
import HookTimer from "./components/UseRef/HookTimer";
import DocTitleOne from "./components/customHook/DocTitleOne";
import DocTitleTwo from "./components/customHook/DocTitleTwo";
import CounterOne from "./components/customHook/CounterOne";
import CounterTwo from "./components/customHook/CounterTwo";
import UserForm from "./components/customHook/UserForm";
import { UseState } from "./components/ReactRender/UseState/UseState";
import { UseReducer } from "./components/ReactRender/UseState/UseReducer";

function App() {
  
  return (
    <div>
      <UseReducer/>
      {/* <UseState/> */}
      {/* <UserForm/> */}
      {/* <CounterOne/>
      <CounterTwo/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <HookTimer/>
      <ClassTimer/> */}
      {/* <FocusInput /> */}
      {/* <ParentComponent/>
      <Counter/> */}
    </div>
  );
}

export default App;
