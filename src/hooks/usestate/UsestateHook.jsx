import { useState} from 'react';

const UsestateHook = () => {

    //  importing useState and initialising
    const [count, setCount] = useState(0)

    // function for updating state by adding +1.
    const increaseHandler = () => {
        setCount(count + 1);
    }

    // function for updating state by subtracting -1.
    const decreaseHandler = () => {
        if(count <= 0){
            return;
        }
        setCount(count - 1);
    }
  return (
    <div>
        <h1>useState hook</h1>
        <p>{count}</p>
        {/* calling state updater function */}
        <button onClick={increaseHandler} style={{margin: "0px 20px"}}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}

export default UsestateHook;