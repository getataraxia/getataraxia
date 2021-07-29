import styled, { css } from "styled-components";
import { setFlex, setFont, setRem } from "app-common/globalStyles/variables";
import { isPhoneOrSmaller, isSmallPhone } from "app-common/globalStyles/screens";

// <<<<------------------- HEADER ------------------->>>>
export const HeaderWrapper = styled.header`
  width: full-width;
  padding: 0 24px;
`;

export const StyledHeader = styled.div`
  margin: 0 auto;
  padding: 16px 0;
  max-width: 950px;
  ${setFlex({ x: 'space-between', y: 'center' })}
`;


// <<<<--------------------- LEFT HEADER --------------->>>>
export const StyledLogo = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: ${setFont.main};
  font-weight: 700;
  font-size: ${setRem(35)};
  color: ${(p) => p.theme.colors.colorPrimary1};

  ${isSmallPhone(css`
    font-size: ${setRem(32)};
  `)}
`;


// <<<<----------------------- RIGHT HEADER ---------------------->>>>>
export const StyledRightNav = styled.ul`
  list-style: none;
  ${setFlex({ x: 'justify-content-start' })}

  li {
    padding: 20px;
    font-weight: 600;
    font-size: ${setRem(28)};

    a {
      text-decoration: none;
      color: ${(p) => p.theme.colors.colorText};
      &:hover {
      }
    }
  }

  ${isPhoneOrSmaller`
      display: none;
  `}
`;

export const Menu = styled.button<{ toggler: boolean }>`
  background: transparent;
  margin-right: -18px;
  display: none;
  border: unset;
  .material-icons {
    font-size: 20px;
    color: ${(p) => p.theme.colors.colorPrimary1};
  }
  ${(p) =>
    p.toggler &&
    css`
      background: ${(p) => p.theme.colors.silverGrey};
      .material-icons {
        color: ${(p) => p.theme.colors.colorTextWhite};
      }
    `}
  ${isPhoneOrSmaller(css`
    display: block;
    padding: 20px;
  `)}
`;
