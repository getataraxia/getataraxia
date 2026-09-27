import React from 'react';
import styled, { css } from 'styled-components';
import Header from 'app-common/components/Header/Header';
import Footer from 'app-common/components/Footer';
import { setFont } from 'app-common/globalStyles/variables';
import { isPhoneOrSmaller } from 'app-common/globalStyles/screens';

const LAST_UPDATED = 'September 27, 2026';

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
      'Product analytics that show which InvestMath calculators and features are used, so we can prioritize improvements.',
    link: 'https://mixpanel.com/legal/privacy-policy/',
  },
  {
    name: 'Google AdMob',
    description:
      "Banner and interstitial advertising, and Google's consent message for users in the EEA, UK, and Switzerland. Google may receive your device's advertising identifier, IP address, approximate location, and device details to deliver and measure ads.",
    link: 'https://policies.google.com/technologies/ads',
  },
  {
    name: 'RevenueCat',
    description:
      'Validates the optional Remove Ads purchase with Apple and Google and restores it on your devices. RevenueCat processes purchase receipts but not your payment card details.',
    link: 'https://www.revenuecat.com/privacy/',
  },
  {
    name: 'Expo (EAS Update)',
    description:
      'Delivers app updates. When InvestMath checks for an update, Expo receives your IP address and basic app and device version information.',
    link: 'https://expo.dev/privacy',
  },
];

const InvestMathPrivacyPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Hero>
          <Title>InvestMath Privacy Policy</Title>
          <Subtitle>Ataraxia Labs</Subtitle>
          <Meta>Last updated: {LAST_UPDATED}</Meta>
        </Hero>

        <Section>
          <SectionTitle>Overview</SectionTitle>
          <Paragraph>
            InvestMath is a set of investment calculators, including investment growth, annualized
            return, Coast FIRE, and investment goal planning. We collect the minimum information
            needed to run and improve the app, and explain our practices here.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Data you provide</SectionTitle>
          <Paragraph>
            The amounts, rates, and other inputs you enter, the calculations you save, and your
            settings stay on your device. InvestMath has no accounts and does not upload your
            calculations to Ataraxia Labs servers.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Analytics</SectionTitle>
          <Paragraph>
            We use Mixpanel to understand how InvestMath is used. Analytics events describe actions
            such as opening a calculator, running a calculation, saving or deleting a calculation,
            and changing a setting. They include which calculator you used, your currency and
            appearance settings, your onboarding choices, and non-monetary inputs such as time
            periods and rates of return. We do not send the amounts you enter, your age, or your
            saved calculations to analytics.
          </Paragraph>
          <Paragraph>
            Mixpanel also receives a random identifier for your installation, basic device and app
            information such as device model, operating system, and app version, and approximate
            location derived from your IP address.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Advertising</SectionTitle>
          <Paragraph>
            InvestMath shows banner and interstitial ads from Google AdMob unless you purchase Remove
            Ads. In the EEA, UK, and Switzerland, we show Google&apos;s consent message before ads
            are personalized. On iOS, we ask for App Tracking Transparency permission; if you
            decline, your device&apos;s advertising identifier is not used and ads are not
            personalized. Google may process your IP address, approximate location, and device
            details to deliver and measure ads and to prevent fraud.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Purchases</SectionTitle>
          <Paragraph>
            Remove Ads is a one-time purchase made through the App Store or Google Play. We use
            RevenueCat to validate the purchase and restore it on your devices. RevenueCat receives
            purchase receipts and an anonymous app user ID, not your payment details.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Data sharing &amp; selling</SectionTitle>
          <Paragraph>
            Ataraxia Labs does not sell personal data. We share information only with the service
            providers listed below so they can provide analytics, advertising, purchase processing,
            or app updates on our behalf.
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
              Data on your device remains until you delete it in the app or uninstall InvestMath.
            </ListItem>
            <ListItem>
              Analytics, advertising, and purchase records are kept by our providers according to
              their policies, after which they are deleted or aggregated.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Your choices</SectionTitle>
          <List>
            <ListItem>Delete saved calculations in InvestMath at any time.</ListItem>
            <ListItem>
              Change your ad consent from InvestMath&apos;s Settings where Google&apos;s consent
              message applies.
            </ListItem>
            <ListItem>
              Decline iOS tracking permission, or reset or delete your advertising identifier in
              your device settings.
            </ListItem>
            <ListItem>Purchase Remove Ads to stop seeing ads.</ListItem>
            <ListItem>
              Request access to or deletion of analytics data as described in Deleting your data
              below.
            </ListItem>
          </List>
        </Section>

        <Section id="delete-data">
          <SectionTitle>Deleting your data</SectionTitle>
          <List>
            <ListItem>
              <strong>Data on your device:</strong> delete saved calculations in InvestMath, or
              uninstall the app to remove everything it stores on your device.
            </ListItem>
            <ListItem>
              <strong>Analytics data:</strong> email{' '}
              <ExternalLink href="mailto:support@getataraxia.com?subject=InvestMath%20data%20deletion">
                support@getataraxia.com
              </ExternalLink>{' '}
              with the subject &ldquo;InvestMath data deletion&rdquo; and include the Support ID
              shown in InvestMath under Settings &gt; About InvestMath. We delete the analytics data
              linked to that ID within 30 days and confirm by email.
            </ListItem>
            <ListItem>
              <strong>What is kept:</strong> reports aggregated across many users, which cannot
              identify you. Records of the Remove Ads purchase are kept by Apple or Google and by
              RevenueCat for as long as needed to validate and restore the purchase and to meet tax
              obligations. Advertising data is controlled by Google; see Google&apos;s{' '}
              <ExternalLink
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                advertising controls
              </ExternalLink>
              .
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Children</SectionTitle>
          <Paragraph>
            InvestMath is intended for adults and is not directed to children. We do not knowingly
            collect information from children.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Changes</SectionTitle>
          <Paragraph>
            If we change how InvestMath handles data, we will update this page and the date above.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <Paragraph>
            Questions about this policy? Email{' '}
            <ExternalLink href="mailto:support@getataraxia.com">
              support@getataraxia.com
            </ExternalLink>
            .
          </Paragraph>
        </Section>
      </Main>
      <Footer />
    </Page>
  );
};

export default InvestMathPrivacyPage;
