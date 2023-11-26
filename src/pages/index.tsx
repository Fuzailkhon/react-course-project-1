import ResultsSection from '@/components/results';
import SearchSection from '@/components/search';
import { useAppSelector } from '@/hooks/redux';
import Layout from '@/layout/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  return (
    <Layout details={false}>
      <SearchSection />
      <ResultsSection />
    </Layout>
  );
}
