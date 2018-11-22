import React from 'react'
import Layout from '../components/layout'

export default props => (
  <Layout location={props.location.pathname}>
    <div className="grid-container background-white">
      <div className="grid-inner-wrapper padding-top-medium">
      <h1 className="full-width">PAGE NOT FOUND</h1>
      <p className="full-width">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)
