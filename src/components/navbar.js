import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <nav>
            <span><Link to="/">DD18</Link></span>
            <h1 className="course-title" style={{gridColumn: "span 2"}}>Final Synthesis Design Studio <br /> Sect. C3 2022/2023</h1>
            {/* <span style={{textAlign: 'right'}}><Link to="/posters" style={{marginRight: "1rem"}}>Posters</Link><Link to="/projects">Projects</Link></span> */}
        </nav>
    )
}