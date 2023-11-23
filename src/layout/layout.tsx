import { ReactNode } from 'react';
import styles from './layout.module.css';
import utilStyles from '@/styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Fuzaylkhon';
export const siteTitle = 'Next.js Sample Website';
interface ILayoutProps {
  children: ReactNode;
  home: boolean;
}

export default function Layout({ children, home }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="ico" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build personal blog with Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt="Profile Image"
            />
            <h1 className={utilStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                alt="Profile Image"
                height={108}
                width={108}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to Home</Link>
        </div>
      )}
    </div>
  );
}
