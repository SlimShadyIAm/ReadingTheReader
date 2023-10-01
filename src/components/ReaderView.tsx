import { ReactEpubViewer } from 'react-epub-viewer';
import { useReaderRef } from '@providers/readerRef';
import { useBookInfo } from '@providers/bookInfo';
import PageNavigationButton from './PageNavigationButton';
import { useBookSettings } from '@/providers/bookSettings';
import TitleBar from './TitleBar';
import './ReaderView.css'
import { useState } from 'react';
import Draggable from 'react-draggable';

const ReaderView = () => {
  const viewerRef = useReaderRef();
  const { setBook } = useBookInfo();
  const { settings } = useBookSettings();
  const [margin, setMargin] = useState(100);

  const handleDrag = (_, { deltaX }) => {
    const snapS = 20;
    const snapM = 50;
    const snapL = 80;

    setMargin(prevMargin => {
      const newMargin = prevMargin + deltaX;

      if (newMargin < snapS) {
        return snapS;
      } else if (newMargin > snapS && newMargin < snapM) {
        return snapM;
      } else if (newMargin > snapM && newMargin < snapL) {
        return snapL;
      } else {
        return prevMargin;
      }
    });
  };

  return (
    <>
      <TitleBar />
      <div className="flex w-full overflow-x-hidden reader">
        <PageNavigationButton variant="previous" />
        <div className="w-4 h-screen bg-gray-600 absolute cursor-pointer" style={{ left: `${margin * 2 + 55}px` }} />
        <ReactEpubViewer
          url="Alices Adventures in Wonderland.epub"
          ref={viewerRef}
          onBookInfoChange={setBook}
          viewerOption={settings}
          viewerStyle={{ marginHorizontal: margin, fontSize: 24 }}
        />
        <div className="w-4 h-screen bg-gray-600 absolute cursor-pointer" style={{ right: `${margin * 2 + 55}px` }} />
        <PageNavigationButton variant="next" />
      </div>
    </>
  );
};

export default ReaderView;
