import React from 'react';
import styled, { css } from 'styled-components';
import Header from 'app-common/components/Header/Header';
import Footer from 'app-common/components/Footer';
import { setFont } from 'app-common/globalStyles/variables';
import { isPhoneOrSmaller } from 'app-common/globalStyles/screens';

const LAST_UPDATED = 'January 31, 2025';

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

const Meta = styled.p`
  font-size: 1.4rem;
  color: #667085;
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

const SERVICE_PROVIDERS = [
  {
    name: 'Mixpanel',
    description:
      'Product analytics that help us understand which CoastFire features are used so we can prioritize improvements. Events may include currency selection, current age, target retirement age, safe withdrawal rate, target income, and cautious rate reduction.',
    link: 'https://mixpanel.com/legal/privacy-policy/',
  },
  {
    name: 'Google Mobile Ads (AdMob)',
    description:
      'Banner and interstitial advertising. Google may receive advertising identifiers, approximate location (from IP), and device details to deliver and measure ads.',
    link: 'https://policies.google.com/technologies/ads',
  },
  {
    name: 'RevenueCat',
    description:
      'Manages the optional ad-free purchase and entitlement syncing with Apple and Google. RevenueCat processes purchase receipts but not your payment card details.',
    link: 'https://www.revenuecat.com/privacy/',
  },
];

const CoastFirePrivacyPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Hero>
          <Title>CoastFire Privacy Policy</Title>
          <Subtitle>Ataraxia Labs</Subtitle>
          <Meta>Last updated: {LAST_UPDATED}</Meta>
        </Hero>

        <Section>
          <SectionTitle>Overview</SectionTitle>
          <Paragraph>
            CoastFire helps you estimate your path to Coast FIRE. We aim to collect the minimum
            personal information necessary to operate the app, explain our practices clearly, and
            give you meaningful controls.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Data you provide</SectionTitle>
          <Paragraph>
            When you enter calculation inputs, notes, or save scenarios, that information stays on
            your device. CoastFire stores data locally using an on-device database (Realm) and does
            not upload your saved calculations to Ataraxia Labs servers.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Analytics</SectionTitle>
          <Paragraph>
            We use Mixpanel to understand feature usage and improve the product. Example properties
            sent with analytics events include your selected currency, current age, target retirement
            age, safe withdrawal rate, target income, and cautious rate reduction. Mixpanel may also
            receive basic device information such as app version, platform, and approximate location
            derived from your IP address. We do not send your year-by-year projections or free-form
            notes to analytics.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Advertising</SectionTitle>
          <Paragraph>
            CoastFire displays banner and interstitial ads via Google Mobile Ads (AdMob), unless you
            purchase the ad-free upgrade. On iOS we request App Tracking Transparency permission.
            If you decline, the app requests non-personalized ads. Google may process identifiers
            such as your device advertising ID, IP address, or coarse location to deliver and measure
            ads.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Purchases</SectionTitle>
          <Paragraph>
            The optional ad-free experience is sold through Apple and Google app stores. We use
            RevenueCat to validate purchases and sync your entitlement across devices. RevenueCat
            receives purchase receipts and anonymous identifiers but not your payment card details.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Data sharing &amp; selling</SectionTitle>
          <Paragraph>
            Ataraxia Labs does not sell personal data. We share information only with the service
            providers listed below so they can perform analytics, ads, or purchase processing on our
            behalf.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Service providers</SectionTitle>
          <List>
            {SERVICE_PROVIDERS.map((provider) => (
              <ListItem key={provider.name}>
                <strong>{provider.name}</strong> - {provider.description}{' '}
                <ExternalLink
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </ExternalLink>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>Retention</SectionTitle>
          <List>
            <ListItem>
              Local calculations remain on your device until you delete them or uninstall the app.
            </ListItem>
            <ListItem>
              Analytics, purchase, and advertising logs are retained by our providers according to
              their policies, after which they are deleted or aggregated.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Your choices</SectionTitle>
          <List>
            <ListItem>Delete saved calculations from the CoastFire app at any time.</ListItem>
            <ListItem>
              Decline iOS tracking permission or reset your device advertising identifier in system
              settings.
            </ListItem>
            <ListItem>
              Contact us if you would like to request access or deletion related to analytics data
              we hold.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Children</SectionTitle>
          <Paragraph>
            CoastFire is intended for general audiences and is not directed to children under 13. We
            do not knowingly collect information from children.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <Paragraph>
            Questions about this policy? Email{' '}
            <ExternalLink href="mailto:support@getataraxia.com">
              support@getataraxia.com
            </ExternalLink>{' '}
            or use the support contact listed on the CoastFire App Store or Google Play listing.
          </Paragraph>
        </Section>
      </Main>
      <Footer />
    </Page>
  );
};

export default CoastFirePrivacyPage;
