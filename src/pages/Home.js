import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { About } from '../components/About/About';
import { Portifolio } from '../components/Portifolio/Portifolio';
import styled from 'styled-components';
import React, { useRef } from 'react';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const portifolio = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <StyledHome>
      <Navbar scrollToSection={scrollToSection} home={home} about={about} portifolio={portifolio}/>
      <Header ref={home}/>
      <About  ref={about}/>
      <Portifolio ref={portifolio}/>
    </StyledHome>
  )
}

export { Home }
