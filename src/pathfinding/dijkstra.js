export function dijkstra(grid, startNode, endNode) {

    const queue = [startNode]
    const visited = []
    const cameFrom = {}

    const visitedSet = new Set()

    while (queue.length) {

        const node = queue.shift()
        const key = node.row + "-" + node.col

        if (visitedSet.has(key)) continue

        visitedSet.add(key)
        visited.push(node)

        if (node.row === endNode.row && node.col === endNode.col) {
            break
        }

        const neighbors = [
            { row: node.row + 1, col: node.col },
            { row: node.row - 1, col: node.col },
            { row: node.row, col: node.col + 1 },
            { row: node.row, col: node.col - 1 },
        ]

        neighbors.forEach(n => {

            if (
                n.row >= 0 &&
                n.row < grid.length &&
                n.col >= 0 &&
                n.col < grid[0].length &&
                !grid[n.row][n.col]
            ) {

                const neighborKey = n.row + "-" + n.col

                if (!visitedSet.has(neighborKey)) {

                    cameFrom[neighborKey] = node
                    queue.push(n)

                }

            }

        })

    }

    let path = []
    let current = endNode

    while (current) {

        path.unshift(current)

        const key = current.row + "-" + current.col
        current = cameFrom[key]

    }

    return { visited, path }

}