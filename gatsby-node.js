/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const String = require('./src/utils/string')

exports.onCreateNode = ({ node, _, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `TalkJson`) {
    node.presenter = {
      name: node.presenter.name || null,
      path: node.presenter.name
        ? `/speaker/${String.slugify(node.presenter.name)}`
        : null,
    }
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allTalkJson {
          edges {
            node {
              description
              slug
              tag
              presenter {
                name
              }
            }
          }
        }
      }
    `).then(result => {
      // Create speaker pages
      Array.from(
        result.data.allTalkJson.edges.reduce((acc, edge) => {
          if (!edge.node.presenter.name) return acc

          const name = edge.node.presenter.name.normalize()
          const slug = String.slugify(name)

          if (acc.has(slug)) {
            const speaker = acc.get(slug)

            acc.set(slug, {
              count: speaker.count + 1,
              name: speaker.name,
              slug: speaker.slug,
            })
          } else {
            acc.set(slug, {
              count: 1,
              name: name,
              slug: slug,
            })
          }

          return acc
        }, new Map())
      )
        .reduce((acc, tag) => {
          acc.push(tag[1])
          return acc
        }, [])
        // Sort by count DESC
        .sort((a, b) => {
          if (a.count > b.count) return -1
          if (a.count < b.count) return 1

          return 0
        })
        .forEach(speaker => {
          const speakerPath = `/speaker/${speaker.slug}`

          createPage({
            path: speakerPath,
            component: path.resolve(`./src/templates/speaker/index.js`),
            // Data passed to context is available in page queries as GraphQL variables.
            context: {
              speaker: speaker.name,
            },
          })
        })

      // Create tag pages
      Array.from(
        result.data.allTalkJson.edges.reduce((acc, edge) => {
          edge.node.tag.forEach(tag => {
            const name = tag.normalize()
            const slug = String.slugify(tag.normalize())

            if (acc.has(slug)) {
              const tag = acc.get(slug)

              acc.set(slug, {
                count: tag.count + 1,
                name: tag.name,
                slug: tag.slug,
              })
            } else {
              acc.set(slug, {
                count: 1,
                name: name,
                slug: slug,
              })
            }
          })

          return acc
        }, new Map())
      )
        .reduce((acc, tag) => {
          acc.push(tag[1])
          return acc
        }, [])
        // Sort by count DESC
        .sort((a, b) => {
          if (a.count > b.count) return -1
          if (a.count < b.count) return 1

          return 0
        })
        .forEach(tag => {
          const tagPath = `/tag/${tag.slug}`

          createPage({
            path: tagPath,
            component: path.resolve(`./src/templates/tag/index.js`),
            // Data passed to context is available in page queries as GraphQL variables.
            context: {
              slug: tag.slug,
              tag: tag.name,
            },
          })
        })

      // Create talk pages
      result.data.allTalkJson.edges.map(({ node }) => {
        const talkPath = `/talk/${node.slug}`

        createPage({
          path: talkPath,
          component: path.resolve(`./src/templates/talk/index.js`),
          // Data passed to context is available in page queries as GraphQL variables.
          context: {
            slug: node.slug,
            tags: node.tag,
          },
        })
      })
      resolve()
    })
  })
}
