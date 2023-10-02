import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment } from '../Fragments';

export const getShareBanner = () => {
  const shareBannerData = useStaticQuery(graphql`
      query shareBannerQuery {
        contentfulShareBanner {
          title
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
  return shareBannerData
}
