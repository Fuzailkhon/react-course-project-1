import Image from 'next/image';
import Link from 'next/link';
import detailStyles from './details.module.css';
import { useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { animeApi } from '@/store/api/animeApi';

export function Details({id}: {id:string}) {
  const router = useRouter();
  const details = useAppSelector((state) => state.anime.animeDetails);
  const [skip, setSkip] = useState(false);
  const currentSearch = useAppSelector(state => state.searchList.currentValue)
  const searchVal = useAppSelector((state) => state.searchList.currentValue);
  const { data } = animeApi.useGetAnimeByIdQuery(id, { skip });

  useEffect(() => {
    if (id) {
      setSkip(false);
    }
  }, [id]);

  return (
    <div className={detailStyles.modal} onClick={() => router.back()}>
      <button onClick={() => router.back()}>
        <i className="fa fa window-close"></i>
      </button>
      <div>
        <p>{details?.title_english}</p>
        <p>{details?.background}</p>
      </div>
    </div>
  );
}
