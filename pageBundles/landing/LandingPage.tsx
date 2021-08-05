import React from 'react';
import Header from 'app-common/components/Header/Header';
import Footer from 'app-common/components/Footer';
import styled, { css } from 'styled-components';
import { setFont } from 'app-common/globalStyles/variables';
import { isPhoneOrSmaller, isSmallPhone } from 'app-common/globalStyles/screens';

const StyledLanding = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  min-height: 80vh;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10rem 2.6rem;
  ${isSmallPhone(css`
    min-height: 65vh;
  `)}
`;

const HeroHeading = styled.h1`
  color: ${(p) => p.theme.colors.colorPrimary1};
  font-family: ${setFont.headings};
  font-weight: 500;
  font-size: 6rem;
  margin-bottom: 3rem;
  letter-spacing: -0.04em;

  ${isPhoneOrSmaller(css`
    font-size: 5.5rem;
  `)}
`;

const HeroSubheading = styled.p`
  font-size: 2.8rem;
  font-weight: 400;
  max-width: 780px;
  text-align: center;
  color: ${(p) => p.theme.colors.colorPrimary1};

  ${isSmallPhone(css`
    font-size: 2rem;
  `)}
`;

const LandingPage = () => {
  return (
    <StyledLanding>
      <Header />
      <Main>
        <Hero>
          <HeroHeading>Become your best self.</HeroHeading>
          <HeroSubheading>
            We build tech products inspired by ancient philosophy and modern psychology that help you
            cultivate mental and emotional well-being.
          </HeroSubheading>
        </Hero>
      </Main>
      <Footer />
    </StyledLanding>
  );
};

export default LandingPage;
