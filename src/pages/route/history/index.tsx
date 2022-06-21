/**
 * history基础api
 */
import { useEffect } from 'react';

const HistoryComp = () => {
  useEffect(() => {
    console.log('HistoryComp.useEffect');
    // window.addEventListener('')
    window.onpopstate = async e => {
      console.log('onpopstate', e.state);
      const time = e.state?.time || 'none';
      if (await checkPermission()) {
        // error: mac下notification桌面通知不支持http协议
        const notification = new Notification('onpopstate事件', {
          tag: 'onpopstate',
          body: `历史记录创建时间：${time}`,
        });
      }
    };

    // return () => {
    //   window.onpopstate = null;
    // };
  }, []);

  const checkPermission = async () => {
    if (!('Notification' in window)) {
      return false;
    }
    if (Notification.permission === 'granted') {
      return true;
    } else if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        return true;
      }
    }
    return false;
  };

  const onPushState = () => {
    const newDate = new Date();
    // const route = newDate.getFullYear() + '' + newDate.getMonth()+''+newDate.getDay()+''+newDate.getHours();
    const time = encodeURI(newDate.toLocaleString());
    window.history.pushState({ time }, '', `/route/history`);
  };

  const onReplaceState = () => {
    const newDate = new Date();
    const time = encodeURI(newDate.toLocaleString());
    window.history.replaceState({ time }, '', `/route/history`);
  };

  return (
    <div>
      <div onClick={onPushState}>pushState</div>
      <div onClick={onReplaceState}>replaceState</div>
    </div>
  );
};

export default HistoryComp;
