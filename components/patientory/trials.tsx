import classNames from 'classnames'
import React, { useState } from 'react'
import Section from '../common/section'
import styles from '../../styles/components/patientory/trials.module.scss';
import Button from '../common/button';

export default function Trials() {
  return (
    <Section
      id="health-data-marketplace"
      className={
        classNames({
          [styles.trials]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <div className="pb-6"><h2>Care Health Data Marketplace</h2>
        <h4 className={styles.paragraph}>Your Patientory Wallet Unlocks Personalized Cost Reduced Healthcare Services and Rewards</h4><br />
      </div>

      <div className="columns">
        <div className="column is-hidden-mobile">
          <img src="/img/patientory/careplan.png" className="" alt="CarePlan" />
        </div>
        <div className="column">
            <h3 className={styles.subHeading}>CarePlan</h3>
            <h5 className={styles.paragraph}>Sign up for the Patientory Wallet Careplan to receive your AI Health Coach recommendations for better health. Track your body fitness metrics and get insights tailored to your unique health profile.  Your participation earns you rewards! <br/><br/>Plus, gain access to clinical trials and cost effective prescription drugs. Start your journey towards better health and savings today!</h5><br/>
            <a href="/download"><img width="27%" src="/img/patientory/download-appstore.png" alt="Downlaod from App Store" /></a>&nbsp;&nbsp;
            <a href="/download"><img width="31%" src="/img/patientory/download-playstore.png" alt="Downlaod from Play Store" /></a>
        </div>
        <div className="column is-hidden-desktop is-hidden-tablet">
          <img src="/img/patientory/careplan.png" className="" alt="CarePlan" />
        </div>
        
      </div><br/><br/>

      <div className="columns">
        <div className="column">
            <h3 className={styles.subHeading}>CareTrials</h3>
            <h5 className={styles.paragraph}>Clinical trials are needed globally to reduce disease burdens by helping to develop safe and effective new therapies and vaccines. Your participation can help save millions. Your Patientory Wallet can determine the best fit for clinical trial opportunities. Share your trial registration confirmation to receive in-app rewards.</h5><br/>
            <Button className={styles.button} title={"List of active trials"} action={"/caretrials"} />&nbsp;&nbsp;
            <Button light title={"Sponsor Discovery Call"} action="https://calendly.com/patientory-services/discovery-call" />
        </div>
        <div className="column">
          <img src="/img/patientory/caretrials.png" className="is-hidden-touchs" alt="CareTrials" />
        </div>
      </div><br/><br/>

      <div className="columns">
        <div className="column is-hidden-mobile">
          <img src="/img/patientory/careglp.png" className="is-hidden-touchs" alt="CareGLP" />
        </div>
        <div className="column">
            <h3 className={styles.subHeading}>CareGLP</h3>
            <h5 className={styles.paragraph}>CareGLP combines GLP-1 medications with personalized 1:1 video coaching to achieve optimal weight loss results. This approach emphasizes not only medical treatment but also tailored lifestyle changes to ensure long-term success. Meet your weight goals to earn rewards.</h5>
            <div className={styles.list}>
              <p>1. Quick approval process - no insurance needed</p>
              <p>2. Proven as an effective weight management program</p>
              <p>3. Affordable, competitive pricing</p>
            </div>
            <br/>
            <Button light action="https://patientory.careglp.com/partner/patientory" title="Start Your Journey"/>&nbsp;&nbsp;
            <Button light action="https://patientory.careglp.com/partner/patientory" title="Nutrition Coaching"/><br /><br />
            {/*<Button light action="/careglp" title="Start Your Journey"/>&nbsp;&nbsp;
            <Button light action="/careglp/qualify" title="See if you qualify"/>&nbsp;&nbsp;*/}
        </div>
        <div className="column is-hidden-desktop is-hidden-tablet">
          <img src="/img/patientory/careglp.png" className="is-hidden-touchs" alt="CareGLP" />
        </div>
      </div><br/><br/>

      <div className="columns">
        <div className="column">
            <h3 className={styles.subHeading}>CareMeds</h3>
            <h5 className={styles.paragraph}>Life-Changing Meds at Unmatched Prices. You can access hundreds of vital medications at deeply discounted prices. These life-saving drugs are offered at the lowest possible costs, ensuring affordability without compromising on quality. Powered by Mark Cuban Cost Plus Drug Company. <br/><br/>Say goodbye to high prices and discover a more accessible way to manage your health. Your medication adherence earns you rewards.</h5><br/><br/>
            <Button className={styles.button} action="caremeds" title="Buy Medications"/>&nbsp;&nbsp;
            <Button light title={"Self Insured Employer Discovery Call"} action="https://calendly.com/patientory-services/self-insured-employer-discovery-call" />
        </div>
        <div className="column">
          <img width="80%" src="/img/patientory/life_changing.png" className="is-hidden-touchs" alt="CareTrials" />
        </div>
      </div><br/><br/>

      <div className="columns">
        <div className="column is-hidden-mobile">
          <img src="/img/patientory/pharmacy.png" className="is-hidden-touchs" alt="CareGLP" />
        </div>
        <div className="column">
            <h3 className={styles.subHeading}>CarePharmacy</h3>
            <h5 className={styles.paragraph}>Get the Patientory Prescription Insurance Savings Card and enjoy significant discounts on eligible medications at participating pharmacies. This card makes it easier to afford the prescriptions you need, helping you save on essential treatments. Start lowering your medication costs today with this valuable savings tool.</h5><br/><br/>
            {<Button className={styles.button} action="carepharmacy" title="Get Pharmacy Savings card"/>}
        </div>
        <div className="column is-hidden-desktop is-hidden-tablet">
          <img src="/img/patientory/pharmacy.png" className="is-hidden-touchs" alt="CareGLP" />
        </div>
      </div><br/><br/>

      <div className="columns">
        <div className="column">
            <h3 className={styles.subHeading}>CareLabs</h3>
            <h5 className={styles.paragraph}>CareLabs delivers comprehensive home-based diagnostic testing solutions that empower individuals to make informed decisions about their health. Through detailed biomarker analysis and a wide spectrum of diagnostic tests, we provide clear, actionable insights into your health status. <br/><br/> Our advanced testing capabilities help identify potential health concerns early, track wellness progress, and support preventive healthcare strategies, all designed to give you a deeper understanding of your overall well-being.</h5><br/><br/>
            <Button className={styles.button} action="carelabs" title="Explore Lab Tests"/>
        </div>
        <div className="column">
          <img src="img/patientory/carelabs.png" className="is-hidden-touchs" alt="CareLabs" />
        </div>
      </div><br/><br/>

      {/*<div className="columns">
        <div className="column">
            
            <h3 className={styles.subHeading}>CareTrials</h3>
            <h4 className={styles.paragraph}>Clinical trials are needed globally to reduce disease burdens by helping to develop safe and effective new therapies and vaccines. 
            Your participation can help save millions. Your Patientory Wallet can determine the best fit for clinical trial opportunities. 
            Share your trial registration confirmation to receive in-app rewards.</h4>
            <div className={styles.logos} >
              <img src="/img/trials/moderna.webp" alt="avanir" />
              <img src="/img/trials/seagen.webp" alt="avanir" />
              <img src="/img/trials/avanir.webp" alt="avanir" />
            </div>
            <Button light title={"List of active trials"} action={"/trials"} />&nbsp;&nbsp;
            <Button light title={"Sponsor Discovery Call"} action="https://calendly.com/sponsor-discovery-call/discovery-call" />

            <div className="pt-4 pb-6"></div>
            <h3 className={styles.subHeading}>CareGLP</h3>
            <h4 className={styles.paragraph}>GLP-1 medications in combination with 1:1 video coaching and lifestyle changes are the most effective for weight loss.</h4><br />
            <Button light action="https://care.patientory.com" title="Start Your Journey"/>&nbsp;&nbsp;
            <Button light action="https://patientory.com/careglp" title="See if you qualify"/>

            <div className="pt-4 pb-6"></div>
            <h3 className={styles.subHeading}>Discounted Medications</h3>
            <h4 className={styles.paragraph}>At Mark Cuban Cost Plus Drug Company, they offer hundreds of common (and often life-saving) medications at the lowest possible prices.</h4><br />
            <div className={styles.logos} >
              <a href="https://costplusdrugs.com/" target="_blank"><img src="https://seeklogo.com/images/M/mark-cuban-cost-plus-drug-company-logo-E97DA396D6-seeklogo.com.png" alt="avanir" /></a>
            </div>
            <Button light action="costplusdrugs" title="Buy Medication"/>

            <div className="pt-4 pb-6"></div>
            <h3 className={styles.subHeading}>Pharmacy Savings Card</h3>
            <h4 className={styles.paragraph}>Receive the Patientory Prescription Insurance Savings Card for discounts on qualified medication at participating pharmacies.</h4><br />
            {<Button light action="rx-savings" title="Get card"/>}

            
        </div>
      </div>*/}
    </Section>
  )
}