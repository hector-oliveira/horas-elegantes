import { useEffect, useState } from 'react';

type OptionSelect = {
  id: string;
  name: string;
};

export const useStatusOptions = () => {
  const [options, setOptions] = useState<OptionSelect[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await fetch('https://beco-back.onrender.com/status/all');
      const data: OptionSelect[] = await res.json();
      setOptions(data);
    };

    fetchOptions();
  }, []);

  return options;
};
