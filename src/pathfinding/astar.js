export function astar(grid,start,end){

const open=[start]
const visited=[]

const visitedSet=new Set()

while(open.length){

const node=open.shift()

const key=node.row+"-"+node.col

if(visitedSet.has(key)) continue

visitedSet.add(key)
visited.push(node)

if(node.row===end.row && node.col===end.col) break

const neighbors=[
{row:node.row+1,col:node.col},
{row:node.row-1,col:node.col},
{row:node.row,col:node.col+1},
{row:node.row,col:node.col-1}
]

neighbors.forEach(n=>{

if(
n.row>=0 &&
n.row<grid.length &&
n.col>=0 &&
n.col<grid[0].length &&
!grid[n.row][n.col]
){
open.push(n)
}

})

}

return visited
}