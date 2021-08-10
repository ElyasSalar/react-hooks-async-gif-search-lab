import React, {useEffect, useState} from 'react';
import GifiList from './GifList';
import GiriSearch from './GifSearch';

function GifiListContainer(){
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=T3eW0vuQdqyF7zcpvzZFbJr6zvZBIQnL&rating=g`)
    .then(res => res.json)
    .then(res => setSearchResult(res))
  }, [search]);
  console.log(search);
  console.log(searchResult);
  return (
    <div>
      <ul>
        {
          searchResult.data.map(gif => {
            return <GifiList images={gif.url} />
          })
        }
      </ul>
      <GiriSearch onSearch={(searchValue) => setSearch(searchValue)} />
    </div>
  );
}

export default GifiListContainer;