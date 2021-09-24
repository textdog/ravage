import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default function Press ({ data }) {
    return (
        <Layout>
        <div>
            <h1>
               Testing
            </h1>
            <p>Wtf Ravage is a 5 year e script refore almost of no help.
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
    
