import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/trials/trials.module.scss';
import Button from '../common/button';

export default function TrialList() {
    let trials = [
        {
            logo: '/img/trials/chiesi.webp',
            title: 'Treatment for uncontrolled Asthma',
            content: 'The TANGO study will evaluate the outcomes and safety of a potential new treatment to help patients with uncontrolled asthma. The study is open to people diagnosed with asthma and aged between 18 and 75 years.',
            active: true,
            upcoming: false,
            link: 'https://bit.ly/4hwPmNh'
        }
    ]
  return (
    <>
        {
            trials.length === 0 ? (
                <section className={styles.center}>
                <div className="columns">
                    <div className="column">
                        <p>Currently, there are no clinical trials available.</p>
                    </div>
                </div>
                </section>
                
            ) : 
            (trials.map(trial => (
                <Section
                    className={
                        classNames({
                        [styles.trials]: true
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

                        <div className="columns">
                            <div className="column">
                                <img src={trial.logo} alt={trial.title} />
                            </div>
                            <div className="column">
                                <p>
                                    <b>
                                        {trial.title}
                                    </b>
                                </p>
                                <p>
                                    {trial.content}
                                </p>
                                <p className={styles.status}>
                                    Status: <span className={
                                        classNames({
                                            [styles.accent]: trial.upcoming || trial.active
                                        })
                                    }>{trial.active ? 'Active' : trial.upcoming ? 'Upcoming' : 'Complete'} </span>
                                </p>
                                {
                                    trial.active &&
                                    <Button className={styles.button} title="Get Started" action={trial.link}></Button>
                                }
                            </div>
                        </div>
                    </div>
                </Section>
            ))
        )}
    </>
  )
}
