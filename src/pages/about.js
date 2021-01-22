import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <Layout>
      <Cookies />
      <Header
        title="About Us"
        text={
          <p className="header__text">
            Data Science = Highly Iterative Metrics-driven Process With{' '}
            <br className="header__break_for_tablet"></br>
            Data <br className="header__break_for_desktop"></br>and Code
          </p>
        }
      />
      <Footer />
    </Layout>
  );
}
