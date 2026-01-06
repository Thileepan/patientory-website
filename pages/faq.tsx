import React from 'react';
import Accordion from '../components/common/accordion';
import Route from '../layouts/route';
import styles from '../styles/components/faq/hero.module.scss';

const FAQ = () => {
    const dataLeft = [
    {
        title: 'What is Patientory? What products do they offer?',
        paragraph: "Patientory Inc. is a population health data management and analytics company. Through its two decentralized applications -NEITH an enterprise software tool, and the Patientory mobile app- Patientory Inc. empowers patients and enterprises with actionable insights into healthcare data to improve population health outcomes. This is achieved by integrating a blockchain enabled platform to gather siloed healthcare data for analytics reporting to reduce the overall cost of care through early intervention."
    },
    {
        title: "Why is Patientory necessary?",
        paragraph: `
        There is a growing demand for healthcare population health management solutions that incorporate cybersecurity and computing power from the health and scientific community to run large applications and process huge volumes of data. 
        Large volumes of patient health information can be supported which can further be utilized by Artificial Intelligence for accurate patient treatment.<BR><BR>Patientory provides the following: Healthcare Dapps (blockchain-based applications) that need private off-chain computation, high Performance Computing, Big Data, machine learning for care treatment (shorter time-to-diagnosis, reduced administrative costs). And future healthcare distributed applications that will require new forms of decentralized infrastructure see Edge/Fog computing, ambient AI, IoT + Big Data, distributed deep learning, parallel stream processing etc.        
        `
    },
    {
        title: 'How does Patientory work for healthcare consumers (patients)?',
        paragraph: "Patientory’s mobile app allows patients to create an individual profile. On this profile, they store their medical information on a secure, HIPAA-compliant blockchain enabled platform. Our application gives users individual, recommended care plans and encourages preventative care. Using Patientory, users can personalize their healthcare and coordinate their care plans and goals across multiple providers. Patients, their caregivers and providers engage with personal care plans and align around well defined goals to become active participants in the process to improve health and well-being."
    },
    {
        title: 'How does Patientory work for enterprise organizations?',
        paragraph: "Via the Neith Enterprise population health management data & analytics platform, Patientory's employment of distributed application software helps the healthcare ecosystem realize improved healthcare outcomes through access, preventative and prescriptive data management capabilities."
    }]

    const dataCentral = [{
        title: 'How does Patientory work for healthcare consumers (patients)?',
        paragraph: "Patientory’s mobile app allows patients to create an individual profile. On this profile, they store their medical information on a secure, HIPAA-compliant blockchain enabled platform. Our application gives users individual, recommended care plans and encourages preventative care. Using Patientory, users can personalize their healthcare and coordinate their care plans and goals across multiple providers. Patients, their caregivers and providers engage with personal care plans and align around well defined goals to become active participants in the process to improve health and well-being."
    }]

    const dataRight = [{
        title: 'How does Patientory work for enterprise organizations?',
        paragraph: "Via the Neith Enterprise population health management data & analytics platform, Patientory's employment of distributed application software helps the healthcare ecosystem realize improved healthcare outcomes through access, preventative and prescriptive data management capabilities."
    }]

    return (
        <Route title="FAQ">
            <section className="section">
                <div className="container">
                    <div className={styles.hero}>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="content">
                        <div className="columns">
                            <div className="column">
                                <Accordion
                                    notOpenedByDefault
                                    data={dataLeft} 
                                    className="accordion"
                                />
                            </div>
                            {/*<div className="column">
                                <Accordion 
                                    notOpenedByDefault
                                    data={dataCentral} 
                                    className="accordion"
                                />
                            </div>
                            <div className="column">
                                <Accordion 
                                    notOpenedByDefault
                                    data={dataRight} 
                                    className="accordion"
                                />
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </Route>
    )
}

export default FAQ;