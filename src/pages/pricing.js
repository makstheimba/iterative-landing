import * as React from "react"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"
import Pricing from "../components/Pricing"

const PricingPage = () => {
    return (
        <Layout>
            <SEO title="Home" description="This is our home and here we will share basic information" />
            <Pricing />
        </Layout>
    )
}

export default PricingPage;