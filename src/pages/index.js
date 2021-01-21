import * as React from 'react';
import Community from '../components/Community/Community';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Header
          isMain
          title="Open platform to operationalize AI"
          text="AI teams face challenges that require new technologies. We build these technologies. Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos."
        >
          <Button onClick={() => console.log('open demo form')}>
            Request a Demo
          </Button>
        </Header>
        <Community />
      </Layout>
    </main>
  );
};

export default IndexPage;
