import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

 const ProfileImg = styled(Img)`
  min-height: 250px;
  min-width: 250px;
  border-radius: 100%;
  border: 10px solid #474747;
  position: absolute;
  z-index: 0;

  @media (max-width: 900px) {
    min-height: 100px;
    min-width: 100px;
    border-width: 5px;
  }
`;

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jackie.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ProfileImg fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image
