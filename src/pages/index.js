import * as React from "react"
import Hero from "../components/Hero"
import Enterprise from '../components/Enterprise'
import MeetCommunity from "../components/MeetCommunity"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"
import Modal from "../components/Modal"


// markup
const IndexPage = () => {

  const [isPopUpOpen, setisPopUpOpen] = React.useState(false);

  function openPopUp(){
    setisPopUpOpen(true);
  }

  function closePopup(){
    setisPopUpOpen(false);

  }

  return (
    <>
      <Layout>
        <SEO title="Home" description="This is our home and here we will share basic information" />
        <Hero handleClick={openPopUp} />
        <Enterprise />
        <MeetCommunity />
      </Layout>

      <Modal isOpen={isPopUpOpen} handleClose={closePopup}/>
    </>
  )
}

export default IndexPage
