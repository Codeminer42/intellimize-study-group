import type { AppProps } from 'next/app';

import { theme } from '../ui/styles/theme';
import { GlobalStyles } from '../ui/styles/global';

import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
