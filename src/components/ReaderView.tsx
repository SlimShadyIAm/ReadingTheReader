import { ReactEpubViewer } from 'react-epub-viewer';
import { useReaderRef } from '@providers/readerRef';
import { useBookInfo } from '@providers/bookInfo';
import PageNavigationButton from './PageNavigationButton';
import { useBookSettings } from '@/providers/bookSettings';

const ReaderView = () => {
  const viewerRef = useReaderRef();
  const { setBook } = useBookInfo();
  const { settings } = useBookSettings();

  return (
    <div className="relative flex h-screen w-screen overflow-x-hidden">
      <PageNavigationButton variant="previous" />
      <ReactEpubViewer
        url="Alices Adventures in Wonderland.epub"
        ref={viewerRef}
        onBookInfoChange={setBook}
        viewerOption={settings}
      />
      <PageNavigationButton variant="next" />
    </div>
  );
};

export default ReaderView;
