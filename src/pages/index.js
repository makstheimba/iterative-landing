import React from "react"
import { Link } from "gatsby"
import Layout  from '../components/Layout/Layout'
import Footer  from '../components/Footer/Footer'
import QuickLinks from '../components/QuickLinks/QuickLinks'
import BottomLine from '../components/BottomLine/BottomLine'
import Community from '../components/Community/Community'
import Highlights from '../components/Highlights/Highlights'

// markup
const IndexPage = () => {
  return (
    <main >
      <Layout>
        <title>Home Page</title>


        <Link to="/about/">This is a link to About page</Link><br />
        <Highlights />
        <Community />
        <Footer>
          <QuickLinks></QuickLinks>
          <BottomLine></BottomLine>
        </Footer>
      </Layout>
    </main>
  )
}

export default IndexPage
