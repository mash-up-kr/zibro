import React, { useCallback, useState } from 'react';
import { SearchField } from '../components';

const Location = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(event => setValue(event.target.value), []);
  const handleClear = useCallback(() => setValue(''), []);

  return (
    <div>
      <SearchField value={value} onChange={handleChange} onClear={handleClear} />
    </div>
  );
};

export default Location;
