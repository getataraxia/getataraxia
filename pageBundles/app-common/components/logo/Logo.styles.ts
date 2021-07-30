import { isSmallPhone } from "app-common/globalStyles/screens";
import { setFont, setRem } from "app-common/globalStyles/variables";
import styled, { css } from "styled-components";

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
