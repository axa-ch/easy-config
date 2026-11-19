export const Card = ({ title }: { title: string }) => (
  <div className='flex p-4 flex'>
    <h2 className='px-2 py-2'>{title}</h2>
    <p className='p-4 flex'>{title}</p>
    <span className='flex-grow' />
    <span className='bg-[var(--color-brand)]' />
  </div>
);
