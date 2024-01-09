import { useState,useEffect} from 'react'

const UseeffectND = () => {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(5);

  useEffect(() => {
    console.log("Empty depency - counter1 - ", counter1);
    console.log("Empty depency - counter2 - ", counter2);
  }, [])

  const counter1Handler = () => {
    setCounter1(counter1 + 2)
  }

  const counter2Handler = () => {
    setCounter2(counter2 + 5)
  }
  
  return (
    <div>
      <h3>Empty depency | counter1 - {counter1}</h3>
      <h3>Empty depency | counter2 - {counter2}</h3>
      <button onClick={counter1Handler} style={{margin: "0px 20px"}}>counter1</button>
      <button onClick={counter2Handler}>counter2</button>
    </div>
  )
}

export default UseeffectND;
