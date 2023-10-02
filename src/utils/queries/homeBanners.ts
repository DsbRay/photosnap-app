import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment } from '../Fragments';

export const getHomeBanners = () => {
  const homeBannerData = useStaticQuery(graphql`
      query HomeBannerQuery {
        allContentfulHome {
          edges {
            node {
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
        }
      }
    `);
  return homeBannerData
}
