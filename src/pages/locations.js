import React from 'react'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query contactQuery{
          datoCmsContact {
            dufferinLocationName
            dundasImage {
              url
            }
            dufferinLocationLink
            dufferinLocation {
              latitude
              longitude
            }
            dufferinDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            dufferinHours {
              day
              hours
            }
            dundasDescriptionNoteNode {
              childMarkdownRemark {
                html
              }
            }
            ossingtonLocationName
            ossingtonImage {
              url
            }
            ossingtonLocationLink
            ossingtonLocation {
              latitude
              longitude
            }
            ossingtonDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            ossingtonHours {
              day
              hours
            }
            ossingtonDescriptionNoteNode {
              childMarkdownRemark {
                html
              }
            }
            contactTitle
            contactImage {
              url
            }
            telephone
            email
          }
        }
      `}
      render={data => {
        const ossingtonMapUrl = "https://maps.google.com/?q=" + data.datoCmsContact.ossingtonLocation.latitude.toString() + "," + data.datoCmsContact.ossingtonLocation.longitude.toString() + "&output=embed"
        const dufferinMapUrl = "https://maps.google.com/?q=" + data.datoCmsContact.dufferinLocation.latitude.toString() + "," + data.datoCmsContact.dufferinLocation.longitude.toString() + "&output=embed"

        return (
          <Layout location={props.location.pathname}>
            <div className="grid-container">
              <div className="grid-inner-wrapper">
                <section className="padding-top-small">
                  <div className="half-left padding-bottom-medium">
                    <a href={data.datoCmsContact.dufferinLocationLink}>
                      <div className="text-on-image">
                        <div className="text-on-image-text">{data.datoCmsContact.dufferinLocationName}</div>
                        <img className="text-on-image-image" src={data.datoCmsContact.dundasImage.url} alt={data.datoCmsContact.dufferinLocationName}/>
                      </div>
                    </a>
                    <iframe
                      className="padding-top-tiny"
                      title="dufferin"
                      width="100%"
                      height="250"
                      scrolling="no"
                      src={dufferinMapUrl}
                     ></iframe>
                    <div
                      className="locationa padding-top-tiny padding-bottom-tiny"
                      dangerouslySetInnerHTML={{
                        __html: data.datoCmsContact.dufferinDescriptionNode.childMarkdownRemark.html,
                      }}
                    />
                    <div className="padding-bottom-tiny">
                      <table className="table hours-table">
                        <h4>Hours</h4>
                       <tbody>
                        {data.datoCmsContact.dufferinHours.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.day}</td>
                              <td>{item.hours}</td>
                            </tr>
                          )
                        })}
                        </tbody>
                      </table>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.datoCmsContact.dundasDescriptionNoteNode.childMarkdownRemark.html,
                      }}
                    />
                  </div>

                  <div className="half-right padding-bottom-medium">
                    <a href={data.datoCmsContact.ossingtonLocationLink}>
                      <div className="text-on-image">
                        <div className="text-on-image-text">{data.datoCmsContact.ossingtonLocationName}</div>
                        <img className="text-on-image-image" src={data.datoCmsContact.ossingtonImage.url} alt={data.datoCmsContact.ossingtonLocationName}/>
                      </div>
                    </a>

                    <iframe
                      className="padding-top-tiny"
                      title="ossington"
                      width="100%"
                      height="250"
                      scrolling="no"
                      src={ossingtonMapUrl}
                     ></iframe>
                     <div
                        className="locationb padding-top-tiny padding-bottom-tiny"
                        dangerouslySetInnerHTML={{
                         __html: data.datoCmsContact.ossingtonDescriptionNode.childMarkdownRemark.html,
                        }}
                     />
                    <div className="padding-bottom-tiny">
                      <table className="table hours-table">
                        <h4>hours</h4>
                       <tbody>
                        {data.datoCmsContact.ossingtonHours.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.day}</td>
                              <td>{item.hours}</td>
                            </tr>
                          )
                        })}
                        </tbody>
                      </table>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.datoCmsContact.ossingtonDescriptionNoteNode.childMarkdownRemark.html,
                      }}
                    />
                  </div>


                  <div className="text-on-image half-left">
                    <div className="text-on-image-text">{data.datoCmsContact.contactTitle}</div>
                    <img className="text-on-image-image" src={data.datoCmsContact.contactImage.url} alt={data.datoCmsContact.contactTitle}/>
                  </div>
                  <div className="col-4-right">
                    <p><strong>Telephone:</strong> {data.datoCmsContact.telephone}</p>
                    <p><strong>Email:</strong> {data.datoCmsContact.email}</p>
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
