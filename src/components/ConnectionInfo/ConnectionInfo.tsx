import { useEffect, useState } from 'react';
import { Navigator } from '../../types';

function ConnectionInfo() {
  const [isOnline, setOnline] = useState(true);
  const [effectiveType, setEffectiveType] = useState('');

  const handleOnlineListener = () => setOnline(true);
  const handleOfflineListener = () => setOnline(false);

  useEffect(() => {
    window.addEventListener('online', handleOnlineListener);
    window.addEventListener('offline', handleOfflineListener);

    checkDownLink();

    return () => {
      window.removeEventListener('online', handleOnlineListener);
      window.removeEventListener('offline', handleOfflineListener);
    };
  }, []);

  function checkDownLink() {
    if ((navigator as Navigator).connection) {
      setEffectiveType((navigator as Navigator).connection?.effectiveType || '');
      /* @ts-ignore */
      navigator.connection.onchange = () => setEffectiveType((navigator as Navigator).connection?.effectiveType || '');
    } else {
      setEffectiveType('Not available in this browser.');
    }
  }

  return (
    <span className="flex justify-center items-center">
      <span className="font-bold mr-2">Online: </span> <span>{isOnline.toString()} </span>
      <span className="font-bold ml-5 mr-2">EffectiveType: </span> {effectiveType}
    </span>
  );
}
export default ConnectionInfo;
