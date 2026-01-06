import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/patientory/hero.module.scss';
import Button from '../common/button';
import Section from '../common/section';
import { motion, useTransform, useViewportScroll } from "framer-motion"

export default function Hero() {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const { scrollY } = useViewportScroll();
  const threshold = size.h / 2
  
  const imageOpacity = useTransform(scrollY, [0, threshold], [0, 1])
  const scrollOpacity = useTransform(scrollY, [0, threshold / 4], [1, 0])
  const imageTransformMock = useTransform(scrollY, [0, threshold], [100, 0])
  const imageTransform = useTransform(imageTransformMock, value => value - 150)
  const fontSizeVal = "150% !important"

  useEffect(() => {
    if (window) {
      setSize({ h: window.innerHeight, w: window.innerWidth});
    }
  }, [scrollY.get()]);

  const contentStyle = {
    opacity: imageOpacity,
    y: imageTransform
  }
  
  return (
    <Section
      id="wallet"
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
      <motion.div
        className={
          classNames({
            [styles.content]: true
          })
        }
      >

        <motion.h1
          className={
            classNames({
              'big': true,
              'has-text-centered': true
            })
          }
        >
          Your Health At <br className="is-hidden-touch"/>Your Fingertips
        </motion.h1>

        <motion.img style={size.w > 768 && contentStyle} src="/img/patientory/phones.webp" alt="Patientory app on a phone"/>

        <motion.h4 style={size.w > 768 && contentStyle}>
          <h3 className={styles.subHeading}>Digital Health Passport Wallet</h3><br />
          Welcome to the Web3 era of healthcare, where your healthy choices earn you crypto rewards.
        </motion.h4>

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
      </motion.div>
      <motion.img style={{ opacity: scrollOpacity }} className={styles.scroll_icon} src="/img/icons/scroll-alt.svg" alt="scroll icon" />
    </Section>
  )
}
