import React, { useCallback, useState } from 'react';
import { SearchField } from '../components';

const Location = () => {
  const [value, setValue] = useState('');
  const handleChange = useCallback(() => setValue(), []);

  return (
    <div>
      <SearchField value={value} onChange={handleChange} />
    </div>
  );
};

export default Location;
