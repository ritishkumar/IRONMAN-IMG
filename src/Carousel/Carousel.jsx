import React from 'react';

import bgdonut1 from './image/iron-man.jpg';

import fullscreenBg from './image/fullscreen-bg.jpg'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './Carousel.css';

const slider = [
  {
    title: "MARK VI",
    description: "The new features included a powerful laser, arm-mounted mini-missiles, considerable resistance to electricity.",
    url: "https://nerdarena.in/cdn/shop/products/9f40d1bf9ff75d195106768585dbccb__78347.jpg?v=1733947183&width=1920"
  },
  {
    title: "MARK VII",
    description: "The Mark VII possessed a powerful thruster in its back, which freed up Stark's hands and allowed him to blast opponents while flying at full speed.",
    url: "https://itakon.it/wp-content/uploads/2015/03/17115_10152700735442344_7129113128103364373_n.jpg"
  },
  {
    title: "MARK XLII",
    description: "The MARK XLII sported a lighter shade of gold and, apart from regular weaponry, relied on its high-powered repulsor technology to fight.",
    url: "https://popcollectibles.store/cdn/shop/files/DSC01051_1024x1024@2x.jpg?v=1724005630"
  },
  {
    title: "MARK XLIV",
    description: "All of its weapons were custom-designed to subdue the Hulk, with sedatives, jackhammer hands, and replaceable parts to help him.",
    url: "https://cdn.archonia.com/images/1-104034543-2-1-original1/infinity-saga-dlx-action-figure-iron-man-mark-44-hulkbuster-1-12.jpg"
  },
  {
    title: "MARK L",
    description: "The design was the sleekest of all Stark's suits, and actually mimicked the shape of Stark's body.",
    url: "https://i.pinimg.com/736x/7f/1e/2a/7f1e2a5fdc4d0f0ee4721cba5028095a.jpg"
  },
];

const Carousel = () => {
  return (
    <div className='carousel'>
      {/* Full-Screen Image (Visible Only on Large Screens) */}
      <div className="fullscreen-bg"></div>

      <div>
        <div className='carousel-content'>
          <span>discover</span>
          <h1>The Future of Iron Man</h1>
          <hr />
          <p>
            Though Tony Stark’s journey ended, his influence lives on in the Marvel universe.
            Will there be a new Iron Man? Only time will tell. But one thing is certain—heroes like Iron Man never truly fade.
          </p>
          <a href="#" className='slider-btn'>IRON MAN</a>
        </div>
      </div>

      <Swiper
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 },
        }}
      >
        {
          slider.map((data, index) => (
            <SwiperSlide key={index} style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <a href={`${data.url}`} target="_blank" rel="noopener noreferrer" className='slider-btn'>Explore</a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* Hide bgdonut1 on big screens */}
      <img src={bgdonut1} alt="bg image" className='bgdonut1' />
    </div>
  );
};

export default Carousel;
