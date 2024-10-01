import StaticPhoneInfo from "./components/StaticPhoneInfo";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./sass/index.scss";
import Shop from "./pages/Shop";
import Favorite from "./pages/Favorite";
import Account from "./pages/Account";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="phone">
      <BrowserRouter>
        <StaticPhoneInfo />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/favorite" element={<Favorite />}/>
          <Route path="/profile" element={<Account />}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product />}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
