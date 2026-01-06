import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';

export default function Hero() {
  const content = (
    <React.Fragment>
      Changing healthcare <br className="is-hidden-touch"/>from the ground up
    </React.Fragment>
  )

  return (
    <Section
      className={
        classNames({

        })
      }
    >
      <h1 className="is-hidden-touch">
        {content}
      </h1>
      <h2 className="is-hidden-desktop">
        {content}
      </h2>
    </Section>
  )
}
