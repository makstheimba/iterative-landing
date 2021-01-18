import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"
import Enterprise from '../components/Enterprise'


// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="This is our home and here we will share basic information" />
      our actual components will go in here
      <Enterprise />
    </Layout>


  )
}

export default IndexPage
