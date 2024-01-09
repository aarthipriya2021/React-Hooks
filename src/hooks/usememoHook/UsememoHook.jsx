import {useState ,useMemo} from 'react';

const UsememoHook = () => {
    const [count, setCount] = useState(0)

    // increment function
    const incrementHandler = () =>{
        setCount(count + 1);
        // console.log("incrementHandler");
    }

    // square root of the count using useMemo()
    const squaredIncrementHandler = useMemo(() => {
        return count * count
    }, [count]);
    


  return (
    <div>
      <h1>useMemo hook</h1>
      <p>Count : {count}</p>
      <p>Squared Count: {squaredIncrementHandler}</p>
      <button onClick={incrementHandler}>Increment count</button>
    </div>
  )
}

export default UsememoHook
