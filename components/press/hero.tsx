import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/blog/hero.module.scss';

export default function Hero() {
  return (
    <Section
      className={
        classNames({
          [styles.hero]: true
        })
      }
    >
      <h1>Press</h1>
      <span>For Press Inquiries please contact <a href="mailto:support@patientory.com">support@patientory.com</a></span>
    </Section>
  )
}