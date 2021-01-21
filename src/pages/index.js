import React from "react"
import { Link } from "gatsby"
import Layout  from '../components/Layout/Layout'

// markup
const IndexPage = () => {
  return (
    <main >
      <Layout>
        <title>Home Page</title>
        
        
        <Link to="/about/">This is a link to About page</Link><br />
        
      </Layout>
    </main>
  )
}

export default IndexPage
