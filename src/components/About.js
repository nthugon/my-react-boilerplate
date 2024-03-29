import React from 'react';
import Hero from './Hero';
 
const About = () => (
  <Hero>
    <Hero.Container>
      <Hero.TextWrapper>
        <Hero.Text>This app is written using styled-components with React.</Hero.Text>
      </Hero.TextWrapper>
    </Hero.Container>
  </Hero>
);

export default About;