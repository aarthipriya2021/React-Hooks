// import React from 'react';;
import UseeffectD from "./UseeffectD";
import UseeffectND from "./UseEffectND";
import UseeffectNP from "./UseeffectNP";

const UseeffectHook = () => {
  return (
    <div>
      <h1>useEffect hook</h1>
      {/* For better understand we should comment any 2 of these components  */}
        <UseeffectND />
        <UseeffectD />
        <UseeffectNP />
    </div>
  )
}

export default UseeffectHook

// UseeffectND - useEffect Empty Dependency  | useEffect(() = >{}, [])
// UseeffectD - useEffect with Dependency    | useEffect(() = >{}, [dep1, dep2])
// USeeffectNP - useEffect Not Provided      | useEffect(() = >{})
