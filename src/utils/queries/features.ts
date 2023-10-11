import { useStaticQuery, graphql } from "gatsby";
import { ImageFragment, ImageProps } from '../Fragments';

export interface FeaturedProps {
  node: {
    title: string
    description: string
    icon: ImageProps
    isFeatured: boolean
  }
}

export const getFeatures = (featured?: boolean) => {
  const features = useStaticQuery(graphql`
    query FeaturesQuery {
      allContentfulFeatures(sort: {createdAt: ASC}) {
        edges {
          node {
            title
            description
            isFeatured
            icon {
              ...ImageFragment
            }
          }
        }
      }
    }
  `);

  const allContentfulFeatures = features.allContentfulFeatures.edges

  if (featured) {
    const featuredItems = allContentfulFeatures.filter(({ node }: FeaturedProps) => node.isFeatured);
    return featuredItems
  }
  return allContentfulFeatures
}