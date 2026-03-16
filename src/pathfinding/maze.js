export function generateMaze(rows, cols) {

    const grid = []

    for (let r = 0; r < rows; r++) {

        const row = []

        for (let c = 0; c < cols; c++) {

            const isWall = Math.random() < 0.3

            row.push(isWall ? 1 : 0)

        }

        grid.push(row)

    }

    return grid

}