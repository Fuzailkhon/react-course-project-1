import Layout from '@/layout/layout';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            'Script Has Been Loaded successfully, Window.FB populated'
          )
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
