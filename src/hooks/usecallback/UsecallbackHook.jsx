import {useState, useCallback} from 'react';


const UsecallbackHook = () => {
    const [count, setCount] = useState(0)

    // without callback
    // a new increment function is created on every render
    const incrementHandler = () =>{
        setCount(count + 1);
        console.log("incrementHandler");
    }

    // with useCallback
    // the function only re-created when count changes
    const callbackIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
        console.log("callbackIncrement");
    }, [count])


  return (
    <div>
        <h1>useCallback hook</h1>
        <p>count- {count}</p>
      <ChildComponent incrementHandler={incrementHandler} />
      <ChildComponent incrementHandler={callbackIncrement} />
    </div>

  )
}

function ChildComponent({ incrementHandler }) {
    return(
        <button onClick={incrementHandler} style={{margin: "0px 20px"}}>Increment</button>
    )
    
}


export default UsecallbackHook;


