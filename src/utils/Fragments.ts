import { graphql } from "gatsby";

export interface ImageProps {
  file: {
    fileName: string
    url: string
  }
}

export const ImageFragment = graphql`
  fragment ImageFragment on ContentfulAsset {
    file {
      fileName
      url
    }
  }
`;