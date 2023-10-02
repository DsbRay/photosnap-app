import { useStaticQuery, graphql } from "gatsby";
import { ImageFragment } from '../Fragments';

export const getFeatureBanner = () => {
  const banner = useStaticQuery(graphql`
    query FeatureBanner {
      contentfulFeatureBanner {
        title
        description
        desktop {
          ...ImageFragment
        }
        tablet {
          ...ImageFragment
        }
        mobile {
          ...ImageFragment
        }
      }
    }
  `);
  return banner
}