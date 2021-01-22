import * as React from 'react';
import Community from '../components/Community/Community';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';

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
      </Header>
      <main>
        <Community />
      </main>
    </Layout>
  );
};

export default IndexPage;
