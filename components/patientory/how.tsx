import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import Section from '../common/section'
import styles from '../../styles/components/patientory/how.module.scss';
import Accordion from '../common/accordion';
import Button from '../common/button';
import { motion, useTransform, useViewportScroll } from "framer-motion"

const items = [{
  type: 'text',
  title: 'Privacy',
  description: 'HIPAA and GDPR compliant protected health data storage and access that adheres to region-specific regulatory guidelines.'
},{
  type: 'text',
  title: 'Optimize health',
  description: 'Data interoperability and holistic data integration lead to a more comprehensive, personalized understanding of your health.'
},{
  type: 'text',
  title: 'care plan',
  description: 'Receive AI generated personalized care plans that take both lifestyle and medical data into account. Engage in preventative measures and tailor your healthcare.'
},{
  type: 'text',
  title: 'security',
  description: 'We assure that your data is safe and secure using maximum grade encryption and blockchain technology via the PTOYMatrix Network.'
}]

export default function How() {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const { scrollY } = useViewportScroll();
  const threshold = size.h / 2
  
  const imageOpacity = useTransform(scrollY, [0, threshold], [0, 1])
  const scrollOpacity = useTransform(scrollY, [0, threshold / 4], [1, 0])
  const imageTransformMock = useTransform(scrollY, [0, threshold], [100, 0])
  const imageTransform = useTransform(imageTransformMock, value => value - 50)
  const fontSizeVal = "150% !important"

  const contentStyle = {
    opacity: imageOpacity,
    y: imageTransform
  }

  useEffect(() => {
    if (window) {
      setSize({ h: window.innerHeight, w: window.innerWidth});
    }
  }, [scrollY.get()]);

  return (
    <Section
      id="how"
      className={
        classNames({
          [styles.how]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <h2>How Patientory Works</h2>
      <h4>We centralize all your medical data so you can easily manage and track your healthcare.</h4>
      <div
        className={
          classNames({
            [styles.title_container]: true
          })
        }
      >
        
      </div>
      <img src="/img/patientory/how.webp" className="is-hidden-touch" alt="how it works graphic"/>
      <div
        className={
          classNames({
            [styles.content_container]: true,
            'is-hidden-desktop': true
          })
        }
      >
        <Accordion
          className={
            classNames({
              [styles.accordion]: true 
            })
          }
          data={items.map(item => ({
            title: item.title,
            paragraph: item.description
          }))}
        />

      </div>
      <br /><br />

      <h3 className={styles.subHeading}>Take Control of Your Health Data</h3>
      <motion.div 
        style={size.w > 768 && contentStyle}
        className={
          classNames({
            [styles.download_actions]: true
          })
        }
      >
        <div className="action">
          <Button
            title="App Store"
            icon="fab fa-apple"
            iconLeft
            light
            // action="https://apps.apple.com/us/app/patientory/id1583534430"
              action="/download"
          />
        </div>
        <div className="action">
          <Button
            title="Play Store"
            icon="fab fa-google-play"
            iconLeft
            light
            // action="https://play.google.com/store/apps/details?id=com.patientory.app"
              action="/download"
          />
        </div>
      </motion.div>
      
    </Section>
  )
}
