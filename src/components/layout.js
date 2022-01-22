import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Footer from "./footer"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
      <Footer />
    </div>
  )
}






/**
 * Old styling from tutorial 3
 * 
 * import About from "../pages/about-css-modules"
 *
 * const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)       
 *      <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
            <header style={{ marginBottom: '1.5rem'}}>
              <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none'}} >
              <h3 style={{ display: 'inline' }}>Ravage</h3>
               </Link>  
            <ul style={{ listStyle: 'none', float: 'right'}}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
            </ul>
            </header>
 
 */


 


   