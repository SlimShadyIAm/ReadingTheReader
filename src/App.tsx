import ReaderView from './components/ReaderView';
import ReaderRefProvider from './providers/readerRef';

const App = () => {
  return (
    <ReaderRefProvider>
      <ReaderView />
    </ReaderRefProvider>
  );
};

export default App;
