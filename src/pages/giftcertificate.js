import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query giftQuery{
          datoCmsGiftCertificate {
            pageTitle
            heroImage {
              url
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
                    <div className="text-on-image-text">{data.datoCmsGiftCertificate.pageTitle}</div>
                    <img className="text-on-image-image full-image" src={data.datoCmsGiftCertificate.heroImage.url} alt={data.datoCmsGiftCertificate.pageTitle}/>
                  </div>
                  <div
                    className="description-text half-right mobile-padding-top-tiny"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsGiftCertificate.descriptionNode.childMarkdownRemark.html,
                    }}
                  />
                </section>
              </div>
            </div>
          </Layout>
        )
      }}
    />
  )
}
