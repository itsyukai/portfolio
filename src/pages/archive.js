import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const ArchivePage = ({ data }) => (
  <Layout>
    <SEO title="Archive" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(project => (
      <div key={project.node.id}>
        <h3>{project.node.frontmatter.title}</h3>
        <small> Year: {project.node.frontmatter.year}</small>
        <br />
        <br />

        <Link to={project.node.frontmatter.path}>Read More </Link>
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            year
            title
            github
          }
        }
      }
    }
  }
`
export default ArchivePage
