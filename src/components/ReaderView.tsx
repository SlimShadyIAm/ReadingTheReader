import { useContext } from 'react';
import { ReactEpubViewer } from 'react-epub-viewer';
import { ReaderRefContext } from '@/App';
import PageNavigationButton from './PageNavigationButton';

const ReaderView = () => {
  const viewerRef = useContext(ReaderRefContext).ref;

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
