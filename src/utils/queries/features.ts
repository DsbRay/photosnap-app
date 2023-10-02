import { useStaticQuery, graphql } from "gatsby";
import { ImageFragment } from '../Fragments';

export const getFeatures = () => {
  const features = useStaticQuery(graphql`
    query FeaturesQuery {
      allContentfulFeatures {
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
  return features
}