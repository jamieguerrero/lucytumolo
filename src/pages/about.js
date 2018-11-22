import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query aboutQuery{
          datoCmsAbout {
            title
            heroImage {
              url
            }
            descriptionNode {
              childMarkdownRemark {
                html
              }
            }
          }
          datoCmsContact {
            dufferinLocationName
            dufferinLocationLink
            dufferinLocation {
              latitude
              longitude
            }
            ossingtonLocationName
            ossingtonLocationLink
            ossingtonLocation {
              latitude
              longitude
            }
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
      render={data => {
        const dufferinMapUrl = "https://maps.google.com/?q=" + data.datoCmsContact.ossingtonLocation.latitude.toString() + "," + data.datoCmsContact.ossingtonLocation.longitude.toString() + "&output=embed"
        const ossingtonMapUrl = "https://maps.google.com/?q=" + data.datoCmsContact.dufferinLocation.latitude.toString() + "," + data.datoCmsContact.dufferinLocation.longitude.toString() + "&output=embed"
        const { dufferinLocationLink, ossingtonLocationLink } = data.datoCmsContact
        return (
          <Layout location={props.location.pathname}>
            <div className="grid-container">
              <div className="grid-inner-wrapper">
                <section className="padding-top-small">
                  <div className="text-on-image half-left">
                    <div className="text-on-image-text">{data.datoCmsAbout.title}</div>
                    <img className="text-on-image-image full-image" src={data.datoCmsAbout.heroImage.url} alt={data.datoCmsAbout.title}/>
                  </div>
                  <div
                    className="text-right"
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsAbout.descriptionNode.childMarkdownRemark.html,
                    }}
                  />
                </section>

                <section className="padding-top-small">
                  <h2 className="full-width">Locations</h2>
                  <div className="half-left">
                    <iframe
                      title="dufferin"
                      width="100%"
                      height="250"
                      scrolling="no"
                      src={dufferinMapUrl}
                     ></iframe>
                     <a href={dufferinLocationLink}>
                       <div
                         dangerouslySetInnerHTML={{
                           __html: data.datoCmsContact.dufferinDescriptionNode.childMarkdownRemark.html,
                         }}
                       />
                     </a>
                  </div>
                  <div className="half-right">
                    <iframe
                      title="ossington"
                      width="100%"
                      height="250"
                      scrolling="no"
                      src={ossingtonMapUrl}
                     ></iframe>
                     <a href={ossingtonLocationLink}>
                       <div
                         dangerouslySetInnerHTML={{
                           __html: data.datoCmsContact.ossingtonDescriptionNode.childMarkdownRemark.html,
                         }}
                       />
                     </a>
                  </div>
                  </section>
                </div>
              </div>

          </Layout>
        )
      }}
    />
  )}
