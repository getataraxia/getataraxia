import { setFlex, setFont, setZindex } from "app-common/globalStyles/variables";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: full-width;
  position: relative;
  height: 70px;
  display: flex;
`;

export const StyledHeader = styled.div`
  z-index: ${setZindex.high};
  background: ${(p) => p.theme.colors.colorTextWhite};
  max-width: 950px;
  padding: 0 24px;
  width: 100%;
  margin: 0 auto;
  ${setFlex({ x: 'space-between', y: 'center' })}
`;
