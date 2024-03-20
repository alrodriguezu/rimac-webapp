import { useEffect, useState } from 'react';
import Loading from 'react-loading';

let mainLayoutHeight: number = 0;

const FallbackView = () => {
  const [height, setHeight] = useState(mainLayoutHeight);
  const [show, setshow] = useState(false);

  useEffect(() => {
    if (!mainLayoutHeight) {
      const height = document.getElementById('main-layout')?.offsetHeight - 62 || 0;
      mainLayoutHeight = height;
      setHeight(height);
    }

    // prevent flashing of fallback spinner when the component has been already mounted
    const timeout = setTimeout(() => {
      setshow(true);
    }, 5);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (show) {
    return (
      <div style={{ height }}>
        <Loading color="#ffff" />
      </div>
    );
  }
  return null;
};

export default FallbackView;
