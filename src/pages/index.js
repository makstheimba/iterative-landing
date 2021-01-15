import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="This is our home and here we will share basic information" />
      our actual components will go in here

      <Hero />
    </Layout>


  )
}

export default IndexPage
