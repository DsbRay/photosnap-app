import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment } from '../Fragments';
export const getStoryBanner = () => {
  const storyBannerData = useStaticQuery(graphql`
    query storyBannerQuery {
      contentfulStoryBanner {
        subheading
        title
        description
        date
        author
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
  return storyBannerData
}

