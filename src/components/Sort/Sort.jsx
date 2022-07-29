import React, { useState } from 'react';

const Sort = () => {
  const [optionSort, setOptionSort] = useState('Publication date (descending)');


  // console.log(optionSort);
  return (
    <div>
      <select 
        value={optionSort} 
        onChange={(e) => setOptionSort(e.target.value)}
      >
        <option value="Publication date (descending)">
          Publication date (descending)
        </option>
        <option value="Price (ascending)">
          Price (ascending)
        </option>
        <option value="Price (descending)">Price (descending)</option>
        <option value="Mileage (ascending)">Mileage (ascending)</option>
        <option value="Mileage (descending)">Mileage (descending)</option>
        <option value="Performance (ascending)">Performance (ascending)</option>
        <option value="Performance (descending)">Performance (descending)</option>
      </select>
    </div>
  )
}

export default Sort;