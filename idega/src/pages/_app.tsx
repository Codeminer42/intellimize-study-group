import type { AppProps } from 'next/app';
import Head from 'next/head';

import { theme } from '../ui/styles/theme';
import { GlobalStyles } from '../ui/styles/global';

import { ThemeProvider } from 'styled-components';
import { WineDataProvider } from '../contexts/WineContext';
import ModalProvider from '../contexts/ModalProvider';
import { ContainerProvider } from '../contexts/ContainerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <ThemeProvider theme={theme}>
        <ContainerProvider>
          <WineDataProvider>
            <ModalProvider>
              <GlobalStyles />
              <Component {...pageProps} />
            </ModalProvider>
          </WineDataProvider>
        </ContainerProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
