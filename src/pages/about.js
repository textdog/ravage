import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default function About ({ data }) {
    return (
        <Layout>
        <div>
            <h1>
               About {data.site.siteMetadata.title}. 
            </h1>
            <p>Ravage is a 7 year project orchestrated by Tiff Gum Ying Cheng. Many of the scenes in it depended on a mood of nervous triumph, especially since the script was handwritten and put into some order using tape and was therefore almost of no help.
            </p>
            <p>Email us: <a href="mailto:porkornopork@gmail.com">porkornopork  at   g-popular email service  dot com.</a></p>
        </div>
        </Layout>
)
}

export const query = graphql`
    query {
            site {
                siteMetadata {
                    title
                }
            }
    }`
    
