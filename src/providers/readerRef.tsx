import { ReactNode, createContext, useContext, useMemo, useRef } from 'react';
import { ViewerRef } from 'react-epub-viewer';

interface ReaderRefContextProps {
  ref: React.MutableRefObject<ViewerRef | any>;
}

const initialContext: ReaderRefContextProps = {
  ref: { current: null },
};

export const ReaderRefContext = createContext(initialContext);

interface Props {
  children: ReactNode;
}

export const useReaderRef = () => {
  const context = useContext(ReaderRefContext).ref;
  return context;
};

const ReaderRefProvider = ({ children }: Props) => {
  const ref = useRef<ViewerRef | any>(null);
  const refContextValue: ReaderRefContextProps = useMemo(
    () => ({ ref }),
    [ref]
  );
  return (
    <ReaderRefContext.Provider value={refContextValue}>
      {children}
    </ReaderRefContext.Provider>
  );
};

export default ReaderRefProvider;
