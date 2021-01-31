import * as React from "react"
import Hero from "../components/Hero"
import Enterprise from "../components/Enterprise"
import MeetCommunity from "../components/MeetCommunity"
import Modal from "../components/Modal"
import CookieModal from "../components/CookieModal"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"


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
        <Modal isOpen={isPopUpOpen} handleClose={closePopup}/>
        <CookieModal />
      </Layout>

    </>
  )
}

export default IndexPage
