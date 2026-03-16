import React from "react"

export default function Visualizer({ array, active }) {

return (

<div className="visualizer">

  {array.map((value, index) => (

    <div
      key={index}
      className="bar"
      style={{
        height: `${value * 3}px`,
        background: active?.includes(index)
          ? "#ff4d4d"
          : "#4CAF50"
      }}
    />

  ))}

</div>

)

}