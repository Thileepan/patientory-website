import React from 'react'
import classNames from 'classnames';
import styles from '../../styles/components/career-detail/content.module.scss';

interface Props {
  content: string | JSX.Element | JSX.Element[]
}

export default function BlogContent(props: Props) {
  return (
    <div
      className={
        classNames({
          [styles.content]: true
        })
      }
    >
      <div className="columns is-multiline">
        <div className="column" dangerouslySetInnerHTML={{
          __html: props.content?.toString()
        }}/>
      </div>
    </div>
  )
}