export const Card = ({ title }: { title: string }) => (
  <div className='card flex p-4'>
    <h2 className='card__title grow text-(--color-brand)'>{title}</h2>
  </div>
);
