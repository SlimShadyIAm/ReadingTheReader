import { useReaderRef } from '@providers/readerRef';

interface Props {
  variant: 'next' | 'previous';
}

const PageNavigationButton = ({ variant }: Props) => {
  const viewerRef = useReaderRef();

  const nextPage = () => {
    if (!viewerRef.current) return;
    viewerRef.current.nextPage();
  };

  const previousPage = () => {
    if (!viewerRef.current) return;
    viewerRef.current.prevPage();
  };

  return (
    <div
      onClick={variant === 'next' ? nextPage : previousPage}
      className='bg-gray-500 flex-grow flex items-center justify-center cursor-pointer'
    >
      {variant === 'next' ? 'N' : 'P'}
    </div>
  );
};

export default PageNavigationButton;
