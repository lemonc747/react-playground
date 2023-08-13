import React from 'react';
import SortableList from './sortableList';

const DndKit = () => {
  // const test = () => {
  //   const list1 = [1, '2', 'a', 'b', 'b', '55']
  //   const list2 = [1, '2', 'aa', 'b', 'bcc', '55ddd']
  //   const result = [];
  //   const list3 = list1.concat(list2);
  //   list3.forEach(item => {
  //     if (!(list1.findIndex(data => data === item) !== -1 && list2.findIndex(data => data === item) !== -1)) {
  //       result.push(item);
  //     }
  //   });
  //   console.log('results', result);
  // }

  return (
    <div>
      <SortableList />
    </div>
  );
};

export default DndKit;
