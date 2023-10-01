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
    <button
      onClick={variant === 'next' ? nextPage : previousPage}
      type="button"
    >
      {variant === 'next' ? 'Next' : 'Previous'}
    </button>
  );
};

export default PageNavigationButton;
