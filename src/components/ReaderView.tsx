import { ReactEpubViewer } from 'react-epub-viewer';
import { useReaderRef } from '@providers/readerRef';
import { useBookInfo } from '@providers/bookInfo';
import PageNavigationButton from './PageNavigationButton';
import { useBookSettings } from '@/providers/bookSettings';
import TitleBar from './TitleBar';
import './ReaderView.css';
import { useEffect, useState } from 'react';
import DraggableBar from './DraggableBar';
import { BookStyle } from 'types/book';

const ReaderView = () => {
  const viewerRef = useReaderRef();
  const { setBook } = useBookInfo();
  const { settings } = useBookSettings();
  const [margin, setMargin] = useState(50);
  const MIN = 10;
  const MAX = 70;
  const INCREMENT = 30;
  const SENSITIVITY = 0.2;

  const roundToNearestIncrement = (num: number) => {
    const roundedResult =
      Math.round((num * SENSITIVITY) / INCREMENT) * INCREMENT;
    return Math.min(Math.max(margin + roundedResult, MIN), MAX);
  };
  console.log('current margin', margin);

  const changeMargin = (diff: number) => {
    console.log('diff', diff);
    console.log('should change to', roundToNearestIncrement(diff));
    setMargin(roundToNearestIncrement(diff));
  };
  const [bookStyle, setBookStyle] = useState<BookStyle>({
    fontFamily: 'Origin',
    fontSize: 24,
    lineHeight: 1.5,
    marginHorizontal: 50,
    marginVertical: 0,
  });

  const onBookStyleChange = (bookStyle_: BookStyle) => setBookStyle(bookStyle_);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onBookStyleChange({
        fontFamily: 'Origin',
        fontSize: 24,
        lineHeight: 1.5,
        marginHorizontal: margin,
        marginVertical: 0,
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [margin]);

  return (
    <div className="flex h-screen flex-col">
      <TitleBar />
      <div className="reader flex w-full flex-grow overflow-x-hidden">
        <PageNavigationButton variant="previous" />
        <DraggableBar side="left" changeMargin={changeMargin} />
        <ReactEpubViewer
          url="Alices Adventures in Wonderland.epub"
          ref={viewerRef}
          onBookInfoChange={setBook}
          viewerOption={settings}
          viewerStyle={bookStyle}
        />
        <DraggableBar side="right" changeMargin={changeMargin} />
        <PageNavigationButton variant="next" />
      </div>
    </div>
  );
};

export default ReaderView;
