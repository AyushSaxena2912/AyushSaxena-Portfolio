"use client";
import { Heading, SubHeading, BadgeCard } from "./Export";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const BadgeSection = (props) => {
  const data = props?.data;

  return (
    <section>
      <Heading text="Graphics Work" />
      <SubHeading text="A curated collection of posters, banners, and certificates designed for campaigns and bootcamps." />
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <BadgeCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BadgeSection;
