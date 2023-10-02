import { graphql } from "gatsby";

export const ImageFragment = graphql`
  fragment ImageFragment on ContentfulAsset {
    file {
      fileName
      url
    }
  }
`;