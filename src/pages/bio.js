import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/bioSections/Hero/Hero"
import Bio from "../components/bioSections/Bio/Bio"

const IndexPage = () => (
  <Layout>
    <Seo title="Rhonda Ripp Biography" />
     <Hero/>
     <Bio/>
  </Layout>
)

export default IndexPage
