import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { useEffect, useState, ReactNode } from 'react';
import type { ReactElement } from 'react';
// import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) : ReactElement {
  // const router = useRouter();

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
