import { ReactEpubViewer } from 'react-epub-viewer';
import { useReaderRef } from '@providers/readerRef';
import PageNavigationButton from './PageNavigationButton';

const ReaderView = () => {
  const viewerRef = useReaderRef();

  return (
    <div className="relative flex h-screen w-screen overflow-x-hidden">
      <PageNavigationButton variant="previous" />
      <ReactEpubViewer
        url="Alices Adventures in Wonderland.epub"
        ref={viewerRef}
      />
      <PageNavigationButton variant="next" />
    </div>
  );
};

export default ReaderView;
