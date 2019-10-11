import React from 'react'
import { Helmet } from "react-helmet"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import HomeHeader from './home-header'
import Footer from './footer'
import '../styles/index.sass'

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        datoCmsSite {
          name
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsHome {
          logo {
            url
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }

        }
        datoCmsContact {
          telephone
          email
          dufferinLocationLink
          dufferinDescriptionNode {
            childMarkdownRemark {
              html
            }
          }
          dufferinHours {
            day
            hours
          }
          ossingtonDescriptionNode {
            childMarkdownRemark {
              html
            }
          }
        }
        datoCmsSocial {
          twitter
          instagram
          facebook
          twitterIcon {
            url
          }
          facebookIcon {
            url
          }
          instagramIcon {
            url
          }
          footerLogo {
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <Helmet
          title={data.datoCmsSite.name}
        ></Helmet>

        {location === '/' ?
          <HomeHeader logoUrl={data.datoCmsHome.logo.url} />
          :
          <Header logoUrl={data.datoCmsHome.logo.url} />
        }

        {children}

        <Footer
          ossington={data.datoCmsContact.ossingtonDescriptionNode.childMarkdownRemark.html}
          telephone={data.datoCmsContact.telephone}
          email={data.datoCmsContact.email}
          dufferin={data.datoCmsContact.dufferinDescriptionNode.childMarkdownRemark.html}
          dufferinLocationLink={data.datoCmsContact.dufferinLocationLink}
          dufferinHours={data.datoCmsContact.dufferinHours}
          twitter={data.datoCmsSocial.twitter}
          facebook={data.datoCmsSocial.facebook}
          instagram={data.datoCmsSocial.instagram}
          twitterIcon={data.datoCmsSocial.twitterIcon.url}
          facebookIcon={data.datoCmsSocial.facebookIcon.url}
          instagramIcon={data.datoCmsSocial.instagramIcon.url}
          logo={data.datoCmsSocial.footerLogo.url}
        />
      </>
    )}
  />
)
