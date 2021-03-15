import React from "react"
import { Link, graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"


import Layout from "../components/layout"
import SEO from "../components/seo"



const SitePosts = ({ data }) => {
  const { heading, subheading, image } = data.contentfulProductBucher

  const RichContent = JSON.parse(data.contentfulProductBucher.description.raw);

  const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
            // [BLOCKS.EMBEDDED_ASSET]:  <img src={`https:${data.contentfulProject.projectContent.references.fluid.src}`}/>,
        },
        renderMark: {},
        }

  return (
    <Layout>
      <SEO title={heading} />
      <div className="ourpost">
        <h1>{heading}</h1>
        {image ? <img alt={heading} src={image.file.url} /> : <div>bild</div> }
        <h3>{subheading}</h3>
        {documentToReactComponents(RichContent, options)}

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