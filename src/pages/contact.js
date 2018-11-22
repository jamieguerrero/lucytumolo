import React from 'react'
import Layout from '../components/layout'

// import { StaticQuery, graphql } from 'gatsby'

export default props => (
  <Layout location={props.location.pathname}>
    <div className="grid-container background-white">
      <div className="grid-inner-wrapper padding-top-small">
        <h1 className="full-width">NOT FOUND</h1>
        <p className="full-width">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)
