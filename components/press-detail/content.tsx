import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/blog-detail/content.module.scss';

interface Props {
  content: string | JSX.Element | JSX.Element[]
}

export default function BlogContent(props: Props) {
  return (
    <Section
      className={
        classNames({
          [styles.content]: true
        })
      }
    >
      <div className="columns is-multiline">
        <div className="column" dangerouslySetInnerHTML={{
          __html: props.content.toString()
        }}/>
      </div>
    </Section>
  )
}