import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PropertyList from './components/PropertyList/PropertyList';
import Search from './components/Search/Search';
import data from './data.json';

function App() {
  const [property, setProperty] = useState([]);
  const [filterProperty, setFilterProperty] = useState([]);
  const [filter, setFilter] = useState("any");

  useEffect(()=>{
    if (property.length === 0) setProperty(data);
    setFilterProperty(data);
  },[property])
  return (
    <div className="App">
      <Header setFilter={setFilter} setProperty={setFilterProperty}/>
      <Search/>
      <Filter filter={filter} setFilter={setFilter} property={property} setProperty={setFilterProperty}/>
      <PropertyList property={filterProperty}/>
      <Footer/>
    </div>
  );
}

export default App;
