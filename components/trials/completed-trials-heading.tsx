import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/trials/heading.module.scss';

export default function CompletedTrialsHeading() {
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
          <div className="columns">
            <div className="column">
              <h2 className="pb-4">
                Completed Trials
              </h2>
              <h4>List of Clinical Trial Opportunities recently completed</h4>
            </div>
            {/*<div className="column">
              <h3>
                List of Clinical Trial Opportunities completed recently.
              </h3>
            </div>*/}
          </div>
        </div>
        {/*<div className="columns pt-6">
          <div className="column">
            <h3>
              List of Clinical Trial Opportunities recently completed.
            </h3>
          </div>
        </div>*/}
      </div>
    </Section>
  )
}
