import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';
import TimeLine from '../components/TimeLine/TimeLine';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/Team';
import LeaderShip from '../components/Leadership/Leadership';
import Career from '../components/Career/Career';
import RequestDemoForm from '../components/RequestDemoForm/RequestDemoForm';
import { times } from '../utils/data';

export default function AboutPage() {
  const [isRequestDemoFormVisible, setIsRequestDemoFormVisible] = useState(
    false
  );

  function closeRequestDemoForm() {
    setIsRequestDemoFormVisible(false);
    window.removeEventListener('keyup', handleEscPopupClose);
  }

  function handleEscPopupClose(e) {
    if (e.key === 'Escape') {
      closeRequestDemoForm();
    }
  }

  function openRequestDemoForm() {
    setIsRequestDemoFormVisible(true);
    window.addEventListener('keyup', handleEscPopupClose);
  }

  function handleRequestDemoFormSubmit(data) {
    console.log(data);
    return Promise.resolve(data);
  }

  return (
    <Layout>
      <Cookies />
      <RequestDemoForm
        visible={isRequestDemoFormVisible}
        onClose={closeRequestDemoForm}
        onSubmit={handleRequestDemoFormSubmit}
      />
      <Header
        title="About Us"
        text="Data Science = Highly Iterative Metrics-driven Process With Data and Code"
      >
        <TimeLine times={times} />
      </Header>
      <Team />
      <LeaderShip />
      <Career onClick={openRequestDemoForm} />
      <Footer />
    </Layout>
  );
}
