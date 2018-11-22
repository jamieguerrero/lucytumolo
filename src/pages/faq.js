import React from 'react'
import Layout from '../components/layout'
import Accordion from '../components/accordion';

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
                    <Accordion allowMultipleOpen>
                      {data.datoCmsFaqPage.faqPairs.map((item, index) => {
                        return (
                          <div label={item.question} key={index}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.answerNode.childMarkdownRemark.html,
                              }}
                            />
                          </div>
                        )
                      })}

                    </Accordion>
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
