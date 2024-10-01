import CartProducts from '../components/CartProducts'
import NavBar from '../components/NavBar'
import image_back from '../assets/icons/back-arrow.svg'
import home_black from '../assets/icons/home-black.svg'

export default function Cart() {
  return (
    <div className='cart'>
        <NavBar image_back={image_back} title="Cart" image_home={home_black}/>
        <CartProducts />
    </div>
  )
}
