export interface ICard {
  title: string | string[];
  info?: string | string[];
}

export default function Card({ title, info }: ICard) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
}
