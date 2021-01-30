import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';
import TimeLine from '../components/TimeLine/TimeLine';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/Team';
import LeaderShip from '../components/Leadership/Leadership';
import Career from '../components/Career/Career';
import { times } from '../utils/data';

export default function AboutPage() {
  return (
    <Layout>
      <Cookies />
      <Header
        title="About Us"
        text="Data Science = Highly Iterative Metrics-driven Process With Data and Code"
      >
        <TimeLine times={times} />
      </Header>
      <Team />
      <LeaderShip />
      <Career />
      <Footer />
    </Layout>
  );
}
