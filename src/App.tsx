import ReaderView from './components/ReaderView';
import BookInfoProvider from './providers/bookInfo';
import ReaderRefProvider from './providers/readerRef';

const App = () => {
  return (
    <ReaderRefProvider>
      <BookInfoProvider>
        <ReaderView />
      </BookInfoProvider>
    </ReaderRefProvider>
  );
};

export default App;
