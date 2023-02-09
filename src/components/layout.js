import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { container } from './layout.module.css'

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
        max-width: 800px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        color: #fefefe;
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            color: #fefefe;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          color: #fefefe;
          font-family: "Atkinson Hyperlegible";
        `}
      >
        About
      </Link>
      {children}
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


 


   