const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulStories {
        nodes {
          id
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const stories = result.data.allContentfulStories.nodes

  stories.forEach((story) => {
    createPage({
      path: `/stories/${story.id}`,
      component: path.resolve('./src/template.js'),
      context: {
        storyId: story.id,
      },
    })
  })
}
