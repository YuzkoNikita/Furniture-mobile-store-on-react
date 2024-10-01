/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.css'; 
import '../../node_modules/swiper/modules/navigation.min.css'; 
import '../../node_modules/swiper/modules/pagination.min.css';
import start from "../assets/icons/star.svg";
import { useCart } from "../context/ShopContext";

export default function ProducrtDisplay(props) {
    const {product} = props;
    const { addToCart } = useCart();
  return (
    <div className="productdisplay">
        <div className="productdisplay-container container">
            <div className="slider-container">
                <Swiper  slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    loop={false} 
                    modules={[Pagination]}>
                    <SwiperSlide>
                        <img src={product.catalogImg.img1} alt="" className='slide-image'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={product.catalogImg.img2} alt="" className='slide-image'/>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="productdisplay-description">
                <div className="productdisplay-description-title">
                    <h2>{product.title}</h2>
                    <p>$ {product.price}</p>
                </div>
                
                <h3>{product.category}</h3>

                <p>{product.description}</p>

                <div className="productdisplay-description-wrapper">
                    <h3>Shipping</h3>
                    <b>{product.delivery}</b>
                </div>

                <div className="productdisplay-description-wrapper">
                    <h3>Ratings</h3>
                    <span>
                        <img src={start} alt="" />
                        <p>{product.rating}</p>
                        <p>{`(82 reviews)`}</p>
                    </span>
                </div>
            </div>

            <div className="buttons">
                <button onClick={() => addToCart(product)} className='button-main'>Add to cart</button>
                <button className="button-alternative">Buy it now</button>
            </div>
        </div>

        <hr />
            <div className="productdisplay-characteristics">
                <span>
                    <h2>Height</h2>
                    <p>{product.size.height}</p>
                    <hr />
                </span>
                <span>
                    <h2>Width</h2>
                    <p>{product.size.width}</p>
                    <hr />
                </span>

                <span>
                    <h2>Weight</h2>
                    <p>{product.size.weight}</p>
                    <hr />
                </span>

            </div>
        <hr />
    </div>
  )
}
