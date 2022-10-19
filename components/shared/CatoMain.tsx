/* eslint @next/next/no-img-element: 0 */
import { PropsWithChildren, ReactElement } from 'react';

type CatoMainProps = {
  className?: string,
  style?: object,
};

export default function CatoMain({
  children,
  className,
  style = {},
}: PropsWithChildren<CatoMainProps>) : ReactElement {
  return (
    <main className={className} style={style}>
      {children}
    </main>
  );
}
