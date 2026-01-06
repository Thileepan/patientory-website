import React, { useEffect } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import classNames from 'classnames';
import styles from '../../styles/components/patientory/features.module.scss';
import useFeatures from '../../helpers/patientory/features/useFeatures';
import Section from '../common/section';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Features() {
  const [renderFeatures] = useFeatures();

  return (
    <Section
      id="features"
      className={
        classNames({
          [styles.features]: true
        })
      }
    >
      <Swiper
        navigation
        speed={500}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 5000
        }}
      >
        {renderFeatures()}
      </Swiper>
    </Section>
  )
}
