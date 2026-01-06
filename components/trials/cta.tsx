import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/trials/heading.module.scss';
import Button from '../common/button';

export default function CTA() {
  return (
    <Section
      className={
        classNames({
          [styles.heading]: true
        })
      }
    >
      <div
        className={
          classNames({
            [styles.container]: true
          })
        }
      >
        <div className={styles.center}>
          <h2 className="pb-4">Clinical Trial Recruitment Sponsor Discovery Call</h2>
          <Button className={styles.center} title="Sponsor Demo Request" action="https://calendly.com/sponsor-discovery-call"></Button>
          <div className="pt-6"></div>
        </div>
      </div>
    </Section>
  )
}
