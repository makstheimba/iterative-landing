import React, { useEffect, useState }  from "react"
import Hero from "../components/Hero"
import Enterprise from "../components/Enterprise"
import MeetCommunity from "../components/MeetCommunity"
import Modal from "../components/Modal"
import CookieModal from "../components/CookieModal"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"








const IndexPage = () => {

  const [isPopUpOpen, setisPopUpOpen] = useState(false);
  const [cookieOpen, setIscookieOpen] = useState(true)
  const [cookies, setCookies] = useState(false)

  const savedItem = localStorage.getItem("cookie")
  function closeModal() {
    localStorage.setItem("cookie", "cookies")
    setIscookieOpen(false);
    setCookies(true)
  }
  const test = () => {
    console.log(savedItem);
  }
  test()
  const getCookies = () => {
    if(localStorage.getItem !== null){
      setCookies(true)
    }
  }
  console.log(cookies);
  useEffect(() => {
    getCookies()
  }, [])


  function openPopUp() {
    setisPopUpOpen(true);
  }

  function closePopup() {
    setisPopUpOpen(false);
  }

  return (
    <>
      <Layout>
        <SEO title="Home" description="This is our home and here we will share basic information" />
        <Hero handleClick={openPopUp} />
        <Enterprise />
        <MeetCommunity />
        {cookies === true ?  "null"  : < Modal isOpen={isPopUpOpen} handleClose={closePopup} />}
        
        <CookieModal cookieOpen={cookieOpen} handleClose={closeModal} cookies={cookies} />
      </Layout>

    </>
  )
}

export default IndexPage
