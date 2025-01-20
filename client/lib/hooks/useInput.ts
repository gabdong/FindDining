import { ChangeEvent, useState } from 'react';

export default function useInput<T>(initialValue?: T) {
  const [value, setValue] = useState(initialValue);
  const handler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value as T);
  };

  return [value, handler, setValue] as const;
}
