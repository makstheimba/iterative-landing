import * as React from "react"
import Layout from '../Layout/Layout'
import SEO from '../utils/Seo'
import TheTeam from "../components/TheTeam"

const AboutPage = () => {
    return (
      <Layout>
        <SEO title="About Us" description="This is our About Us page" />
        
        <TheTeam />
      </Layout>
    )
  }

export default AboutPage;