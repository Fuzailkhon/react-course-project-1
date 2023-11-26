import { ReactNode } from 'react';
import Head from 'next/head';
import { Details } from '@/components/details/Details';

export const siteTitle = 'Next.js Jikan API Anime Search List';
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Head>
        <link rel="ico" href="/favicon.ico" />
        <meta name="description" content="React RSS Course Next.js Project" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      {children}
    </>
  );
}
