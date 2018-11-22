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
                  <div className="text-on-image half-left">
                    <div className="text-on-image-text">{data.datoCmsGiftCertificate.pageTitle}</div>
                    <img className="text-on-image-image full-image" src={data.datoCmsGiftCertificate.heroImage.url} alt={data.datoCmsGiftCertificate.pageTitle}/>
                  </div>
                  <div
                    className="text-right"
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
