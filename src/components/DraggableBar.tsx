import React, { useState, useCallback } from 'react';

interface Props {
  side: 'left' | 'right';
  changeMargin: (diff: number) => void;
}
const DraggableBar = ({ side, changeMargin }: Props) => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialClientX, setInitialClientX] = useState(0);

  // const onDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
  //   setIsResizing(true);
  //   setInitialClientX(e.clientX);
  // }, []);
  // const onDragEnd = useCallback(() => {
  //   setIsResizing(false);
  // }, []);

  // const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   if (!isResizing) return;
  //   if (side === 'left') {
  //     const diff = e.clientX - initialClientX;
  //     changeMargin(diff);
  //   } else if (side === 'right') {
  //     const diff = e.clientX - initialClientX;
  //     changeMargin(-1 * diff);
  //   }
  // };

  const onDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setInitialClientX(e.clientX);
  }, []);

  const onDragEnd = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!isResizing) return;

      const diff = e.clientX - initialClientX;
      if (side === 'right') {
        changeMargin(-1 * diff);
      } else if (side === 'left') {
        changeMargin(diff);
      }

      setIsResizing(false);
      setInitialClientX(0);
    },
    [changeMargin, initialClientX, isResizing]
  );

  return (
    <div
      className="w-4 bg-gray-600"
      // onDrag={handleDrag}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default DraggableBar;
