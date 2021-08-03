import { css, CSSProp } from 'styled-components';

// Device screens
export const isVerySmallPhone = (...args: CSSProp[]): CSSProp => css`
  @media (max-width: 375px) {
    ${args};
  }
`;

export const isSmallPhone = (...args: CSSProp[]): CSSProp => css`
  @media (max-width: 575px) {
    ${args};
  }
`;

export const isPhoneOrSmaller = (...args: CSSProp[]): CSSProp => css`
  @media (max-width: 767px) {
    ${args};
  }
`;

export const isTabletOrSmaller = (...args: CSSProp[]): CSSProp => css`
  @media (max-width: 1023px) {
    ${args};
  }
`;

export const isTablet = (...args: CSSProp[]): CSSProp => css`
  @media (min-width: 768px) and (max-width: 1023px) {
    ${args};
  }
`;

export const isTabletOrLarger = (...args: CSSProp[]): CSSProp => css`
  @media (min-width: 768px) {
    ${args};
  }
`;

export const isLargeTablet = (...args: CSSProp[]) => css`
  @media (min-width: 1024px) and (max-width: 1199px) {
    ${args};
  }
`;

export const isDesktopOrLarger = (...args: CSSProp[]): CSSProp => css`
  @media (min-width: 1200px) {
    ${args};
  }
`;
