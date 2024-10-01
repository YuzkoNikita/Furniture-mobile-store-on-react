import NavBar from "../components/NavBar";
import back_arrow from "../assets/icons/back-arrow.svg";
import favorite_active from "../assets/icons/favorite-active.svg";
import cart from "../assets/icons/cart.svg";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProducrtDisplay from "../components/ProducrtDisplay";
import FooterNavigation from "../components/FooterNavigation";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <NavBar image_back={back_arrow} title={"Shop"} icon1={favorite_active} image_cart={cart}/>
      <ProducrtDisplay product={product} />
      <RelatedProducts />
      <FooterNavigation />
    </div>
  )
}
