import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/blog/content.module.scss';
import MoreButton from '../common/more.button';
import { BlogContentItems } from '../../helpers/blog/useContent';

export default function BlogContent(props: { type?: string, page: number, onMaxPagesRecieved: (number) => void }) {
  return (
    <Section
      className={
        classNames({
          [styles.content]: true
        })
      }
    >
      <div className="columns is-multiline">
        <BlogContentItems type={props.type} page={props.page}>
          {(post, idx, loading, maxPages) => {
            props.onMaxPagesRecieved(maxPages)
            return (
              <div
                className={
                  classNames({
                    "column": true,
                    "is-half": idx !== 0,
                    "is-full": idx === 0,
                    [styles.post]: true,
                    [styles.loading]: loading
                  })
                }
              >
                <figure
                  className={
                    classNames({
                      "image": true,
                      "is-16by9": idx !== 0,
                      "is-2by1": idx === 0
                    })
                  }
                >
                  <img className={idx === 0 && styles.fill} src={post.src} alt={post.title}/>
                </figure>
                { idx === 0 &&
                  <div className="columns">
                    <div className="column">
                      <h3>{post.title}</h3>
                    </div>
                    <div className="column" dangerouslySetInnerHTML={{ __html: post.description }}>
                    </div>
                  </div>
                }
                { idx !== 0 &&
                  <React.Fragment>
                    <h3>{post.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
                  </React.Fragment>
                }
                <span className={styles.spacer}/>
                <MoreButton title="Read more" action={post.externalLink || post.link}/>
              </div>
            )
          }}
        </BlogContentItems>
      </div>
    </Section>
  )
}