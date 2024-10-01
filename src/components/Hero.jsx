import NavBar from "./NavBar";
import alerts from "../assets/icons/alerts.svg"
import cart from "../assets/icons/cart.svg"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
        <NavBar logo={"Furny"} icon1={alerts} image_cart={cart}/>

        <h1>
          Seamless Furniture
          With Natural Fabrics
        </h1>

        <Link to='/shop'><button className="button-main">Shop All</button></Link>
    </div>
  )
}