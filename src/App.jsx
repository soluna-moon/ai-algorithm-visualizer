import { useState } from "react"

import Visualizer from "./components/Visualizer"

import Controls from "./components/Controls"

import AIExplanation from "./components/AIExplanation"

import { bubbleSort } from "./algorithms/bubbleSort"

import { quickSort } from "./algorithms/quickSort"

import { generateArray } from "./utils/generateArray"

import Grid from "./components/Grid"

import { dijkstra } from "./pathfinding/dijkstra"

import { astar } from "./pathfinding/astar"

import { generateMaze } from "./pathfinding/maze"

import AlgorithmInfo from "./components/AlgorithmInfo"

function App() {

  const [array, setArray] = useState(generateArray(30))

  const [speed, setSpeed] = useState(50)

  const [size, setSize] = useState(30)

  const [active, setActive] = useState([])

  const [grid, setGrid] = useState(

    Array.from({ length: 20 }, () => Array.from({ length: 30 }, () => 0))

  )

  const [visited, setVisited] = useState([])

  const [algorithm, setAlgorithm] = useState(null)

  function animate(steps) {

    let i = 0

    const interval = setInterval(() => {

      setArray(steps[i].array)

      setActive(steps[i].active)

      i++

      if (i >= steps.length) clearInterval(interval)

    }, speed)

  }

  function generate() {

    setArray(generateArray(size))

  }

  function startBubble() {
    setAlgorithm("bubble")
    const steps = bubbleSort(array)
    animate(steps)
  }

  function startQuick() {
    setAlgorithm("quick")
    const steps = quickSort(array)
    animate(steps)
  }

  function startPathfinding() {
    setAlgorithm("dijkstra")

    const startNode = { row: 0, col: 0 }
    const endNode = { row: 10, col: 20 }

    const result = dijkstra(grid, startNode, endNode)

    let i = 0

    const interval = setInterval(() => {

      setVisited(result.visited.slice(0, i))

      i++

      if (i >= result.visited.length) {

        clearInterval(interval)

        setTimeout(() => {

          setVisited(result.path)

        }, 300)

      }

    }, 30)

  }

  function toggleWall(row, col) {

    const newGrid = [...grid]

    newGrid[row][col] = newGrid[row][col] ? 0 : 1

    setGrid(newGrid)

  }

  function startAstar() {
    setAlgorithm("astar")

    const start = { row: 0, col: 0 }

    const end = { row: 10, col: 20 }

    const nodes = astar(grid, start, end)

    let i = 0

    const interval = setInterval(() => {

      setVisited(nodes.slice(0, i))

      i++

      if (i >= nodes.length) clearInterval(interval)

    }, 30)

  }

  function createMaze() {

    const maze = generateMaze(20, 30)

    setGrid(maze)

    setVisited([])

  }

  return (

    <div className="container">

      <h1>AI Algorithm Visualizer</h1>

      <Controls

        generateArray={generate}

        startBubble={startBubble}

        startQuick={startQuick}

        size={size}

        setSize={setSize}

        speed={speed}

        setSpeed={setSpeed}

      />

      <button onClick={startPathfinding}>

        Run Dijkstra

      </button>

      <button onClick={startAstar}>

        Run A*

      </button>

      <button onClick={createMaze}>

        Generate Maze

      </button>

      <AlgorithmInfo algorithm={algorithm}/>

      <Visualizer array={array} active={active} />

      <Grid

        grid={grid}

        visited={visited}

        toggleWall={toggleWall}

      />

      <AIExplanation />

    </div>

  )

}

export default App