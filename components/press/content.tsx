import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/blog/content.module.scss';
import MoreButton from '../common/more.button';
import { PressContentItems } from '../../helpers/press/useContent';

export default function PressContent() {
  return (
    <Section
      className={
        classNames({
          [styles.content]: true
        })
      }
    >
      <div className="columns is-multiline">
        <PressContentItems>
          {(post, idx) => (
            <a
              href={`/press/${post.id}/${encodeURIComponent(post.title.replaceAll(" ", "-").toLowerCase())}`}
              className={
                classNames({
                  "column": true,
                  "is-half": idx !== 0,
                  "is-full": idx === 0,
                  [styles.post]: true
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
                <img src={post.src} alt={post.title}/>
              </figure>
              { idx === 0 &&
                <div className="columns">
                  <div className="column">
                    <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
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
              <MoreButton title="Read more" action={`/blog/${post.id}/${encodeURIComponent(post.title.replaceAll(" ", "-").toLowerCase())}`}/>
            </a>
          )}
        </PressContentItems>
      </div>
    </Section>
  )
}