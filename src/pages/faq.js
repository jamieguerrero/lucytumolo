import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query faqQuery{
          datoCmsFaqPage {
            title
            titleImage {
              url
            }
            faqPairs {
              question
              answerNode {
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
                    <div className="text-on-image-text">{data.datoCmsFaqPage.title}</div>
                    <img className="text-on-image-image full-image" src={data.datoCmsFaqPage.titleImage.url} alt={data.datoCmsFaqPage.title}/>
                  </div>
                  <div className="half-right mobile-padding-top-tiny">
                    {data.datoCmsFaqPage.faqPairs.map((item, i) => {
                      return (
                        <div>
                          <p key={i}>{item.question}</p>
                          <div
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: item.answerNode.childMarkdownRemark.html,
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
