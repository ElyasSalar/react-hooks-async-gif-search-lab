import React, {useState} from 'react';

function GifiSearch({onSearch}){
  const [seachValue, setSearchResult] = useState('');
  return (
    <div>
      <input type='search' placeholder='Search...' onChange={(event) => setSearchResult(event.target.value)} />
      <button onClick={() => onSearch(seachValue)}>Search</button>
    </div>
  )
}

export default GifiSearch;