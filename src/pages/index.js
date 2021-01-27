import React from "react"
import Layout  from '../components/Layout/Layout'
import Footer  from '../components/Footer/Footer'
import QuickLinks from '../components/QuickLinks/QuickLinks'
import BottomLine from '../components/BottomLine/BottomLine'
import Community from '../components/Community/Community'
import Highlights from '../components/Highlights/Highlights'
import Navbar from '../components/Navbar/Navbar'
import HomeHero from '../components/HomeHero/HomeHero'

// markup
const IndexPage = () => {
  return (
    <main >
      <Layout>
        <title>Home Page</title>
        <Navbar />
        <HomeHero />

        
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
