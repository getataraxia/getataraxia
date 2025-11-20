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

const CoastFireSupportPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Hero>
          <Title>CoastFire Support</Title>
          <Subtitle>We're here to help</Subtitle>
        </Hero>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            If you're experiencing issues with CoastFire or have a complaint, we're here to listen
            and help. Please reach out to our support team at:
          </Paragraph>
          
          <EmailBox>
            <EmailLabel>Email us at</EmailLabel>
            <EmailLink href="mailto:support@getataraxia.com">
              support@getataraxia.com
            </EmailLink>
          </EmailBox>
        </Section>

        <Section>
          <SectionTitle>What to Include</SectionTitle>
          <Paragraph>
            To help us resolve your issue quickly, please include the following information in your
            message:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Device Information:</strong> Your device model (e.g., iPhone 14, Samsung
              Galaxy S23) and operating system version
            </ListItem>
            <ListItem>
              <strong>App Version:</strong> The version of CoastFire you're using (found in the app
              settings)
            </ListItem>
            <ListItem>
              <strong>Issue Description:</strong> A detailed description of the problem you're
              experiencing
            </ListItem>
            <ListItem>
              <strong>Steps to Reproduce:</strong> If applicable, the steps that led to the issue
            </ListItem>
            <ListItem>
              <strong>Screenshots:</strong> Any relevant screenshots that might help illustrate the
              issue
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Common Issues</SectionTitle>
          <Paragraph>
            Before reaching out, you might find answers to common questions:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Calculation accuracy:</strong> CoastFire provides estimates based on the
              inputs you provide. Results may vary based on actual market performance and individual
              circumstances.
            </ListItem>
            <ListItem>
              <strong>Ads not loading:</strong> Check your internet connection and ensure you haven't
              purchased the ad-free version. If problems persist, please contact us.
            </ListItem>
            <ListItem>
              <strong>Purchase not restored:</strong> Make sure you're using the same Apple ID or
              Google account that was used for the original purchase, then try the "Restore
              Purchases" option.
            </ListItem>
            <ListItem>
              <strong>Data not syncing:</strong> CoastFire stores data locally on your device. To
              transfer data between devices, you'll need to manually recreate your scenarios.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Response Time</SectionTitle>
          <Paragraph>
            We aim to respond to all support requests within 48 hours during business days. During
            holidays or weekends, responses may take slightly longer. We appreciate your patience.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Complaints &amp; Feedback</SectionTitle>
          <Paragraph>
            Your feedback helps us improve CoastFire. Whether you have a complaint, suggestion, or
            just want to share your experience, we value your input. All complaints are taken
            seriously and reviewed by our team.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Privacy</SectionTitle>
          <Paragraph>
            When you contact us, we may retain your email address and message content to provide
            support and improve our services. For more information about how we handle data, please
            review our{' '}
            <ExternalLink href="/coastfire-privacy">Privacy Policy</ExternalLink>.
          </Paragraph>
        </Section>
      </Main>
      <Footer />
    </Page>
  );
};

export default CoastFireSupportPage;
