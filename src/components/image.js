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

const Container = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const ProfileImg = styled(Img)`
  border-radius: 100%;
  border: 5px solid #3d3d3d;
  box-shadow: 3px 3px 10px 2px rgba(35,35,35,.5);

`;

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jackie.jpg" }) {
          childImageSharp {
            fixed(width: 250, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => 
      <Container>
        <ProfileImg fixed={data.placeholderImage.childImageSharp.fixed} />
      </Container>
    }
  />
)
export default Image
