import './PropertyCard.css';
import popular from '../../static/popular.svg';
import like from '../../static/like.svg';
import bed from '../../static/bed.svg';
import bathroom from '../../static/bathroom.svg';
import sqarea from '../../static/sqarea.svg';
import { NumericFormat } from 'react-number-format';


const PropertyCard = ({ele}) => {
    function currencyFormat(num) {
        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <div className='property-card pointer'>
            <img className='image' src={ele.image} alt='property' />
            <div className={`property-popular ${ele.popular ? 'show': 'hide'}`}>
                <img src={popular} alt='star' />
                <p>POPULAR</p>
            </div>
            <div className='property-details'>
                <div className='property-price'>
                    <p>{currencyFormat(Number(ele.price))}<span>/month</span></p>
                    <img src={like} alt='like' />
                </div>
                <div className='property-title'>
                    <p className='name'>{ele.title}</p>
                    <p className='add'>{ele.address}</p>
                </div>
                <div className='property-features'>
                    <div className='beds'>
                        <img src={bed} alt='beds' /><span>{`${ele.beds} Beds`}</span>
                    </div>
                    <div className='bathrooms'>
                        <img src={bathroom} alt='bathrooms' /><span>{`${ele.bathrooms} Bathrooms`}</span>
                    </div>
                    <div className='sq-area'>
                        <img src={sqarea} alt='sq-area' /><span>{ele.area}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard