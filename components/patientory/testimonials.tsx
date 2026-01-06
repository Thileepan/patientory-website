import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Section from '../common/section'
import styles from '../../styles/components/patientory/testimonials.module.scss';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import useTestimonials, { TestimonialItems, useTestimonialItems } from '../../helpers/patientory/testimonials/useTestimonials';

SwiperCore.use([Navigation, Pagination]);

export default function Testimonials() {
  const [testimonials] = useTestimonialItems(
    (item) => (
      <SwiperSlide>
        <article
          className={
            classNames({
              [styles.testimonial_item]: true,
              'media': true,
              'is-hidden-touch': true
            })
          }
        >
          <figure className="image media-left">
            <img
              className={
                classNames({
                  [styles.image]: true,
                  'is-rounded': true
                })
              }
            src={item.src} alt={item.author} />
            <div
              className={
                classNames({
                  [styles.imageOverlay]: false
                })
              }
            ></div>
          </figure>
          <div className="media-content">
            <h2>“</h2>
            <h4>“{item.message}“</h4>
            <h6>{item.author}</h6>
          </div>
        </article>
        <article
          className={
            classNames({
              [styles.testimonial_item]: true,
              'is-hidden-desktop': true
            })
          }
        >
          <h2>“</h2>
          <figure className="image">
            <img 
            className={
              classNames({
                [styles.image]: true,
                'is-rounded': true
              })
            }
            src={item.src} alt={item.author} />
            <div
              className={
                classNames({
                  [styles.imageOverlay]: false
                })
              }
            ></div>
          </figure>
          <div className="media-content">
            <h4>“{item.message}“</h4>
            <h6>{item.author}</h6>
          </div>
        </article>
      </SwiperSlide>
    )
  );

  return (
    <Section
      id="testimonials"
      className={
        classNames({
          [styles.testimonials]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <h2>Testimonials</h2>
      <Swiper
        pagination={{ clickable: true }}
        speed={500}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 5000
        }}
      >
        {testimonials}
      </Swiper>
    </Section>
  )
}
