import 'styled-components';
import * as React from 'react';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorPrimary1: string;
      colorSuccess: string;
      mainRed: string;
      lightRed: string;
      colorTitle: string;
      colorText: string;
      colorTextWhite: string;
      silverGrey: string;
      colorTextDisabled: string;
      colorPrimary4?: string;
      [key: string]: string | undefined;
    };
  }
}

declare module 'styled-components' {
  export interface ThemeProviderComponent<Theme, Props = { theme: Theme }> {
    (props: React.PropsWithChildren<Props>): React.ReactElement<Props> | null;
  }
}

