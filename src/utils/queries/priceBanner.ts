import { useStaticQuery, graphql } from 'gatsby';
import { ImageFragment } from '../Fragments';

export const getPriceBanner = () => {
  const priceBannerData = useStaticQuery(graphql`
    query pricebannerQuery {
      contentfulPriceBanner {
        title
        description
        desktop {
          ...ImageFragment
        }
        mobile {
          ...ImageFragment
        }
        tablet {
          ...ImageFragment
        }
      }
    }
  `);
  return priceBannerData
}