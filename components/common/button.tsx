import classNames from 'classnames'
import React from 'react'
import styles from '../../styles/components/common/button.module.scss';

interface Props {
  title: string
  className?: string
  light?: boolean
  darkWhite?: boolean
  action?: string
  onClick?: () => void
  iconLeft?: boolean
  iconRight?: boolean
  icon?: string
  style?: any
}

export default function Button(props: Props) {
  const icon = (
    <span 
      className={
        classNames({
          "icon is-small": true,
        })
      }
    >
      <i className={props.icon}></i>
    </span>
  )

  return (
    <a
      style={props.style}
      href={props.action}
      onClick={props.onClick}
      className={
        classNames({
          "button is-medium": true,
          [props.className]: props.className,
          [styles.root]: true,
          [styles.light]: props.light,
          [styles.darkWhite]: props.darkWhite
        })
      }
    >
      {props.iconLeft && icon}
      <blockquote
        className={
          classNames({
            [styles.icon_left]: props.iconLeft,
            [styles.icon_right]: props.iconRight
          })
        }
      >
        {props.title}
      </blockquote>
      {props.iconRight && icon}
    </a>
  )
}
