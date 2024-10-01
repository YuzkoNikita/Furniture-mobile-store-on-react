import { Link } from 'react-router-dom'
import star from '../assets/icons/star.svg'

// eslint-disable-next-line react/prop-types
export default function CardItem({id, image, title, price, rating}) {

  return (
    <div className='card'>
        <div className="card-image">
          <Link to={`/product/${id}`}><img src={image} alt="image" /></Link>
        </div>

        <h2>{title}</h2>
        
        <div className="card-details">
            <p>$ {price}</p>

            <div className="card-rating">
                <img src={star} alt="" />

                <h3>{rating}</h3>
            </div>
        </div>
    </div>
  )
}