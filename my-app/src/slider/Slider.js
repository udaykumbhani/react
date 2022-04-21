import React from "react";
import "./Slider.scss";
import { images } from "../image";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles

import "swiper/css";

import "swiper/css/effect-coverflow";

import "swiper/css/pagination";



// import required modules

import { EffectCoverflow, Pagination } from "swiper";



export default function slider() {
  return (

    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
    <section className="hero">
      <div className="container">
          <div className="slider">
            <div className="left">
              <div className="wrapper mt">
                <div className="white">
                  <span>
                    <img src={images.herobtn} alt="ideas_img" />
                  </span>
                  <span className="btn-text">Hot Recipes</span>
                </div>
              </div>
              <div className="content">
                <h2 className="hero-title">Spicy delicious chicken wings</h2>
                <p className="hero-pera">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim{" "}
                </p>

                <div className="wrapper">
                  <div className="stat">
                    <span>
                      <img src={images.Timer} alt="timer_img" />
                    </span>
                    <span className="text">30 minutes</span>
                  </div>
                  <div className="stat">
                    <span>
                      <img src={images.ForkKnife} alt="forknife_img" />
                    </span>
                    <span className="text">Chicken</span>
                  </div>
                </div>
              </div>
              <div className="account">
                <div className="ac-left">
                  <div className="ac-dp">
                    <img src={images.heroprofile} alt="account-holder_img" />
                  </div>
                  <div className="account-deatils">
                    <p className="account-name">John Smith</p>
                    <p className="account-date">15 March 2022</p>
                  </div>
                </div>
                <div className="ac-right">
                  <div className="wrapper">
                    <div className="white black">
                      <span>
                        <img src={images.playcircle} alt="play-circle_img" />
                      </span>
                      <span className="btn-text text-white">View Recipes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={images.herobg} alt="background_img" className="hero-imgg" />
            </div>
            <div className="handpicked-image">
              <img src={images.Badge} alt="handpicked.image" />
            </div>
        </div>
      </div>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="hero">
      <div className="container">
          <div className="slider">
            <div className="left">
              <div className="wrapper mt">
                <div className="white">
                  <span>
                    <img src={images.herobtn} alt="ideas_img" />
                  </span>
                  <span className="btn-text">Hot Recipes</span>
                </div>
              </div>
              <div className="content">
                <h2 className="hero-title">Spicy delicious chicken wings</h2>
                <p className="hero-pera">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim{" "}
                </p>

                <div className="wrapper">
                  <div className="stat">
                    <span>
                      <img src={images.Timer} alt="timer_img" />
                    </span>
                    <span className="text">30 minutes</span>
                  </div>
                  <div className="stat">
                    <span>
                      <img src={images.ForkKnife} alt="forknife_img" />
                    </span>
                    <span className="text">Chicken</span>
                  </div>
                </div>
              </div>
              <div className="account">
                <div className="ac-left">
                  <div className="ac-dp">
                    <img src={images.heroprofile} alt="account-holder_img" />
                  </div>
                  <div className="account-deatils">
                    <p className="account-name">John Smith</p>
                    <p className="account-date">15 March 2022</p>
                  </div>
                </div>
                <div className="ac-right">
                  <div className="wrapper">
                    <div className="white black">
                      <span>
                        <img src={images.playcircle} alt="play-circle_img" />
                      </span>
                      <span className="btn-text text-white">View Recipes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={images.herobg} alt="background_img" className="hero-imgg" />
            </div>
            <div className="handpicked-image">
              <img src={images.Badge} alt="handpicked.image" />
            </div>
        </div>
      </div>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="hero">
      <div className="container">
          <div className="slider">
            <div className="left">
              <div className="wrapper mt">
                <div className="white">
                  <span>
                    <img src={images.herobtn} alt="ideas_img" />
                  </span>
                  <span className="btn-text">Hot Recipes</span>
                </div>
              </div>
              <div className="content">
                <h2 className="hero-title">Spicy delicious chicken wings</h2>
                <p className="hero-pera">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim{" "}
                </p>

                <div className="wrapper">
                  <div className="stat">
                    <span>
                      <img src={images.Timer} alt="timer_img" />
                    </span>
                    <span className="text">30 minutes</span>
                  </div>
                  <div className="stat">
                    <span>
                      <img src={images.ForkKnife} alt="forknife_img" />
                    </span>
                    <span className="text">Chicken</span>
                  </div>
                </div>
              </div>
              <div className="account">
                <div className="ac-left">
                  <div className="ac-dp">
                    <img src={images.heroprofile} alt="account-holder_img" />
                  </div>
                  <div className="account-deatils">
                    <p className="account-name">John Smith</p>
                    <p className="account-date">15 March 2022</p>
                  </div>
                </div>
                <div className="ac-right">
                  <div className="wrapper">
                    <div className="white black">
                      <span>
                        <img src={images.playcircle} alt="play-circle_img" />
                      </span>
                      <span className="btn-text text-white">View Recipes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={images.herobg} alt="background_img" className="hero-imgg" />
            </div>
            <div className="handpicked-image">
              <img src={images.Badge} alt="handpicked.image" />
            </div>
        </div>
      </div>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="hero">
      <div className="container">
          <div className="slider">
            <div className="left">
              <div className="wrapper mt">
                <div className="white">
                  <span>
                    <img src={images.herobtn} alt="ideas_img" />
                  </span>
                  <span className="btn-text">Hot Recipes</span>
                </div>
              </div>
              <div className="content">
                <h2 className="hero-title">Spicy delicious chicken wings</h2>
                <p className="hero-pera">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim{" "}
                </p>

                <div className="wrapper">
                  <div className="stat">
                    <span>
                      <img src={images.Timer} alt="timer_img" />
                    </span>
                    <span className="text">30 minutes</span>
                  </div>
                  <div className="stat">
                    <span>
                      <img src={images.ForkKnife} alt="forknife_img" />
                    </span>
                    <span className="text">Chicken</span>
                  </div>
                </div>
              </div>
              <div className="account">
                <div className="ac-left">
                  <div className="ac-dp">
                    <img src={images.heroprofile} alt="account-holder_img" />
                  </div>
                  <div className="account-deatils">
                    <p className="account-name">John Smith</p>
                    <p className="account-date">15 March 2022</p>
                  </div>
                </div>
                <div className="ac-right">
                  <div className="wrapper">
                    <div className="white black">
                      <span>
                        <img src={images.playcircle} alt="play-circle_img" />
                      </span>
                      <span className="btn-text text-white">View Recipes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={images.herobg} alt="background_img" className="hero-imgg" />
            </div>
            <div className="handpicked-image">
              <img src={images.Badge} alt="handpicked.image" />
            </div>
          </div>
      </div>
    </section>
    </SwiperSlide>
  </Swiper>
   
  );
}
