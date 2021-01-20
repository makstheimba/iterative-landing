import * as React from "react"
import Hero from "../components/Hero"
import MeetCommunity from "../components/MeetCommunity"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="This is our home and here we will share basic information" />
      <Hero />
      <MeetCommunity />
    </Layout>
  )
}

export default IndexPage
