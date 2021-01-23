import * as React from "react"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"

import Timeline from '../components/Timeline'

const AboutPage = () => {
    return (
    <Layout>
        <SEO title="About" description="About us" />
        <Timeline />
    </Layout>
    )
}

export default AboutPage;