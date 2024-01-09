/* eslint-disable no-unused-vars */
import { useState, useContext, createContext } from "react";

//  create the context, this method returns two properties provider and consumer
const userContext = createContext();


const UsecontextHook = () => {

  const [user, setUser] = useState("M.S.Dhoni");
  return (

    // providing the data  
    <userContext.Provider value={user}>
      <h4>{`hello ${user}`}</h4>
      <Child3 />
    </userContext.Provider>
  );
};

function Child1() {
  <h1>useContext - child1</h1>;
}

function Child2() {
  <h1>useContext - Child2</h1>;
}

// consume the data using useContext()
function Child3() {
  const user = useContext(userContext);
  return (
    <div>
        <h1>useContext hook</h1>
        <h2>useContext - Child3</h2>
        <h3>Username: {user}</h3>
    </div>
  );
}

export default UsecontextHook;
