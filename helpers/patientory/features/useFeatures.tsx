import classNames from 'classnames';
import React from 'react'
import { SwiperSlide } from 'swiper/react';
import styles from '../../../styles/components/patientory/featuresItem.module.scss';
import Button from '../../../components/common/button';

interface Item {
  title: string
  description: string
  src: string
}

const mock: Item[] = [{
  title: 'Earn Rewards For Your Medical Records',
  description: 'Consent to share your data stored in the Patientory Digital Health Passport Wallet with the Health Data Marketplace and receive insights to maximize your health, rewarding you for meeting your goals.',
  src: '/img/patientory/medical-history.webp'
},
{
  title: 'Medical Records Storage',
  description: 'Securely locate your medical records data safely stored on the PTOYMATRIX blockchain network by validating your identity and assign it to your Patientory private key.',
  src: '/img/patientory/medical-record.webp'
},
{
  title: 'AI Health Coach',
  description: 'Customize your care plan activity schedule or connect with a physician recommended by the AI health coach based on your medical records',
  src: '/img/patientory/care-plan.webp'
},
{
  title: 'Motivation Through Health Score', //
  description: 'Get your Health Score every day from your data and activities. Along with it, a boost of motivation to get higher and higher scores. More activities - more benefits for the body - higher Health score. Earn Rewards and $PTOY tokens',
  src: '/img/patientory/health-score.webp'
},
{
  title: 'Tracking Health Score Statistics',
  description: 'Track your results. Watch for changes in the Health Score, as well as for the progress in activities. The more you do the better you feel and the more you earn!',
  src: '/img/patientory/journal.webp'
},{
  title: 'Water Drinking Tracker',
  description: 'Earn rewards for keeping track of the amount of water you drink, because water greatly affects your health and well-being in general. To do this, you do not need to download a separate application - this is already available in Patientory!',
  src: '/img/patientory/water-drinking-tracker.webp'
},,{
  title: 'Photo Diary',
  description: 'Earn rewards for tracking your body progress by taking photos - just upload photos to Photo Diary and compare yourself at different times.',
  src: '/img/patientory/photo-diary.webp'
}]

export default function useFeatures(): [() => JSX.Element, Item[]] {
  const [items, getItems] = React.useState<Item[]>(mock);
  const render = React.useCallback(() => {
    return (
      <React.Fragment>
        {
          items.map((item,index) => {
            return (
              <SwiperSlide>
                <div
                  className={
                    classNames({
                      [styles.feature_item]: true
                    })
                  }
                >
                  <img src={item.src} alt={item.title}/>
                  <div>
                    <h2>{item.title}</h2>
                    <h4>{item.description}</h4>
                    <div className="pt-4 pb-6"></div>
                    {index === 7 && (
                      <Button action="https://patientory.careglp.com/" title="Get started with GLP-1"/>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </React.Fragment>
    )
  }, [items]);

  return [
    render,
    items
  ]
}
