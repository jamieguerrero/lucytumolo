import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query aboutQuery{
          datoCmsContact {
            dufferinLocationName
            dufferinLocationLink
            ossingtonLocation {
              latitude
              longitude
            }
            ossingtonLocationName
            ossingtonLocationLink
            dufferinLocation {
              latitude
              longitude
            }
          }
        }
      `}
      render={data => {
        const dufferinMapUrl = "https://maps.google.com/?q=" + data.datoCmsContact.ossingtonLocation.latitude.toString() + "," + data.datoCmsContact.ossingtonLocation.longitude.toString() + "&output=embed"
        const ossingtonMapUrl = "https://maps.google.com/?q=" + data.datoCmsContact.dufferinLocation.latitude.toString() + "," + data.datoCmsContact.dufferinLocation.longitude.toString() + "&output=embed"
        const { dufferinLocationName, dufferinLocationLink, ossingtonLocationName, ossingtonLocationLink } = data.datoCmsContact
        console.log(props)
        return (
          <Layout location={props.location.pathname}>
            <Link to={dufferinLocationLink}>{dufferinLocationName}</Link>
            <iframe
              title="dufferinMap"
              width="300"
              height="170"
              scrolling="no"
              src={dufferinMapUrl}
             ></iframe>
            <Link to={ossingtonLocationLink}>{ossingtonLocationName}</Link>
            <iframe
              title="ossingtonMap"
              width="300"
              height="170"
              scrolling="no"
              src={ossingtonMapUrl}
             ></iframe>
          </Layout>
        )
      }}
    />
  )}
