import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


export default props => {
  return (
    <StaticQuery
      query={graphql`
        query testimonialQuery{
          datoCmsTestimonialPage {
            id
            heroImage {
              url
              fluid(maxWidth: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            topTestimonialNode {
              childMarkdownRemark {
                html
              }
            }
            testimonials {
              testimonialImage {
                fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsFluid
                }
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
            <div className="grid-container">
              <div className="grid-inner-wrapper">
                <section className="padding-top-small mobile-padding-top-small">
                  <div className="full-width">
                    <h3>testimonials</h3>
                    <div className="testimonial-wrapper">
                      {data.datoCmsTestimonialPage.testimonials.map((item, i) => {
                        return (
                          <div className="testimonial padding-top-small mobile-padding-top-small" key={i}>
                            <Img className="testimonial-image" fluid={item.testimonialImage.fluid} alt="testimonial pic"/>
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
            <img className="testimonial-hero padding-top-small" src={data.datoCmsTestimonialPage.heroImage.url} alt="Testimonial Hero"/>
          </Layout>
        )
      }}
    />
  )
}
