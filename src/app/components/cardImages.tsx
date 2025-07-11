'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={2}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
