import React from "react"

export default function Grid({
grid,
visited,
toggleWall
}){

return(

<div>

{grid.map((row,r)=>(

<div key={r} style={{display:"flex"}}>

{row.map((node,c)=>{

const isVisited=visited.some(
v=>v.row===r && v.col===c
)

return(

<div
key={c}
onClick={()=>toggleWall(r,c)}
style={{
width:"20px",
height:"20px",
border:"1px solid #ddd",
background: node
? "#222"
: isVisited
? "#00e0ff"
: "#fafafa"
}}
/>

)

})}

</div>

))}

</div>

)

}