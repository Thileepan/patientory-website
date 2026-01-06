import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/trials/heading.module.scss';
import Button from '../common/button';

export default function Heading() {
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
        {/*<div className={styles.center}>
          <h2 className="pb-4">Clinical Trial Recruitment Sponsor Discovery Call</h2>
          <Button className={styles.center} title="Sponsor Demo Request" action="https://calendly.com/sponsor-discovery-call"></Button>
          <div className="pt-6"></div>
        </div>*/}

        <div className={styles.center}>{/*className={styles.topline}*/}
          <iframe width="80%" height="500" src="https://www.youtube.com/embed/wdU5zt5hXy4"></iframe>
          <div className="pt-6"></div>
          <h1 className="pb-4">List of Clinical Trial Opportunities</h1>
          <h4>Patients are eligible to be included in the study only if they meet all of the required criteria</h4>
        </div>
        
        {/*<div className="columns">
          <div className="column">
            <h1>
              Clinical <br className="is-hidden-touch"/>Trials.
            </h1>
          </div>
          <div className="column">
            <h3 className="pb-6">
              Patients are eligible to be included in the study only if they meet all of the required criteria
            </h3>
            <Button className="pt-4" title="Sponsor Demo Request" action="https://calendly.com/sponsor-discovery-call"></Button>
          </div>
        </div>*/}
        {/*<div className="columns">
          <div className="column is-half">
            <h3>
              List of Clinical Trial Opportunities
            </h3>
            <div>Patients are eligible to be included in the study only if they meet all of the required criteria</div>
          </div>
        </div>*/}
      </div>
    </Section>
  )
}
