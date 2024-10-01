import CardItem from "./CardItem";
import products from '../assets/products.json';

export default function Catalog() {
  return (
    <div className="catalog container grid">
        <div className="catalog_container">
          {products.map((data, i) => (
          <CardItem  key={i} id={data.id} image={data.imageSrc} title={data.title} 
                    price={data.price} rating={data.rating}/>
          ))}
        </div>
    </div>
  )
}
