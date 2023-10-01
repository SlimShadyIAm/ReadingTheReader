import { useRef } from 'react';
import { ReactEpubViewer } from 'react-epub-viewer';

const ReaderView = () => {
  const ref = useRef(null);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ReactEpubViewer url="Alices Adventures in Wonderland.epub" ref={ref} />
    </div>
  );
};

export default ReaderView;
