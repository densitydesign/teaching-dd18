import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import Aside from "../components/aside.js"

import Index from "../contents/index.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>DensityDesign Lab Final Synthesis Design Studio 2022/2023 - Mediazioni algoritmiche</title>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,800;1,400&display=swap" rel="stylesheet"></link> */}
    <Navbar/>
    <div className="title-card"><h1 className="title">The <em>DensityDesign Final Synthesis Design Studio</em> focuses on learning to observe and represent controversial phenomena from different perspectives, and to visually communicate them to different publics.</h1>
    <h2 className="subtitle">POLITECNICO DI MILANO, SCUOLA DEL DESIGN</h2></div>
    <Aside/>
    <main>
      <Index />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
