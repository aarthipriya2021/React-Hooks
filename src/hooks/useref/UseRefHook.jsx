import { useState ,useRef} from 'react'

const UseRefHook = () => {

  // for state management, useing the useState() hook
  const [count, setCount] = useState();
  const [input, setInput] = useState("");

  // declaring the variable to useRef() for each element which we want
  const countRef = useRef()
  const inputRef = useRef()

  // manipulating or changing dom element using useRef() hook.
  const countHandler = () => {
      console.log("countRef - ", countRef);
      countRef.current.style.backgroundColor = "Green";
      countRef.current.style.color = "White";
  }

  const inputHandler = () => {

    console.log("inputRef - ", inputRef);
      inputRef.current.style.backgroundColor = "red";
      inputRef.current.style.color = "White";
  }

  return (
    <div>
      {/* adding the reference for dom element in corresponding elements */}
      {/* We do not manipulate or change the ref in return  */}
      <h1>useRef hook</h1>
      <input 
        type="number" 
        value={count}
        style={{margin: "0px 20px"}}
        onChange={e => setCount(e.target.value)} 
        // adding ref attribute to dom element
        ref={countRef}
      />
      <input 
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)} 
        ref={inputRef}
      />

      <p>Count: {count} </p>
      <button onClick={countHandler} style={{margin: "0px 20px"}}>First Button</button>
      <button onClick={inputHandler}>Second Button</button>
    </div>
  )
}

export default UseRefHook;



// useState() hook useRef() hook almost opposite not entirely.
// useRef() hook - to store the reference of an element not an value. 
// useState() hook - to store the value of an element not an reference. 
// useRef() doesn't notify when content changes
// useState() is responsible for re-endering the particular dom element
