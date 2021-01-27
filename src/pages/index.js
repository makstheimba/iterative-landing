import React, { useState } from 'react';
import Community from '../components/Community/Community';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import RequestDemoForm from '../components/RequestDemoForm/RequestDemoForm';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
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
      <RequestDemoForm
        visible={isRequestDemoFormVisible}
        onClose={closeRequestDemoForm}
        onSubmit={handleRequestDemoFormSubmit}
      />
      <Header
        isMain
        title="Open platform to&nbsp;operationalize AI"
        text="AI teams face challenges that require new technologies. We build these technologies. Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos."
      >
        <Button onClick={openRequestDemoForm}>Request a Demo</Button>
      </Header>
      <main>
        <Community />
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
