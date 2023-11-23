import Date from '@/components/date';
import Layout from '@/layout/layout';
import { IPostData, getAllPostIds, getPostData } from '@/lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';

interface IStaticProps {
  params: { id: string };
}

export default function Post({ postData }: { postData: IPostData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: IStaticProps) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
