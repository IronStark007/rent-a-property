import PropertyCard from '../PropertyCard/PropertyCard';
import './PropertyList.css';

const PropertyList = ({property}) => {
  return (
    <div className='property-list'>
        {property.map((ele)=>{
            return <PropertyCard key={ele.id} ele={ele}/>
        })}
    </div>
  )
}

export default PropertyList