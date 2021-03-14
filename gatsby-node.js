/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulProductBucher {
          edges {
            node {
              id
              slug
              heading
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const sitePostTemplate = path.resolve("./src/templates/siteposts.js")

      // Then for each result we can create a page
      result.data.allContentfulProductBucher.edges.forEach(edge => {
        createPage({
          path: `/siteposts/${edge.node.slug}/`,
          component: slash(sitePostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
            heading: edge.node.heading,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error cannot retrive contentful data", error)
    })
}