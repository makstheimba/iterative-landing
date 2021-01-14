import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Title title="This is a test, I made it longer to see if the title gradient is ok." size="l" />
      </Layout>
    </main>
  );
};

export default IndexPage;
