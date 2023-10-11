import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment, ImageProps } from '../Fragments';
export interface BannerProps {
  node: {
    title: string
    description: string
    desktop: ImageProps
    tablet: ImageProps
    mobile: ImageProps
  }
  mirror?: boolean
  linkText?: string
}

export const getHomeBanners = () => {
  const homeBannerData = useStaticQuery(graphql`
      query HomeBannerQuery {
        allContentfulHome(sort: {createdAt: ASC}) {
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
  return homeBannerData.allContentfulHome.edges
}

