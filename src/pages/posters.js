import * as React from "react"
import data from "../contents/posters.yaml"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import Posters from "../components/yaml-posters.js"
import Menu from "../components/right-menu.js"

import Explananda from "../contents/explananda.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>Poster - Visual Explanations - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,800;1,400&display=swap" rel="stylesheet"></link> */}

    <Navbar/>
    <main>
      <Explananda />
      <Menu data={data} />
    </main>
    <Posters data={data} />
    <Footer />
    </>
  )
}

export default IndexPage
