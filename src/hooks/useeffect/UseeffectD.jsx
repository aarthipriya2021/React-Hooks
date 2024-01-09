import { useState,useEffect} from 'react'

const UseeffectD = () => {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(5);

  useEffect(() => {
    console.log("Depency provided- counter1 - ", counter1);
    console.log("Depency provided - counter2 - ", counter2);

    // we can also enter counter2 as dependency
  }, [counter1, counter2])

  const counter1Handler = () => {
    setCounter1(counter1 + 2)
  }

  const counter2Handler = () => {
    setCounter2(counter2 + 5)
  }
  return (
    <div>
      
      <h3>Depency provided | counter1 - {counter1}</h3>
      <h3>Depency provided | counter2 - {counter2}</h3>
      <button onClick={counter1Handler} style={{margin: "0px 20px"}}>counter1</button>
      <button onClick={counter2Handler}>counter2</button>
    </div>
  )
}

export default UseeffectD
