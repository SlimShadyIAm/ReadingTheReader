import { useBookInfo } from '@/providers/bookInfo';

const TitleBar = () => {
  const { book } = useBookInfo();
  if (!book) return null;

  return (
    <div className="flex w-full items-center justify-center py-3">
      {book.title} - {book.author}
    </div>
  );
};

export default TitleBar;
