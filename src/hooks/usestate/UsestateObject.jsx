import { useState} from 'react'

const UsestateObject = () => {

    const [bike, setBike] = useState({
        brand: "Honda",
        model: "Shine",
        year: "2010",
        color: "Red",

    });

    const updateColor = () => {
        setBike(prevState => {
            return {...prevState, color: "Blue"}
        })
    }

  return (
    <div>
      <h1>useState hook</h1>
      <h1>Bike</h1>
      <p>My favorite bike is {bike.brand} {bike.model}<br />It is {bike.color} from {bike.year}</p>
      <button onClick={updateColor}>Click to color change</button>
    </div>
  )
}

export default UsestateObject;
