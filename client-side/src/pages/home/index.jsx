// pages/Home.jsx
import '../../App.css';

import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Soon from './components/Soon';
import Team from './components/Team';
import Faq from './components/Faq';
import Join from './components/Join';
import PageWrapper from '../../HOC/PageWrapper';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Soon />
      <Team />
      <Faq />
      <Join />
    </>
  );
}

export default PageWrapper(Home);
