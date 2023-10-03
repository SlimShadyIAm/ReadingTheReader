import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { BookOption } from '@/types/book';

interface BookSettingsContextProps {
  settings: BookOption | null;
  setSettings: (settings: BookOption) => void;
}

const initialContext: BookSettingsContextProps = {
  settings: null,
  setSettings: () => {},
};

export const BookSettingsContext = createContext(initialContext);

interface Props {
  children: ReactNode;
}

export const useBookSettings = () => {
  const context = useContext(BookSettingsContext);
  return context;
};

const BookSettingsProvider = ({ children }: Props) => {
  // TODO: extend this with Style settings
  const [settings, setSettings] = useState<BookOption>({
    spread: 'none',
    flow: 'paginated',
    resizeOnOrientationChange: true,
  });
  const bookSettingsContextValue: BookSettingsContextProps = useMemo(
    () => ({
      settings,
      setSettings,
    }),
    [settings, setSettings]
  );

  return (
    <BookSettingsContext.Provider value={bookSettingsContextValue}>
      {children}
    </BookSettingsContext.Provider>
  );
};

export default BookSettingsProvider;
