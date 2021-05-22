/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../Styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"



const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle/>
    <Header/>
        <main>{children}</main>
     <Footer/>
    </>
  )
}


export default Layout
