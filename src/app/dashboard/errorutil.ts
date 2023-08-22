'use client';
// import { UnknownException } from 'common/utils/commonExceptions';
import { useCallback, useState } from 'react';

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const useErrorFunc = () => {
  const [error, setError] = useState('');

  const errorFunc = useCallback(async () => {
    console.log(`errorFunc called`);
    await sleep(5000);
    if (1 == 1) {
      // throw new Error('dummy error test');
      setError('dummy error test');
    }
  }, []);

  return {
    error,
    errorFunc,
  };
};
