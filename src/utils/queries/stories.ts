import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment } from '../Fragments'

export const getStories = () => {
  const storyData = useStaticQuery(graphql`
    query StoryQuery {
      allContentfulStories {
        edges {
          node {
            title
            author
            date
            featured
            desktop {
              ...ImageFragment
            }
            mobile {
              ...ImageFragment
            }
          }
        }
      }
    }
  `)
  return storyData
}