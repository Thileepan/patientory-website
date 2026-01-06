import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/neith/hero.module.scss';
import Button from '../common/button';
import Section from '../common/section';
import { motion, useTransform, useViewportScroll } from "framer-motion"

export default function Hero() {
  const [size, setSize] = useState(0);
  const { scrollY } = useViewportScroll();
  const threshold = size / 2

  const imageOpacity = useTransform(scrollY, [0, threshold], [0, 1])
  const imageTransformMock = useTransform(scrollY, [0, threshold], [100, 50])
  const imageTransform = useTransform(imageTransformMock, value => value - 150)

  useEffect(() => {
    if (window) {
      setSize(window.innerHeight);
    }
  }, [scrollY.get()]);

  const contentStyle = {
    opacity: imageOpacity,
    y: imageTransform
  }
  
  return (
    <Section
      id="intro"
      className={
        classNames({
          [styles.hero]: true,
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true,
        })
      }
    >
      <div
        className={
          classNames({
            [styles.content]: true,
          })
        }
      >
        <h1
          className={
            classNames({
              'big': true,
              'has-text-centered': true
            })
          }
        >
          Neith <br className="is-hidden-touch"/>Enterprise <br className="is-hidden-touch"/>Solution
        </h1>
        <motion.img style={contentStyle} src="/img/neith/hero.webp" alt="Neith enterprise on a tablet"/>
        <motion.h5 style={{ ...contentStyle, paddingBottom: '2rem'}}>Real-Time Population Health Data & Analytics</motion.h5>
        <motion.h5 style={contentStyle}>Patient-centered data management optimizes the healthcare organization workflow and increases patient satisfaction:</motion.h5>
        <motion.p style={contentStyle}>
          Utilizing the secure and encrypted <span>PTOYMatrix</span>, Neith empowers medical professionals, healthcare organizations, and employers with actionable insights into healthcare data to improve population health outcomes while engaging patients in the process.
        </motion.p>
        <motion.div style={{...contentStyle, paddingTop: '2rem'}}>
          <Button title="Request a demo" action="https://calendly.com/sponsor-discovery-call"/>
        </motion.div>
      </div>
    </Section>
  )
}
