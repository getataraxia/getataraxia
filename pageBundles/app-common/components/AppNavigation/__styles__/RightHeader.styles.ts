import { isPhoneOrSmaller } from 'app-common/globalStyles/screens';
import { setFlex, setRem } from 'app-common/globalStyles/variables';
import styled from 'styled-components';

export const StyledRightNav = styled.nav`
  ${setFlex({ x: 'justify-content-start' })}
  a {
    padding: 20px;
    font-weight: 600;
    font-size: ${setRem(28)};
    text-decoration: none;
    color: ${(p) => p.theme.colors.colorText};
  }

  ${isPhoneOrSmaller`display: none;`}
`;
