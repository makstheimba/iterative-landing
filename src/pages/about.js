import * as React from "react"
import Layout from '../Layout/Layout'
import SEO from '../utils/Seo'
import Career from "../components/Career"
import TheTeam from "../components/TheTeam"
import Timeline from '../components/Timeline'
import Leadership from '../components/Leadership'
import Modal from '../components/Modal'

const AboutPage = () => {

  const [isPopUpOpen, setisPopUpOpen] = React.useState(false);

  function openPopUp(){
    setisPopUpOpen(true);
  }

  function closePopup(){
    setisPopUpOpen(false);
  }
    return (
      <Layout>
        <SEO title="About Us" description="This is our About Us page" />
        <Timeline />
        <TheTeam />
        <Leadership />
        <Career handleClick={openPopUp}/>
        <Modal isOpen={isPopUpOpen} handleClose={closePopup}/>

      </Layout>     
    )
  }

export default AboutPage;