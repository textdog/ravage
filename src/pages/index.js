import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Ravage says hello:
          <p>Worthington and Chesterfield fight a war, while telecom companies keep their call centers open with contractors. The ransacking of the mind results in its own artistry. Ravage is a 75-minute performance art narrative. 
</p>
        </h1>
        <img src="https://i.vimeocdn.com/video/845098068_620.jpg" alt="/"></img>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link 
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

/* <p>Worthington and Chesterfield are fighting a war, while telecom companies keep their call centers open with contractors. The ransacking of the mind results in its own artistry. Ravage is a 75-minute performance art narrative. 
</p>
*/
  