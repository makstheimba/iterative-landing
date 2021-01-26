import * as React from 'react';
import Community from '../components/Community/Community';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import CustomersList from '../components/CustomersList/CustomersList';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Diagram from '../components/Diagram/Diagram';
import CompanyHighlightList from '../components/CompanyHighlightList/CompanyHighlightList';
import Footer from '../components/Footer/Footer';
import '../page-styles/index.css';

const IndexPage = () => {
  return (
    <Layout>
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
        <section className="section enterprise">
          <SectionTitle
            title="Enterprise"
            subtitle="AI hand in hand with software development. Built with data scientists, ML engineers, and data engineers in mind."
          />
          <Diagram />
          <CompanyHighlightList />
        </section>
        <Community />
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
