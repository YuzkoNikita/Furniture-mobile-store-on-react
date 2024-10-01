import { Link, useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function NavBar({image, image_back, image_home, image_cart,  logo, title, icon1, icon2}) {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };

  return (
    <div className="nav container grid">
        <div>
            <h2>{logo}</h2>
            <img src={image} alt="" />
            <img onClick={handleGoBack} src={image_back} alt="" />
        </div>

        <h2>{title}</h2>

        <span>
            <img src={icon1} alt="" /> 
            <img src={icon2} alt="" /> 
            <Link to='/cart'>
              <img src={image_cart} alt="" />
            </Link>
            <Link to='/'>
              <img src={image_home} alt="" />
            </Link>
        </span>
    </div>
  )
}
