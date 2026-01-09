import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import EarlyAccessForm from '../common/early-access-form';
import styles from '../../styles/components/contact/hero.module.scss';

export default function Hero() {
  return (
    <Section
      className={
        classNames({
          [styles.hero]: true
        })
      }
    >
      <div className="columns">
        <div className="column">
          <h1>
            Get Early Access
          </h1>
          <EarlyAccessForm
            className={styles.form}
            disclaimer="By subscribing I give consent to be contacted by Patientory*"
          />
        </div>
        <div className="column">
          <h4 className="mb-5">Sign up to get early access to the Patientory Wallet App. Securely manage your medications, track health metrics, access lab results, and connect with healthcare providers—all in one place. Plus, earn $PTOY rewards for engaging with your health data and using Patientory’s services.</h4>
          <p className="mb-5">Sign up now to be among the first to access exclusive features and provide valuable feedback!</p>
          {/*<p className="mb-5">
            <a href="tel:(678)951-9007" className="nounderline"><i className="fa fa-phone"></i> (678) 951-9007</a>
          </p>*/}
          <p>1. Track your health data effortlessly</p>
          <p>2. Connect with healthcare providers instantly</p>
          <p>3. Stay in control of your wellness journey</p>
        </div>
      </div>
      <h4 className={styles.legend}>Patientory empowers our end users with actionable insights from health data to improve outcomes.</h4>
    </Section>
  )
}
