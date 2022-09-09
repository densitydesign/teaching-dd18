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
    <Navbar/>
    <Aside/>
    <main>
      <Index />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage
