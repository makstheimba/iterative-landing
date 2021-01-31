import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PricingCardList from '../components/PricingCardList/PricingCardList';
import RequestDemoForm from '../components/RequestDemoForm/RequestDemoForm';

export default function PricingPage() {
  const [isRequestDemoFormVisible, setIsRequestDemoFormVisible] = useState(
    false
  );

  function closeRequestDemoForm() {
    setIsRequestDemoFormVisible(false);
    window.removeEventListener('keyup', handleEscPopupClose);
  }

  function handleEscPopupClose(e) {
    if (e.key === 'Escape') {
      closeRequestDemoForm();
    }
  }

  function openRequestDemoForm() {
    setIsRequestDemoFormVisible(true);
    window.addEventListener('keyup', handleEscPopupClose);
  }

  function handleRequestDemoFormSubmit(data) {
    console.log(data);
    return Promise.resolve(data);
  }

  return (
    <Layout>
      <Cookies />
      <RequestDemoForm
        visible={isRequestDemoFormVisible}
        onClose={closeRequestDemoForm}
        onSubmit={handleRequestDemoFormSubmit}
      />
      <Header
        title="Pricing"
        text="Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos. AI teams face challenges that require new technologies. We build these technologies."
      />
      <PricingCardList onClick={openRequestDemoForm} />
      <Footer />
    </Layout>
  );
}
