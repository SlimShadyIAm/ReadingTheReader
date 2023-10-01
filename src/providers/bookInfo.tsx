import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import Book from '@/types/book';

interface BookInfoContextProps {
  book: Book | null;
  setBook: (book: Book) => void;
}

const initialContext: BookInfoContextProps = {
  book: null,
  setBook: () => {},
};

export const BookInfoContext = createContext(initialContext);

interface Props {
  children: ReactNode;
}

export const useBookInfo = () => {
  const context = useContext(BookInfoContext);
  return context;
};

const BookInfoProvider = ({ children }: Props) => {
  const [book, setBook] = useState<Book | null>(null);
  const bookContextValue: BookInfoContextProps = useMemo(
    () => ({
      book,
      setBook,
    }),
    [book, setBook]
  );

  return (
    <BookInfoContext.Provider value={bookContextValue}>
      {children}
    </BookInfoContext.Provider>
  );
};

export default BookInfoProvider;
