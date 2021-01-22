import * as React from 'react';
import Community from '../components/Community/Community';
import CompanyHighlightList from '../components/CompanyHighlightList/CompanyHighlightList';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Title
          title="This is a test, I made it longer to see if the title gradient is ok."
          size="l"
        />
        <Community />
        <CompanyHighlightList />
      </Layout>
    </main>
  );
};

export default IndexPage;
