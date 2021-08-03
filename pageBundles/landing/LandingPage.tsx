import React from 'react';
import Header from 'app-common/components/AppNavigation/Header';
import Footer from 'app-common/components/Footer/Footer';
import styled, { css } from 'styled-components';
import { setFont, setRem } from 'app-common/globalStyles/variables';
import {
  isPhoneOrSmaller,
  isSmallPhone,
  isVerySmallPhone,
} from 'app-common/globalStyles/screens';

const StyledLanding = styled.div`
  min-height: 100vh;
`;

const StyledPageContainer = styled.div`
  display: flex;
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  margin: ${setRem(130)} ${setRem(35)};
  ${isSmallPhone(css`
    min-height: 65vh;
  `)}
`;

const PageHeader = styled.h1`
  color: ${(p) => p.theme.colors.colorPrimary1};
  font-family: ${setFont.headings};
  font-weight: bold;
  font-size: ${setRem(95)};
  margin-bottom: ${setRem(30)};
  letter-spacing: -0.04em;

  ${isPhoneOrSmaller(css`
    font-size: ${setRem(85)};
  `)}
  ${isSmallPhone(css`
    font-size: ${setRem(62)};
  `)}
  ${isVerySmallPhone(css`
    font-size: ${setRem(52)};
  `)}
`;
const PageContent = styled.p`
  font-size: ${setRem(40)};
  font-weight: 400;
  max-width: 780px;
  text-align: center;
  color: ${(p) => p.theme.colors.colorPrimary1};

  ${isSmallPhone(css`
    font-size: ${setRem(35)};
  `)}
`;

const LandingPage = () => {
  return (
    <StyledLanding>
      <Header />
      <StyledPageContainer>
        <PageHeader>Become your best self.</PageHeader>
        <PageContent>
          We focus on building tech products inspired by ancient philosophy and modern psychology that help
          people cultivate mental and emotional well-being.
        </PageContent>
      </StyledPageContainer>
      <Footer />
    </StyledLanding>
  );
};

export default LandingPage;
