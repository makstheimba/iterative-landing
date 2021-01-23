import * as React from "react"
import Layout from '../Layout/Layout'
import SEO from '../utils/Seo'
import Career from "../components/Career"
import AboutUs from "../components/AboutUs"
import TheTeam from "../components/TheTeam"

const AboutPage = () => {
    return (
      <Layout>
        <SEO title="About Us" description="This is our About Us page" />
        <AboutUs />
        <Career />
        <TheTeam />
      </Layout>
    )
  }

export default AboutPage;