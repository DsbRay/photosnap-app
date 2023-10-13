import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment, ImageProps } from '../Fragments'
export interface StoryProps {
  node: {
    title: string
    author: string
    date: string
    description: string
    desktop: ImageProps
    mobile: ImageProps
    featured: boolean
  }
}
export const getStories = (featured?: boolean) => {
  const storyData = useStaticQuery(graphql`
    query StoryQuery {
      allContentfulStories(sort: {createdAt: ASC}) {
        edges {
          node {
            title
            author
            date(formatString: "MMMM Do YYYY")
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
  const allContentfulStories = storyData.allContentfulStories.edges

  if (featured) {
    const featuredItems = allContentfulStories.filter(({ node }: StoryProps) => node.featured);
    return featuredItems
  }
  return allContentfulStories
}