import './Filter.css';
import data from '../../data.json';

const Filter = ({filter, setFilter, property, setProperty}) => {

  const filterHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    if (filter==="low"){
      const filteredData = property.filter(ele=>{
        return Number(ele.price)>=500 && Number(ele.price) <= 1500
      })
      setProperty(filteredData);
    }else if (filter==="medium"){
      const filteredData = property.filter(ele=>{
        return Number(ele.price)>1500 && Number(ele.price) <= 3000
      })
      setProperty(filteredData);
    }else if (filter==="high"){
      const filteredData = property.filter(ele=>{
        return Number(ele.price)>3000 && Number(ele.price) <= 5000
      })
      setProperty(filteredData);
    }else {
      setProperty(data);
    }
  }

  return (
    <div className='filter'>
      <form className='filter-dropdown' onSubmit={submitHandler}>
        <div>
          <label htmlFor={'price'}>Price</label>
          <select value={filter} onChange={filterHandler} id={'price'}>
            <option value="any">Any</option>
            <option value="low">$500-$1500</option>
            <option value="medium">$1500-$3000</option>
            <option value="high">$3000-$5000</option>
          </select>
        </div>
        <button className='filter-submit pointer' onClick={submitHandler} type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Filter;