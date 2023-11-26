import { IAnime, IAnimeList } from '@/types/anime';
import Card, { ICard } from './Card/Card';
import cardListStyles from './card-list.module.css'

interface ICardListProps{
  resultsList: IAnime[] | []
}

export function CardList({ resultsList }: ICardListProps) {
  return (
    <div className={cardListStyles.cardList}>
      {resultsList &&
        resultsList.map((result) => (
          <Card
            key={result.mal_id}
            title={result.title}
            info={result.synopsis}
            detailId={String(result.mal_id)}
            imgSrc={result.images.jpg.image_url}
          />
        ))}
    </div>
  );
}
