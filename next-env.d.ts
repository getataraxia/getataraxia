// / <reference types="next" />
// / <reference types="next/types/global" />
import "next";
import "styled-components";

declare module "next" {
  export interface NextPageContext {
    reduxStore: any;
  }
}

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

// and extend it
declare module "styled-components" {
  interface DefaultTheme {
    isDarkTheme?: boolean;
    colors: {
      colorPrimary1: string;
      colorSuccess: string;
      mainRed: string;
      lightRed: string;
      colorTitle: string;
      colorText: string;
      colorTextWhite: string;
      colorTextDisabled: string;
      silverGrey: string;
    };
  }
}
