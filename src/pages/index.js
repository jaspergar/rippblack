import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/Hero/Hero"
import Trailer from "../components/sections/Trailer/Trailer"
import Blogs2 from "../components/sections/Blogs/Blogs2"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Trailer/>
    <Blogs2/>
  </Layout>
)

export default IndexPage
