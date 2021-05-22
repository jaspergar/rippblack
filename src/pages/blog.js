import * as React from "react"
import Hero from "../components/blogSections/Hero/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Rhonda Ripp Blog Post" />
    <Hero/>
  </Layout>
)

export default IndexPage
