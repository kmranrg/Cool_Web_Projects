import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Banner from './components/Banner';
import LoadingText from './components/LoadingText';

function App() {
  const [load, setLoad] = useState(0);
  const loadRef = useRef(load);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(prevLoad => {
        const newLoad = prevLoad + 1;
        loadRef.current = newLoad;

        if (newLoad > 99) {
          clearInterval(interval); // Clear the interval when the limit is reached
        }

        return newLoad;
      });
    }, 20);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <Banner load={load} />
      <LoadingText load={load} />
    </>
  );
}

export default App;
