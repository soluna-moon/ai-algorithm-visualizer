import React from "react"

export default function Controls({
generateArray,
startBubble,
startQuick,
size,
setSize,
speed,
setSpeed
}) {

return (

<div className="controls">

  <button onClick={generateArray}>
    Generate Array
  </button>

  <button onClick={startBubble}>
    Bubble Sort
  </button>

  <button onClick={startQuick}>
    Quick Sort
  </button>

  <div>

    <p>Array Size: {size}</p>

    <input
      type="range"
      min="10"
      max="100"
      value={size}
      onChange={(e)=>setSize(Number(e.target.value))}
    />

  </div>

  <div>

    <p>Speed: {speed} ms</p>

    <input
      type="range"
      min="10"
      max="200"
      value={speed}
      onChange={(e)=>setSpeed(Number(e.target.value))}
    />

  </div>

</div>

)

}