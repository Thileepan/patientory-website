import React, { useEffect } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import styles from '../../styles/components/neith/features.module.scss';
import useFeatures, { useNeithFeatures } from '../../helpers/neith/features/useFeatures';
import Section from '../common/section';
import Button from '../common/button';

SwiperCore.use([Navigation, Pagination]);

export default function Features() {
  const features = useNeithFeatures(
    (item) => (
      <SwiperSlide>
        <div
          className={
            classNames({
              [styles.feature_item]: true
            })
          }
        >
          <img src={item.src} alt={item.title}/>
          <div>
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>
            {
              item.hasButton && (
                <Button className={styles.button} light title={item.action} />
              )
            }
          </div>
        </div>
      </SwiperSlide>
    )
  );

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
        {features}
      </Swiper>
    </Section>
  )
}
