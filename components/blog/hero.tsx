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
      <h1>Patientory Blog</h1>
    </Section>
  )
}