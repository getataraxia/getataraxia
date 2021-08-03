import { setFlex, setRem } from 'app-common/globalStyles/variables';
import React from 'react';
import Link from 'next/link'
import styled, { css } from 'styled-components';
import Logo from '../Logo/Logo';
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
    font-weight: bold;
    font-size: ${setRem(34)};
  }

  a {
    text-decoration: none;
    font-size: ${setRem(28)};
    font-weight: 500;
    margin: 0.5rem 0;
  }

  ${isPhoneOrSmaller(css`
    padding-left: 0;
  `)}
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="app-logo">
          <Logo />
        </div>

        <NavContainer>
          <NavigationColum>
            <span className="Nav-head">Mission</span>
            <Link href="#">
              <a>About</a>
            </Link>
            <Link href="#">
              <a>Blog</a>
            </Link>
          </NavigationColum>
          <NavigationColum>
            <span className="Nav-head">Products</span>
            <Link href="#">
              <a>Stoic Bible</a>
            </Link>
          </NavigationColum>
          <NavigationColum>
            <span className="Nav-head">Company</span>
            <Link href="#">
              <a>Careers</a>
            </Link>
            <Link href="#">
              <a>Twitter</a>
            </Link>
          </NavigationColum>
        </NavContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
