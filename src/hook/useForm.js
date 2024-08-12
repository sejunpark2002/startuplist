import { useState } from 'react';

const useForm = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onFormChange = () => (e) => {
    setValue((currentValue) => {
      return {
        ...currentValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  return [value, onFormChange];
};

export default useForm;
