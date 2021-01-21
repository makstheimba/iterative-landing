import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';

export default function AboutPage() {
  return (
    <Layout>
      <Cookies />
      <Header
        title="About Us"
        text="Data Science = Highly Iterative Metrics-driven Process With Data and Code"
      />
    </Layout>
  );
}
