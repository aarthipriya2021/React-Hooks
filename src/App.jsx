/* eslint-disable no-unused-vars */



// import React from 'react';
import './App.css';
import  UseStateHook from "./hooks/usestate/UsestateHook";
import UseeffectHook from './hooks/useeffect/UseeffectHook';
import UsecontextHook from './hooks/usecontext/UsecontextHook';
import UsecallbackHook from './hooks/usecallback/UsecallbackHook';
import UsememoHook from './hooks/usememoHook/UsememoHook';
import UseRefHook from './hooks/useref/UseRefHook';
// import UsestateObject from './hooks/usestate/UsestateObject';

function App() {

  return (
    <div>

      {/* 01 - useState() Hook */}
      {/* <UseStateHook /> */}

      {/* below component just for object in useState reference only */}
      {/* <UsestateObject /> */}


      {/* 02 - useEffect() Hook */}
      {/* <UseeffectHook /> */}


      {/* 03 - useContext() Hook */}
      {/* <UsecontextHook /> */}


      {/* 04 - useCallback() Hook */}
      {/* <UsecallbackHook /> */}


      {/* 05 - useMemo() Hook */}
      {/* <UsememoHook /> */}


      {/* 06 - useRef() Hook */}
      <UseRefHook />


    </div>
  )
}

export default App
