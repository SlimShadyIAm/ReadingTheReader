import { ViewerRef } from 'react-epub-viewer';
import { createContext, useMemo, useRef } from 'react';
import ReaderView from './components/ReaderView';

interface ReaderRefContextProps {
  ref: React.MutableRefObject<ViewerRef | any>;
}

const initialContext: ReaderRefContextProps = {
  ref: { current: null },
};

export const ReaderRefContext = createContext(initialContext);

const App = () => {
  const ref = useRef<ViewerRef | any>(null);
  const refContextValue: ReaderRefContextProps = useMemo(
    () => ({ ref }),
    [ref]
  );

  return (
    <ReaderRefContext.Provider value={refContextValue}>
      <ReaderView />
    </ReaderRefContext.Provider>
  );
};

export default App;
