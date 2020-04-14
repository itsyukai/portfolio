import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"

export default function Template({ data }) {
  const project = data.markdownRemark

  return (
    <div>
      <Link to="/archive">Go Back</Link>
      <hr />
      <h1>{project.frontmatter.title}</h1>
      <h4>Year: {project.frontmatter.year}</h4>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  )
}

export const projectQuery = graphql`
  query ArchiveProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        year
        github
      }
    }
  }
`
