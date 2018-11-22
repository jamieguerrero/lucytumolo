import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query modalitiesQuery{
          datoCmsModalityPage {
            id
            title
            heroImage {
              url
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
                  <div className="text-on-image half-left">
                    <div className="text-on-image-text">{data.datoCmsModalityPage.title}</div>
                    <img className="text-on-image-image full-image" src={data.datoCmsModalityPage.heroImage.url} alt={data.datoCmsModalityPage.title}/>
                  </div>
                  <div className="text-right">
                    {data.datoCmsModalityPage.modalities.map((item, i) => {
                      return (
                        <div key={item.i}>
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
