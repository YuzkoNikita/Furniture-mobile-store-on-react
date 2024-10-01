import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CardItem from "./CardItem";

export default function RelatedProducts() {
  const {products} = useContext(ShopContext);

  return (
    <div className="relatedproducts container grid">
       <h3 className="catalog_name">RELATED PRODUCTS</h3>
       <div className="relatedproducts-item">
          {products.map((data, i)=> {
            return <CardItem  key={i} id={data.id} image={data.imageSrc} title={data.title} 
            price={data.price} rating={data.rating}/>
          })}
       </div>
    </div>
  )
}
