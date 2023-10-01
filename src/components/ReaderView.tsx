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
  const [margin, setMargin] = useState(120);

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
    <div className='flex flex-col h-screen'>
      <TitleBar />
      <div className="flex w-full overflow-x-hidden reader flex-grow">
        <PageNavigationButton variant="previous" />
        <div className="w-4 bg-gray-600  cursor-pointer" />
        <ReactEpubViewer
          url="Alices Adventures in Wonderland.epub"
          ref={viewerRef}
          onBookInfoChange={setBook}
          viewerOption={settings}
          viewerStyle={{ marginHorizontal: margin, fontSize: 24 }}
        />
        <div className="w-4 bg-gray-600  cursor-pointer" />
        <PageNavigationButton variant="next" />
      </div>
    </div>
  );
};

export default ReaderView;
