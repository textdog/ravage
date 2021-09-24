import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default function Press ({ data }) {
    return (
        <Layout>
        <div>
            <h1>
               About {data.site.siteMetadata.title}. 
            </h1>
            <p>Ravage is a 5 year project orchestrated by Tiff Gum Ying Cheng. Many of the scenes in it depended on a mood of nervous triumph, especially since the script was handwritten and put into some order using tape and was therefore almost of no help.
            </p>
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
    
