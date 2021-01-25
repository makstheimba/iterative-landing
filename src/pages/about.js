import * as React from "react"
import Layout from '../Layout/Layout'
import SEO from '../utils/Seo'
import Career from "../components/Career"
import TheTeam from "../components/TheTeam"
import Timeline from '../components/Timeline'
import Leadership from '../components/Leadership'

const AboutPage = () => {
    return (
      <Layout>
        <SEO title="About Us" description="This is our About Us page" />
        <Timeline />
        <TheTeam />
        <Leadership />
        <Career />
      </Layout>
    )
  }

export default AboutPage;