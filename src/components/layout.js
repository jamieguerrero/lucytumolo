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

        <Footer />
      </>
    )}
  />
)
