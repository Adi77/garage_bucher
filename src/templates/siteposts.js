import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SitePosts = ({ data }) => {
  const { heading, subheading, description, image } = data.contentfulProductBucher
  return (
    <Layout>
      <SEO title={heading} />
      <div className="ourpost">
        <h1>{heading}</h1>
        {image ? <img alt={heading} src={image.file.url} /> : <div>bild</div> }
        <h3>{subheading}</h3>
        <p>{description.raw}</p>

        <Link to="/siteposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default SitePosts

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProductBucher(slug: { eq: $slug }) {
      heading
      subheading
      slug
      description {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`