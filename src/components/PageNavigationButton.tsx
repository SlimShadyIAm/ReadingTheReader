import { useContext } from 'react';
import { ReaderRefContext } from '@/App';

interface Props {
  variant: 'next' | 'previous';
}

const PageNavigationButton = ({ variant }: Props) => {
  const viewerRef = useContext(ReaderRefContext).ref;

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
