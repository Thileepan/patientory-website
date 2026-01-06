import classNames from 'classnames'
import React from 'react'
import styles from '../../styles/components/common/moreButton.module.scss';

interface Props {
  title: string
  className?: string
  light?: boolean
  action?: string
  onClick?: () => void
}

export default function MoreButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={
        classNames({
          "button is-medium": true,
          [props.className]: props.className,
          [styles.root]: true,
          [styles.light]: props.light
        })
      }
    >
      { props.action &&
        <a href={props.action}>
          {props.title}
        </a>
      }
      { !props.action && props.title }
    </button>
  )
}
