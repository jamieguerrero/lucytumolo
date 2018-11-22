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
          theme {
            logo {
              url
            }
          }
        }
        datoCmsHome {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
        datoCmsContact {
          telephone
          email
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
        <Helmet
          title={data.datoCmsSite.name}
        ></Helmet>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />

        {location === '/' ?
          <HomeHeader logoUrl={data.datoCmsSite.theme.logo.url} />
          :
          <Header logoUrl={data.datoCmsSite.theme.logo.url} />
        }

        {children}

        <Footer
          ossington={data.datoCmsContact.ossingtonDescriptionNode.childMarkdownRemark.html}
          telephone={data.datoCmsContact.telephone}
          email={data.datoCmsContact.email}
          dufferin={data.datoCmsContact.dufferinDescriptionNode.childMarkdownRemark.html}
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
