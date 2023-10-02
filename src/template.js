import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query ($storyId: String!) {
    contentfulStories(id: { eq: $storyId }) {
      id
      title
    }
  }
`

const StoryTemplate = ({ data }) => {
  const story = data.contentfulStories

  return (
    <div>
      <h1>{story.title}</h1>
    </div>
  )
}

export default StoryTemplate
