import { ReactEpubViewer } from 'react-epub-viewer';
import { useReaderRef } from '@providers/readerRef';
import { useBookInfo } from '@providers/bookInfo';
import PageNavigationButton from './PageNavigationButton';

const ReaderView = () => {
  const viewerRef = useReaderRef();
  const book = useBookInfo();

  return (
    <div className="relative flex h-screen w-screen overflow-x-hidden">
      <PageNavigationButton variant="previous" />
      <ReactEpubViewer
        url="Alices Adventures in Wonderland.epub"
        ref={viewerRef}
        onBookInfoChange={book.setBook}
      />
      <PageNavigationButton variant="next" />
    </div>
  );
};

export default ReaderView;
