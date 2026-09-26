import React from 'react';
import styled, { css } from 'styled-components';
import Header from 'app-common/components/Header/Header';
import Footer from 'app-common/components/Footer';
import { setFont } from 'app-common/globalStyles/variables';
import { isPhoneOrSmaller } from 'app-common/globalStyles/screens';

const Page = styled.div`
  min-height: 100vh;
  background: #f7f8fb;
  color: ${(p) => p.theme.colors.colorPrimary1};
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 2.4rem 4rem;
`;

const Hero = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${setFont.headings};
  font-weight: 600;
  font-size: 4.8rem;
  margin-bottom: 1.2rem;
  color: ${(p) => p.theme.colors.colorPrimary1};

  ${isPhoneOrSmaller(css`
    font-size: 3.6rem;
  `)}
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
  color: ${(p) => p.theme.colors.colorText};
`;

const Section = styled.section`
  margin-bottom: 3.2rem;
`;

const SectionTitle = styled.h2`
  font-family: ${setFont.headings};
  font-size: 2.6rem;
  margin-bottom: 1.2rem;
  color: ${(p) => p.theme.colors.colorPrimary1};
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 1.65;
  margin-bottom: 1.2rem;
  color: ${(p) => p.theme.colors.colorText};
`;

const List = styled.ul`
  padding-left: 1.6rem;
  margin-bottom: 1.2rem;
`;

const ListItem = styled.li`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  color: ${(p) => p.theme.colors.colorText};
`;

const ExternalLink = styled.a`
  color: ${(p) => p.theme.colors.colorPrimary1};
  text-decoration: underline;
`;

const EmailBox = styled.div`
  background: white;
  border: 2px solid ${(p) => p.theme.colors.colorPrimary1};
  border-radius: 8px;
  padding: 2.4rem;
  text-align: center;
  margin: 2.4rem 0;
`;

const EmailLabel = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: ${(p) => p.theme.colors.colorText};
`;

const EmailLink = styled.a`
  font-family: ${setFont.main};
  font-size: 2.4rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.colorPrimary1};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${isPhoneOrSmaller(css`
    font-size: 2rem;
  `)}
`;

const InvestMathSupportPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Hero>
          <Title>InvestMath Support</Title>
          <Subtitle>We&apos;re here to help</Subtitle>
        </Hero>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            If something isn&apos;t working in InvestMath, or you have a question, complaint, or
            suggestion, email our support team:
          </Paragraph>

          <EmailBox>
            <EmailLabel>Email us at</EmailLabel>
            <EmailLink href="mailto:support@getataraxia.com">support@getataraxia.com</EmailLink>
          </EmailBox>
        </Section>

        <Section>
          <SectionTitle>What to Include</SectionTitle>
          <Paragraph>To help us resolve your issue quickly, please include:</Paragraph>
          <List>
            <ListItem>
              <strong>Device:</strong> Your device model and operating system version
            </ListItem>
            <ListItem>
              <strong>App version:</strong> Found under Settings &gt; About in InvestMath
            </ListItem>
            <ListItem>
              <strong>Calculator:</strong> Which calculator you were using and the inputs you
              entered
            </ListItem>
            <ListItem>
              <strong>What happened:</strong> What you expected, what you saw, and the steps that
              led there
            </ListItem>
            <ListItem>
              <strong>Screenshots:</strong> Anything that helps show the problem
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Common Questions</SectionTitle>
          <List>
            <ListItem>
              <strong>Results:</strong> InvestMath estimates outcomes from the inputs you provide.
              Real returns vary, and results are not financial advice.
            </ListItem>
            <ListItem>
              <strong>Restore Remove Ads:</strong> Sign in with the Apple ID or Google account you
              used to buy it, then tap Restore Purchases in InvestMath.
            </ListItem>
            <ListItem>
              <strong>Moving to a new device:</strong> Saved calculations are stored only on your
              device and don&apos;t transfer automatically.
            </ListItem>
            <ListItem>
              <strong>Ads not loading:</strong> Check your internet connection. If you bought Remove
              Ads and still see ads, restore your purchase.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Response Time</SectionTitle>
          <Paragraph>
            We aim to reply within 48 hours on business days. Replies may take longer on weekends
            and holidays.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Privacy</SectionTitle>
          <Paragraph>
            When you contact us, we keep your email address and message to provide support. See the{' '}
            <ExternalLink href="/investmath-privacy">InvestMath Privacy Policy</ExternalLink> for how
            the app handles data.
          </Paragraph>
        </Section>
      </Main>
      <Footer />
    </Page>
  );
};

export default InvestMathSupportPage;
