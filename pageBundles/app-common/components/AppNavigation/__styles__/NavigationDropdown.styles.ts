import { isPhoneOrSmaller } from "app-common/globalStyles/screens";
import { setFlex, setRem, setZindex } from "app-common/globalStyles/variables";
import styled, { css } from "styled-components";

export const Menu = styled.button<{ toggler: boolean }>`
  background: transparent;
  margin-right: -18px;
  display: none;
  border: unset;
  position: absolute;
  z-index: ${setZindex.high};
  top: 17px;
  right: 2.5rem;
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

export const StyledNavigationDropdown = styled.nav<{ toggler: boolean }>`
  display: none;
  /* The same as "isPhoneOrSmaller" */
  @media (max-width: 767px) {
    ${setFlex({ x: 'justify-content-start' })}
    background: ${(p) => p.theme.colors.silverGrey};
    position: absolute;
    left: 0;
    width: 100vw;
    flex-flow: column nowrap;
    z-index: ${setZindex.low};

    ${(p) =>
      p.toggler &&
      css`
        top: 97px;
        transform: translateY(0%);
        transition: transform 200ms ease 0s;
      `}
    ${(p) =>
      !p.toggler &&
      css`
        transform: translateY(-100%);
        transition: transform 200ms ease 0s;
      `}

    a {
      padding: 20px;
      font-weight: 600;
      font-size: ${setRem(28)};
      text-decoration: none;
      color: ${(p) => p.theme.colors.colorText};
      display: block;
      width: 100%;
    }
  }
`;
