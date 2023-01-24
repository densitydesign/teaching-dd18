import * as React from "react"
import { Link } from "gatsby"
import data from "../contents/projects.yaml"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import YAMLBuilder from "../components/yaml-builder.js"
import Menu from "../components/right-menu.js"
import Breadcrumb from "../components/breadcrumbs"

import Projects from "../contents/projects.mdx"

import "./main.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <title>Poster - Visual Explanations - DensityDesign Lab Final Synthesis Design Studio 2021/2022 - Mediazioni algoritmiche</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,800;1,400&display=swap" rel="stylesheet"></link>
    <Navbar/>
    <main>
      <Projects />
      <Menu data={data} />
    </main>
    <YAMLBuilder data={data} />
    <Footer />
    </>
  )
}

export default IndexPage
