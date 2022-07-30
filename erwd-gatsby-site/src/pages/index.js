import React from 'react'
import { Link } from 'gatsby'
// import StyleWrapper from '../components/StyleWrapper'
import Layout from '../components/layout/Layout'

const Index = () => {
  return (
    <Layout>
      <div>
        <h1>My Landing Page</h1>
        <p>This is my landing page.</p>
        <Link to='/about'>About me</Link>
      </div>
    </Layout>
  )
}

export default Index
