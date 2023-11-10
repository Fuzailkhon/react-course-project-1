import { useState } from 'react';

export const useLocalStorage = (key: string, initialVal: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : JSON.parse(initialVal);
    } catch (error) {
      return initialVal;
    }
  });

  const setValue = (value:string) => {
    try {
      setStoredValue(JSON.parse(value));
      localStorage.setItem(key, value);
    } catch (error) {
        console.log(error)
    }
  };

  return [storedValue, setValue]
};

export default useLocalStorage