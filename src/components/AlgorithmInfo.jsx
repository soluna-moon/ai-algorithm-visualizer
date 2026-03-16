import React from "react"

export default function AlgorithmInfo({ algorithm }) {

const data = {
bubble: {
name: "Bubble Sort",
description: "Repeatedly compares adjacent elements and swaps them if they are in the wrong order.",
time: "O(n²)",
space: "O(1)"
},

quick: {
  name: "Quick Sort",
  description: "Divide-and-conquer algorithm that partitions the array around a pivot.",
  time: "O(n log n)",
  space: "O(log n)"
},

dijkstra: {
  name: "Dijkstra Algorithm",
  description: "Finds the shortest path between nodes in a graph.",
  time: "O(V²)",
  space: "O(V)"
},

astar: {
  name: "A* Search",
  description: "Heuristic pathfinding algorithm used for efficient shortest path search.",
  time: "O(E)",
  space: "O(V)"
}

}

if (!algorithm || !data[algorithm]) {
return null
}

const info = data[algorithm]

return (
<div className="algo-panel">

  <h2>{info.name}</h2>

  <p>{info.description}</p>

  <p><strong>Time Complexity:</strong> {info.time}</p>

  <p><strong>Space Complexity:</strong> {info.space}</p>

</div>

)
}