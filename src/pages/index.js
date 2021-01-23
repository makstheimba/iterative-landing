import * as React from "react"
import Hero from "../components/Hero"
import Enterprise from '../components/Enterprise'
import MeetCommunity from "../components/MeetCommunity"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"
import Modal from "../components/Modal"


// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" description="This is our home and here we will share basic information" />
        <Hero />
        <Enterprise />
        <MeetCommunity />
      </Layout>
      {/* This is the popup container to be used for the Demo Form */}
      {/* <Modal /> */}
    </>
  )
}

export default IndexPage
