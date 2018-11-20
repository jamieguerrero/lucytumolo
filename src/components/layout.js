import React from 'react'
import { Helmet } from "react-helmet"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'

import DarkHeader from './dark-header'
import LightHeader from './light-header'
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.datoCmsSite.name}</title>
        </Helmet>
        <HelmetDatoCms
          title={data.datoCmsSite.name}
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />

        {location === '/' ?
          <LightHeader logoUrl={data.datoCmsSite.theme.logo.url} />
          :
          <DarkHeader logoUrl={data.datoCmsSite.theme.logo.url} />
        }

        {children}

        <Footer />
      </>
    )}
  />
)
