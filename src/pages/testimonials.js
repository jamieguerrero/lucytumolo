import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'



export default props => {
  return (
    <StaticQuery
      query={graphql`
        query testimonialQuery{
          datoCmsTestimonialPage {
            id
            heroImage {
              url
            }
            topTestimonialNode {
              childMarkdownRemark {
                html
              }
            }
          }
          allDatoCmsTestimonial {
            edges {
              node {
                id
                testimonialTextNode {
                  childMarkdownRemark {
                    html
                  }
                }
                testimonialImage {
                  url
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
                  <img className="full-width" src={data.datoCmsTestimonialPage.heroImage.url} alt="Testimonial Hero"/>
                  <div
                    className="full-width"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsTestimonialPage.topTestimonialNode.childMarkdownRemark.html,
                    }}
                  />
                  <div className="full-width">
                    {data.allDatoCmsTestimonial.edges.map((item, i) => {
                      return (
                        <div key={i}>
                          <img src={item.node.testimonialImage.url} alt="testimonial pic"/>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.node.testimonialTextNode.childMarkdownRemark.html,
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
