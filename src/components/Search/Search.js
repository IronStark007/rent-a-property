import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <h1 className='search-title'>Search properties to rent</h1>
      <select className='search-dropdown' defaultValue={'default'}>
        <option value={'default'}>Search with Search Bar</option>
      </select>
    </div>
  )
}

export default Search;