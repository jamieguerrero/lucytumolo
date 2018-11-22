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
          }
          datoCmsFaqPair{
            faqs {
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
                  <div className="text-on-image half-left">
                    <div className="text-on-image-text">{data.datoCmsFaqPage.title}</div>
                    <img className="text-on-image-image full-image" src={data.datoCmsFaqPage.titleImage.url} alt={data.datoCmsFaqPage.title}/>
                  </div>
                  <div className="text-right">
                    {data.datoCmsFaqPair.faqs.map((item, i) => {
                      return (
                        <div key={item.i}>
                          {item.question}
                          <div
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
