import Image from 'next/image';
import Link from 'next/link';
import cardStyles from './card.module.css';

export interface ICard {
  title: string | string[];
  info?: string | string[];
  detailId: string;
  imgSrc?: string;
}

export default function Card({ title, info, detailId, imgSrc }: ICard) {
  return (
    <Link href={`details/${detailId}`}>
      <div className={cardStyles.card}>
        <Image src={imgSrc || ''} fill alt="not found" />
        <div className={cardStyles.card__content}>
          <p className={cardStyles.card__title}>{title}</p>
          <p className={cardStyles.card__description}>{info}</p>
        </div>
      </div>
    </Link>
  );
}
