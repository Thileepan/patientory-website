import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/coupon/hero.module.scss';

export default function Hero() {
  return (
    <Section
      className={
        classNames({
          [styles.hero]: true
        })
      }
    >
      <h1>Patientory Prescription Savings Coupon</h1>
      <link rel='stylesheet' href='https://secure.unitednetworksofamerica.com/partner/css/iframe.css' type='text/css' charSet='utf-8' /><iframe id='una_869' className='partner mt-5' src='https://secure.unitednetworksofamerica.com/partner/card-downloader.php?id=869&rxgrp=PATIENTORY' frameBorder='0' scrolling='no'></iframe>
    </Section>
  )
}