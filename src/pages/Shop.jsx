import FooterNavigation from "../components/FooterNavigation";
import NavBar from "../components/NavBar";
import search_active from '../assets/icons/search-active.svg'
import filter from '../assets/icons/filter.svg'
import Catalog from "../components/Catalog";


export default function Shop() {
  return (
    <div>
      <NavBar image={search_active} title={"Shop"} icon2={filter}/>
      <Catalog />
      <FooterNavigation />
    </div>
  )
}
