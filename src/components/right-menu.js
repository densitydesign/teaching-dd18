import React from "react"

const navMenu = ({data}) => (
    <aside className="right">
        <ul>
            {data.groups.map((data, index) => {
                return <li><a href={"#"+data.group}><span className="index">GROUP {index+1}</span> <span style={{marginLeft: "1rem"}}>{data.title}</span></a></li>
            })}
        </ul>
    </aside>
  )
  export default navMenu