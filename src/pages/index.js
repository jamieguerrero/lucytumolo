import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query HomeQuery {
          datoCmsHome {
            heroImage {
              url
            }
            ossingtonlink
            dundasLink
            servicesTitle
            servicesImage {
              url
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
        }
      `}
      render={data => (
        <Layout location={props.location.pathname}>
          <div className="hero-wrapper">
            <img className="background-hero" src={data.datoCmsHome.heroImage.url} alt={data.datoCmsHome.heroImage.url}/>
            <div className="hero-content">
              <div className="location-block">
                <a href={data.datoCmsHome.ossingtonlink}>OSSINGTON</a>
              </div>
              <div className="location-block">
                <a href={data.datoCmsHome.dundasLink}>DUFFERIN</a>
              </div>
            </div>
          </div>

          <div className="grid-container background-white">
            <div className="grid-inner-wrapper">

              <section className="align-items padding-top-medium padding-bottom-medium">
                <div className="text-on-image image-left">
                  <div className="text-on-image-text">{data.datoCmsHome.servicesTitle}</div>
                  <img className="text-on-image-image" src={data.datoCmsHome.servicesImage.url} alt={data.datoCmsHome.servicesTitle}/>
                </div>

                <div
                  className="text-right"
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsHome.servicesDescriptionNode.childMarkdownRemark.html,
                  }}
                />
              </section>

              <section className="modalities padding-bottom-medium">
                {data.datoCmsHome.modalities.map((item) => {
                  return (
                    <div className="modality-block">
                      <div className="text-on-image modality-image">
                        <div className="text-on-image-text">{item.modalityName}</div>
                        <img className="text-on-image-image" src={item.modalityImage.url} alt={item.modalityName}/>
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

          <img className="background-parallax" src={data.datoCmsHome.parallaxImage.url} alt={data.datoCmsHome.parallaxImage}/>
          <div className="background-parallax-spacer"></div>

          <div className="grid-container background-white">
            <div className="grid-inner-wrapper">

              <section className="align-items padding-top-medium padding-bottom-medium">
                <div className="text-on-image image-left">
                  <div className="text-on-image-text">{data.datoCmsHome.ratesTitle}</div>
                  <img className="text-on-image-image" src={data.datoCmsHome.ratesImage.url} alt={data.datoCmsHome.ratesImage.url}/>
                </div>

                <div className="text-right">
                  <table className="rates-table">
                    {data.datoCmsHome.rates.map((rate) => {
                      return (
                        <tr>
                          <td><i>{rate.duration} minutes</i></td>
                          <td><i>${rate.price}</i></td>
                        </tr>
                      )
                    })}
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
