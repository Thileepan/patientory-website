import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/blog-detail/content.module.scss';
import ReactMarkdown from 'react-markdown'

interface Props {
  content: string
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
      <div className="columns is-multiline is-centered">
        <div className={"column " + styles.container} dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </Section>
  )
}