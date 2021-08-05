import { isPhoneOrSmaller } from 'app-common/globalStyles/screens';
import { setFlex } from 'app-common/globalStyles/variables';
import styled from 'styled-components';

export const StyledRightNav = styled.nav`
  ${setFlex({ x: 'justify-content-start' })}
  a {
    padding: 20px;
    font-weight: 500;
    font-size: 2rem;
    text-decoration: none;
    color: ${(p) => p.theme.colors.colorText};
  }

  ${isPhoneOrSmaller`display: none;`}
`;
