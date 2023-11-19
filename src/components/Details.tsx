import { useNavigate, useParams } from 'react-router-dom';
import { animeApi } from '../state/api/animeSearch';

export function Details({}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: animeInfo } = animeApi.useGetAnimeByIdQuery(id || '', {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="modal" style={{ display: 'block' }}>
      <button onClick={() => navigate('/')} className="close">
        X
      </button>
      <p className="modla-text">{JSON.stringify(animeInfo, null, 100)}</p>
    </div>
  );
}
