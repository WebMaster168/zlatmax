import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import './HitsSlider.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsSlice";
import ProductCard from "./ProductCard";
 
export default function HitsSlider() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (state) => state.products
  );
 
  useEffect(() => {
    dispatch(fetchProducts("hits"));
  }, [dispatch]);
 
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
 
  return (
    <section className="hits">
        <div className="wrapper">
          <div className="hits__head">
            <h2 className="hits__title">Хиты продаж</h2>
          </div>
    <div className="hits-slider">
           <button className="hits-prev"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{prevEl: '.hits-prev', nextEl: '.hits-next'}}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {items.map((product: any) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product}/>
                
              </SwiperSlide>
            ))}
          </Swiper>
            <button className="hits-next"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></button>
    </div>
        </div>
    </section>
  )
}