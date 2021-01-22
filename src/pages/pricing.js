import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';

export default function PricingPage() {
  return (
    <Layout>
      <Cookies />
      <Header
        title="Pricing"
        text="Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos. AI teams face challenges that require new technologies. We build these technologies."
      />
    </Layout>
  );
}
