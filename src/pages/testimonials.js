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
            testimonials {
              testimonialImage {
                url
              }
              testimonialTextNode {
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
            <img className="testimonial-hero padding-top-small" src={data.datoCmsTestimonialPage.heroImage.url} alt="Testimonial Hero"/>
            <div className="grid-container">
              <div className="grid-inner-wrapper">
                <section className="padding-top-medium">
                  <div className="full-width">
                    <h3>testimonials</h3>
                    <div className="testimonial-wrapper">
                      {data.datoCmsTestimonialPage.testimonials.map((item, i) => {
                        return (
                          <div className="testimonial padding-top-small mobile-padding-top-small" key={i}>
                            <img className="testimonial-image" src={item.testimonialImage.url} alt="testimonial pic"/>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.testimonialTextNode.childMarkdownRemark.html,
                              }}
                            />
                          </div>
                        )
                      })}
                    </div>
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
