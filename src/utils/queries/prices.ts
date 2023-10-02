import { useStaticQuery, graphql } from 'gatsby';

export const getPrices = () => {
  const priceQuery = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPricing {
        edges {
          node {
            title
            description
            monthlyPrice
            yearlyPrice
            advancedMetrics
            customAnalytics
            customizeMetadata
            embeddingCustomContent
            photoDownloads
            searchEngineIndexing
            unlimitedPhotoUpload
            unlimitedStoryPosting
          }
        }
      }
    }
  `);
  return priceQuery
}