import * as React from "react"
import data from "../contents/posters.yaml"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import Posters from "../components/yaml-posters.js"
import Menu from "../components/right-menu.js"
import Breadcrumb from "../components/breadcrumbs"

import Explananda from "../contents/explananda.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>Poster - Visual Explanations - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
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
