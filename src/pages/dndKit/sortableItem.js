import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Item4Sortable } from './item';

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item4Sortable id={props.id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* {value} */}
    </Item4Sortable>
  );
}
