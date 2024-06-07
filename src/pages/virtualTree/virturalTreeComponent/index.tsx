// import List from 'rc-virtual-list';

// const TestVTreeComp = () => {
//   console.log(1);
//   return (
//     <List data={data} height={200} itemHeight={30} itemKey='id'>
//       {index => <div>{index}</div>}
//     </List>
//   );
// };

// export default TestVTreeComp;

// const data: number[] = [];

// for (let i = 0; i < 1000; i++) {
//   data.push(i);
// }

import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

const MyPdfViewer = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: 'test.pdf',
    page,
    canvasRef,
  });

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {pdfDocument && Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className='pager'>
            <li className='previous'>
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className='next'>
              <button disabled={page === pdfDocument.numPages} onClick={() => setPage(page + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MyPdfViewer;
