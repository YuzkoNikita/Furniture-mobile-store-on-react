import products from "../assets/products.json"
import CardItem from "./CardItem"

export default function CatalogFeatureItems() {
  return (
    <div className="catalog container grid">
        <h3 className="catalog_name">FEATURE ITEMS</h3>

        <div className="catalog_container">
          {products.slice(0, 4).map((data, i) => (
          <CardItem key={i} id={data.id} image={data.imageSrc} title={data.title} 
                    price={data.price} rating={data.rating}/>
          ))}
        </div>
    </div>
  )
}
