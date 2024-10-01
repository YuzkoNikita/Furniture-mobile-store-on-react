import home from '../assets/icons/home.svg'
import home_inactive from '../assets/icons/home-inactive.svg'
import shop from '../assets/icons/shop.svg'
import shop_active from '../assets/icons/shop-active.svg'
import search from '../assets/icons/search.svg'
import cart_inactive from '../assets/icons/cart-inactive.svg'
import profile from '../assets/icons/profile.svg'
import { Link, useLocation } from 'react-router-dom'

export default function FooterNavigation() {
    const location = useLocation();
    
return (
    <div className="footer_navigation">
        <ul className="footer_navigation-container container grid">
            <li>
                <Link to='/'
                className={`footer_navigation-link ${location.pathname === '/'? 'active' : ''}`}>
                    <img src={`${location.pathname === '/' ? `${home}` : `${home_inactive}`}`} />
                    <h3>Home</h3>
                </Link>
            </li>

            <li>
                <Link to='/shop'
                className={`footer_navigation-link ${location.pathname === '/shop'? 'active' : ''}`}>
                    <img src={`${location.pathname === '/shop' ? `${shop_active}` : `${shop}`}`}  alt="" />
                    <h3>Shop</h3>
                </Link>
            </li>

            <li>
                <Link to='/search'
                className={`footer_navigation-link ${location.pathname === '/search'? 'active' : ''}`}>
                    <img src={search} alt="" />
                    <h3>Search</h3>
                </Link>
            </li>
            
            <li>
                <Link to='/cart'
                className={`footer_navigation-link ${location.pathname === '/cart'? 'active' : ''}`}>
                    <img src={cart_inactive} alt="" />
                    <h3>Cart</h3>
                </Link>
            </li>

            <li>
                <Link to='/profile' 
                className={`footer_navigation-link ${location.pathname === '/profile'? 'active' : ''}`}>
                    <img src={profile} alt="" />
                    <h3>Account</h3>
                </Link>
            </li>
        </ul>

        <span></span>
    </div>
  )
}
