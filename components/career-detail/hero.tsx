import React from 'react'
import classNames from 'classnames';
import styles from '../../styles/components/career-detail/hero.module.scss';

interface Props {
  title: string
}

export default function Hero(props: Props) {
  return (
    <div
      className={
        classNames({
          [styles.hero]: true
        })
      }
    >
      <h1>{props.title}</h1>
    </div>
  )
}