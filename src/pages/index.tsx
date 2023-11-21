import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { utilStyles } from '@/styles/utils.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '@/layout/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am starting software engineer </p>
        <p></p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </section>
    </Layout>
  );
}
