import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import CatoHeader from '../components/shared/CatoHeader';
import CatoFooter from '../components/shared/CatoFooter';

// Do some typescript so we can override the default _app layout if needed
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) : ReactNode {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <CatoHeader />
      <main>
        <Component {...pageProps} />
      </main>
      <CatoFooter />
    </>
  );
}

export default MyApp;
