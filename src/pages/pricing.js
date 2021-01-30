import * as React from "react"
import Layout from "../Layout/Layout"
import SEO from "../utils/Seo"
import Pricing from "../components/Pricing"
import Modal from '../components/Modal'

const PricingPage = () => {

    const [isPopUpOpen, setisPopUpOpen] = React.useState(false);

    function openPopUp(){
      setisPopUpOpen(true);
    }
  
    function closePopup(){
      setisPopUpOpen(false);
    }

    return (
        <Layout>
            <SEO title="Home" description="This is our home and here we will share basic information" />
            <Pricing handleClick={openPopUp}/>
            <Modal isOpen={isPopUpOpen} handleClose={closePopup}/>
        </Layout>
    )
}

export default PricingPage;