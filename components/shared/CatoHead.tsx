import { ReactElement } from 'react';
import Head from 'next/head';

type CatoHeadProps = {
  title: string,
  sfw?: boolean,
};

/* 
  next/head should only be used for any <head> code that is local to pages.
  (I.E. title, or https://nextjs.org/docs/messages/no-document-viewport-meta
  Global stuff can go into the <Head /> component used in pages/_document.tsx
*/

export default function CatoHead({ title }: CatoHeadProps) : ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
