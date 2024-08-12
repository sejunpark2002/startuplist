import { useState, useEffect } from 'react';

const useDebounce = (input, timeout) => {
  const [value, setValue] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => setValue(input), timeout);
    return () => clearTimeout(handler);
  }, [input, timeout]);

  return value;
};

export default useDebounce;
