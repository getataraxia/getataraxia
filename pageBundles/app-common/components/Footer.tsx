import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import { isPhoneOrSmaller } from 'app-common/globalStyles/screens';

const FooterContainer = styled.div`
  max-width: 950px;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  .app-logo {
    margin-right: 15rem;
  }

  ${isPhoneOrSmaller(css`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    flex-direction: column;

    .app-logo {
      margin-bottom: 2rem;
    }
  `)}
`;

const NavContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  flex: 1;
`;

const NavigationColum = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  color: ${(p) => p.theme.colors.colorPrimary1};
  flex: 1;

  .Nav-head {
    font-weight: 500;
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    margin: 0.5rem 0;
    color: ${(p) => p.theme.colors.colorPrimary1};
  }

  ${isPhoneOrSmaller(css`
    padding-left: 0;
  `)}
`;

const Footer = () => {
  return (
    <>
      <FooterContainer id="mission">
        <div className="app-logo">
          <Logo />
        </div>

        <NavContainer>
          <NavigationColum>
            <span className="Nav-head">Mission</span>
            <Link href="#">
              <a>About</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </NavigationColum>
          <NavigationColum>
            <span className="Nav-head">Products</span>
            <a href="https://stoicbible.com" target="_blank">Stoic Bible</a>
          </NavigationColum>
          <NavigationColum>
            <span className="Nav-head">Company</span>
            <Link href="#">
              <a>Careers</a>
            </Link>
            <a href="https://twitter.com/getataraxia" target="_blank">Twitter</a>
          </NavigationColum>
        </NavContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
