import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query aboutQuery{
          datoCmsAbout {
            title
            heroImage {
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            descriptionNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout location={props.location.pathname}>
            <div className="grid-container">
              <div className="grid-inner-wrapper">
                <section className="padding-top-small">
                  <div className="text-on-image col-4-left">
                    <div className="text-on-image-text">{data.datoCmsAbout.title}</div>
                    <Img className="text-on-image-image full-image" fluid={data.datoCmsAbout.heroImage.fluid} alt={data.datoCmsAbout.title}/>
                  </div>
                  <div
                    className="description-text accent-last-text half-right mobile-padding-top-tiny"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsAbout.descriptionNode.childMarkdownRemark.html,
                    }}
                  />
                </section>
                </div>
              </div>

          </Layout>
        )
      }}
    />
  )}
