import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { title: "Learn Web Development", img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg" },
  { title: "Master Data Science", img: "https://cdn.pixabay.com/photo/2022/12/23/01/25/steering-7673519_1280.jpg" },
  { title: "Language fluent", img: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/ferlazzo-169hero-newlanguage-istock.jpg?w=2880&quality=85" },
];

const Banner = () => {
  return (
    <Swiper modules={[Autoplay, Pagination, EffectFade]} loop={true}
    autoplay={{ delay: 1700, disableOnInteraction: false }} pagination={{ clickable: true }} effect="fade" className="w-full lg:h-[90vh] h-[99vh]">
      {slides.map((slide) => (
        <SwiperSlide  className="flex items-center justify-center text-white text-4xl font-bold bg-cover bg-center" style={{ backgroundImage: `url(${slide.img})` }}>
          {slide.title}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
