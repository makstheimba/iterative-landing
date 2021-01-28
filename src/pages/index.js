import * as React from 'react';
import Community from '../components/Community/Community';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import CustomersList from '../components/CustomersList/CustomersList';
import Enterprise from '../components/Enterprise/Enterprise';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Cookies />
      <Header
        isMain
        title="Open platform to&nbsp;operationalize AI"
        text="AI teams face challenges that require new technologies. We build these technologies. Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos."
      >
        <Button onClick={() => console.log('open demo form')}>
          Request a Demo
        </Button>
        <CustomersList />
      </Header>
      <main>
        <Enterprise />
        <Community />
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
