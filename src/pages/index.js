import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: pages } = data
  const posts = pages.edges.map(edge => edge.node.frontmatter)

  console.log(pages)
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      {posts.map(post => (
        <Link key={post.path} to={post.path}>
          {post.title}
          <br />
        </Link>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query PagesQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
