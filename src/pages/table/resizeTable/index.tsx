import { useRef, useState } from 'react';
import './index.css';

// resize状态：不可用，可用，调整中
type TResizeStatus = 'disabled' | 'enable' | 'move';

const ResizeTable = () => {
  // 是否可以进入resize状态
  const [resizeStatus, setResizeStatus] = useState<TResizeStatus>('disabled');
  // 记录移动开始时的表头和初始移动距离
  const [resizeStartLeft, setResizeStartLeft] = useState(0);
  // const tableRef = useRef<HTMLDivElement>(null);
  const refContianer = useRef<HTMLDivElement>(null);
  const refResize = useRef<HTMLDivElement>(null);

  // 表头move事件：判断是否可以启动resize
  const handleHeadMouseMove: React.MouseEventHandler<HTMLElement> = e => {
    const target = e.target as any;
    // 表头边缘可以resize
    if (e.nativeEvent.offsetX > target.offsetWidth - 5 || resizeStatus === 'move') {
      if (resizeStatus === 'disabled') {
        setResizeStatus('enable');
      }
      target.style.cursor = 'col-resize';
    } else {
      setResizeStatus('disabled');
      target.style.cursor = 'default';
    }
  };

  const handleTableMOuseDown: React.MouseEventHandler<HTMLElement> = e => {
    const target = e.target as any;
    // 更新状态
    if (resizeStatus !== 'enable') {
      return;
    }
    setResizeStatus('move');
    if (refContianer.current) {
      refContianer.current.style.cursor = 'col-resize';
    }
    // 展示虚线
    if (refResize.current) {
      const left = target.offsetLeft + e.nativeEvent.offsetX;
      refResize.current.style.display = 'initial';
      refResize.current.style.left = `${left}px`;
      setResizeStartLeft(left);
    }
  };

  const handleTableMOuseUp: React.MouseEventHandler<HTMLElement> = e => {
    const target = e.target as any;
    // 更新状态
    if (resizeStatus !== 'move') {
      return;
    }
    console.log('handleTableMOuseUp', refResize.current);
    setResizeStatus('disabled');
    if (refContianer.current) {
      refContianer.current.style.cursor = 'default';
    }
    if (refResize.current) {
      refResize.current.style.display = 'none';
      const left = target.offsetLeft + e.nativeEvent.offsetX;
      console.log('移动的距离', left - resizeStartLeft);
    }
  };

  const handleTableMouseMove: React.MouseEventHandler<HTMLElement> = e => {
    const target = e.target as any;
    // console.log(
    //   'e.target',
    //   e,
    //   e.nativeEvent.offsetX, // 鼠标偏离当前元素左侧距离
    //   target.offsetWidth, // 当前元素宽度
    //   target.offsetLeft, // 偏离reletive父级的距离
    //   e.pageX, // 距离页面左侧的距离，如果有横向滚动条，包括滚动不见的宽度
    //   e.clientX // 距离窗口左侧的距离，如果有横向滚动条，不包括滚动不见的宽度
    //   // target.offsetHeight,
    //   // target.offsetTop,
    //   // target.pageY,
    //   // e.clientY
    // );
    // 展示虚线
    if (refResize.current && resizeStatus === 'move') {
      const left = target.offsetLeft + e.nativeEvent.offsetX;
      refResize.current.style.display = 'initial';
      refResize.current.style.left = `${left}px`;
    }
  };

  const handleTableMouseLeave: React.MouseEventHandler<HTMLElement> = e => {
    console.log('mouseleave');
    setResizeStatus('disabled');
    if (refContianer.current) {
      refContianer.current.style.cursor = 'default';
    }
    if (refResize.current) {
      refResize.current.style.display = 'none';
    }
  };

  return (
    <div className={'container'} ref={refContianer} onMouseLeave={handleTableMouseLeave}>
      <div className={'resizeLine'} ref={refResize} />
      <table onMouseDown={handleTableMOuseDown} onMouseMove={handleTableMouseMove} onMouseUp={handleTableMOuseUp}>
        <thead>
          <tr>
            <th style={{ width: '111px' }} onMouseMove={handleHeadMouseMove}>
              表头1
            </th>
            <th style={{ width: '222px' }} onMouseMove={handleHeadMouseMove}>
              表头2
            </th>
            <th style={{ width: '100px' }} onMouseMove={handleHeadMouseMove}>
              表头3
            </th>
            <th style={{ width: '200px' }} onMouseMove={handleHeadMouseMove}>
              表头4
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResizeTable;
