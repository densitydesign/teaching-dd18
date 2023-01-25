import React from "react"
import { Link } from "gatsby"

const posters = ({data}) => (
  <div className="repo">
    {data.groups.map((data, index) => {
        return <div class={`poster`} key={`content_item_${index}`} style={{ 
          marginBottom: `5rem`,
          display: `grid`,
          gridTemplateColumns: `repeat(8, 1fr)`
            }} id={data.group}>
            <div style={{
              marginRight: `1.5rem`,
              gridColumn: `span 3`
            }}>
              <Link href={`../../posters/g0${index+1}.pdf`} style={{
                backgroundColor: "transparent",
                padding: 0,
                border: "none"
              }}>
              <img src={`../../posters/thumb/0${index+1}.jpg`} style={{maxWidth: `100%`}}/>
              </Link>
            </div>
            <div style={{
              gridColumn: `span 5`
            }}>
            <h1 style={{
              marginTop: 0
            }}>{data.topic}</h1>
            <p className="authors">{data.names}</p>
            <p>{data.desc}</p>
            <Link href={`../../posters/g0${index+1}.pdf`}>See the poster</Link>
            </div>
        </div>
    })}
  </div>
)
export default posters