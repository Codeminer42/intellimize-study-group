import type { AppProps } from 'next/app';

import { theme } from '../ui/styles/theme';
import { GlobalStyles } from '../ui/styles/global';

import { ThemeProvider } from 'styled-components';
import ModalProvider from '../contexts/ModalProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
