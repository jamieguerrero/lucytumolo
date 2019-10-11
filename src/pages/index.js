import React from 'react'
import Layout from '../components/layout'
import { Parallax } from 'react-parallax'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query HomeQuery {
          datoCmsHome {
            locations {
              locationLink
              linkText
            }
            heroImage {
              url
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            servicesTitle
            servicesImage {
              url
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            servicesDescription
            servicesDescriptionNode {
              childMarkdownRemark {
                  html
              }
            }
            modalities{
            	modalityName
              modalityImage {
                url
                fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsFluid
                }
              }
              modalityDescriptionNode {
                childMarkdownRemark {
                    html
                }
              }
            }
            parallaxImage {
              url
            }
            ratesTitle
            ratesImage {
              url
              fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
            rates {
              duration
              price
            }
            ratesDescriptionNode {
              childMarkdownRemark {
                  html
              }
            }
          }
          datoCmsContact {
            dufferinDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            ossingtonDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={data => (
        <Layout location={props.location.pathname}>
          <div className="hero-wrapper">
            <Img className="background-hero" fluid={data.datoCmsHome.heroImage.fluid} alt={data.datoCmsHome.heroImage.url}/>
            <div className="hero-content">
              {data.datoCmsHome.locations.map((location) => {
                return (
                  <div className="location-block">
                    <a href={location.locationLink}>{location.linkText}</a>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid-container background-white">
            <div className="grid-inner-wrapper">
              <section className="location-mobile show-mobile padding-top-medium">
                <h1>LOCATIONS</h1>
                <a href={data.datoCmsHome.ossingtonlink}>
                  <div
                    className="text-span"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsContact.ossingtonDescriptionNode.childMarkdownRemark.html,
                    }}
                  />
                </a>
                <a href={data.datoCmsHome.dundasLink}>
                  <div
                    className="text-span"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsContact.dufferinDescriptionNode.childMarkdownRemark.html,
                    }}
                  />
                </a>
              </section>
            </div>
          </div>

          <div className="grid-container background-white">
            <div className="grid-inner-wrapper">
              <section className="align-items padding-top-medium padding-bottom-medium">
                <div className="text-on-image half-left">
                  <div className="text-on-image-text">{data.datoCmsHome.servicesTitle}</div>
                  <Img className="text-on-image-image" fluid={data.datoCmsHome.servicesImage.fluid} alt={data.datoCmsHome.servicesTitle}/>
                </div>

                <div
                  className="col-4-right accent-paragraph accent-last-text"
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsHome.servicesDescriptionNode.childMarkdownRemark.html,
                  }}
                />
              </section>

              <section className="modalities padding-bottom-medium mobile-padding-bottom-small">
                {data.datoCmsHome.modalities.map((item, i) => {
                  return (
                    <div className="modality-block" key={i}>
                      <div className="text-on-image modality-image">
                        <div className="text-on-image-text">{item.modalityName}</div>
                        <Img className="text-on-image-image" fluid={item.modalityImage.fluid} alt={item.modalityName}/>
                      </div>
                      <div
                        className="modality-text"
                        dangerouslySetInnerHTML={{
                          __html: item.modalityDescriptionNode.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  )
                })}
              </section>
            </div>
          </div>

          <Parallax bgImage={data.datoCmsHome.parallaxImage.url} strength={600}>
            <div className="parallax--spacer"></div>
          </Parallax>

          <div className="grid-container background-white">
            <div className="grid-inner-wrapper">

              <section className="align-items padding-top-medium">
                <div className="text-on-image half-left">
                  <div className="text-on-image-text">{data.datoCmsHome.ratesTitle}</div>
                  <Img className="text-on-image-image" fluid={data.datoCmsHome.ratesImage.fluid} alt={data.datoCmsHome.ratesImage.url}/>
                </div>

                <div className="col-4-right mobile-padding-top-small">
                  <table className="table rates-table">
                   <tbody>
                    {data.datoCmsHome.rates.map((rate, i) => {
                      return (
                        <tr key={i}>
                          <td><i>{rate.duration} minutes</i></td>
                          <td><i>${rate.price}</i></td>
                        </tr>
                      )
                    })}
                    </tbody>
                  </table>
                  <div
                    className="rates-description"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsHome.ratesDescriptionNode.childMarkdownRemark.html
                    }}
                  />
                </div>

              </section>

          </div>
        </div>

        </Layout>
      )}
    />
  )}
