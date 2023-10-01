import BookInfoProvider from '@providers/bookInfo';
import BookSettingsProvider from '@providers/bookSettings';
import ReaderRefProvider from '@providers/readerRef';
import ReaderView from './components/ReaderView';

const App = () => {
  return (
    <ReaderRefProvider>
      <BookInfoProvider>
        <BookSettingsProvider>
          <ReaderView />
        </BookSettingsProvider>
      </BookInfoProvider>
    </ReaderRefProvider>
  );
};

export default App;
