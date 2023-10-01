import { ReactEpubViewer } from 'react-epub-viewer';
import { useReaderRef } from '@providers/readerRef';
import { useBookInfo } from '@providers/bookInfo';
import PageNavigationButton from './PageNavigationButton';
import { useBookSettings } from '@/providers/bookSettings';
import TitleBar from './TitleBar';
import './ReaderView.css'

const ReaderView = () => {
  const viewerRef = useReaderRef();
  const { setBook } = useBookInfo();
  const { settings } = useBookSettings();

  return (
    <>
      <TitleBar />
      <div className="flex w-full overflow-x-hidden reader">
        <PageNavigationButton variant="previous" />
        <ReactEpubViewer
          url="Alices Adventures in Wonderland.epub"
          ref={viewerRef}
          onBookInfoChange={setBook}
          viewerOption={settings}
          viewerStyle={{marginHorizontal: 100, fontSize: 24}} 
        />
        <PageNavigationButton variant="next" />
      </div>
    </>
  );
};

export default ReaderView;
