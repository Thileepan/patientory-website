import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/blog-detail/hero.module.scss';

interface Props {
  title: string
  date: string
  author: string
  src: string
}

export default function Hero(props: Props) {
  return (
    <Section
      className={
        classNames({
          [styles.hero]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <div
        className={
          classNames({
            [styles.date]: true
          })
        }
      >
        <p>Published • {props.date}</p>
      </div>
      <h2 className="solid">{props.title}</h2>
      <h5
        className={
          classNames({
            [styles.author]: true
          })
        }
      >
        Posted by: {props.author}
      </h5>
      <figure
        className={
          classNames({
            "image": true,
            "is-2by1": true
          })
        }
      >
        <img src={props.src} alt={props.title} />
      </figure>
    </Section>
  )
}