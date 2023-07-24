import React, { useState, useMemo } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';
import { Item } from './Item';

export interface ColumnProps<T> {
  title: React.ReactNode;
  key: keyof T;
  width: string;
  render: (record: T, index: number) => React.ReactNode;
}

/**
 * 可排序的表格，
 * @param props
 * styles：需要完全重新的样式
 * rowKey：数据的唯一标识
 * columns：渲染配置
 * data：数据列表
 * onSort：排序后的更新回调
 * @returns
 */
const SortableTable = <T,>(props: {
  styles: any;
  rowKey: string | ((record: T, index: number) => string);
  columns: ColumnProps<T>[];
  data: T[];
  onSort: (data: T[]) => void;
}) => {
  const { rowKey, columns, data } = props;
  const [activeId, setActiveId] = useState(null);
  // const [items, setItems] = useState(['1', '2', '3']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const keyList = useMemo(
    () => data.map((item, index) => (typeof rowKey === 'function' ? rowKey(item, index) : item[rowKey])),
    [data, rowKey]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
      <SortableContext items={keyList} strategy={verticalListSortingStrategy}>
        {items.map(id => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
      <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
    </DndContext>
  );

  function handleDragStart(event) {
    const { active } = event;

    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }
};
