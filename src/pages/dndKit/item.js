import React, { forwardRef } from 'react';

export const Item4DragOverlay = forwardRef(({ id, ...props }, ref) => {
  console.log('Item4DragOverlay-props', id, props, ref);
  return (
    <div {...props} ref={ref}>
      {id}
    </div>
  );
});

export const Item4Sortable = forwardRef(({ id, ...props }, ref) => {
  console.log('Item4Sortable-props', id, props, ref);
  return (
    <div {...props} ref={ref}>
      {id}
    </div>
  );
});
