import classNames from 'classnames';
import React from 'react'
import useMedia from '../../helpers/patientory/media/useMedia';
import styles from '../../styles/components/patientory/showcase.module.scss';
import Section from '../common/section';

export default function Showcase() {
  const [renderItems] = useMedia();
  return (
    <Section
      className={
        classNames({
          [styles.showcase]: true,
        })
      }
    >
      <h3 className={styles.heading}>As Seen In</h3>
      {renderItems()}
    </Section>
  )
}
