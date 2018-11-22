import React from 'react'
import Layout from '../components/layout'

// import { StaticQuery, graphql } from 'gatsby'

export default props => {
return (
  <Layout location={props.location.pathname}>
    <div className="grid-container background-white">
      <div className="grid-inner-wrapper">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)}
