import { Details } from '@/components/details/Details';
import ResultsSection from '@/components/results';
import SearchSection from '@/components/search';
import Layout from '@/layout/layout';
import { animeApi, getRunningQueriesThunk } from '@/store/api/animeApi';
import { wrapper } from '@/store/store';

export default function DetailsPage({detail_id}: {detail_id: string}) {
  return (
    <Layout>
      <SearchSection />
      <ResultsSection />
      <Details id={detail_id} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id;
    if (typeof id === 'string') {
      store.dispatch(animeApi.endpoints.getAnimeById.initiate(id));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        detail_id: id
      },
    };
  }
);
