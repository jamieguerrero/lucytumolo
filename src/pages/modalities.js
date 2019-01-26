import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query modalitiesQuery{
          datoCmsModalityPage {
            id
            title
            heroImage {
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            modalities {
              modalityName
              modalityDescriptionNode {
                childMarkdownRemark {
                  html
                }
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
                    <div className="text-on-image-text">{data.datoCmsModalityPage.title}</div>
                    <Img className="text-on-image-image full-image" fluid={data.datoCmsModalityPage.heroImage.fluid} alt={data.datoCmsModalityPage.title}/>
                  </div>
                  <div className="modalities-wrapper half-right mobile-padding-top-small">
                    {data.datoCmsModalityPage.modalities.map((item, i) => {
                      return (
                        <div key={i} className="padding-top-tiny">
                          <h4>{item.modalityName}</h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.modalityDescriptionNode.childMarkdownRemark.html,
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                </section>
              </div>
            </div>
          </Layout>
        )
      }}
    />
  )
}
