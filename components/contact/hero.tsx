import React, { useState } from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import Form, { FormItem } from '../common/form';
import styles from '../../styles/components/contact/hero.module.scss';

export default function Hero() {
  const [action, setAction] = useState("submit");
  const formItems: FormItem[] = [{
    type: 'text',
    name: 'FNAME',
    placeholder: 'First Name'
  },{
    type: 'text',
    name: 'LNAME',
    placeholder: 'Last Name'
  },{
    type: 'text',
    name: 'EMAIL',
    placeholder: 'E-mail address'
  }]

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
            Subscribe
          </h1>
          <Form
            className={styles.form}
            url="https://patientory.us14.list-manage.com/subscribe/post?u=6142e3f9afe8a69e181da7e12&amp;id=cdc66ef745"
            items={formItems}
            action={action}
            invalid={action != "submit"}
            onSubmit={(state) => {
              setAction("Subscribed!");
            }}
            disclamer="By subscribing I give consent to be contacted by Patientory*"
          />
        </div>
        <div className="column">
          <h4 className="mb-5">Please contact our team with any questions about Patientory and someone will get back to you as soon as possible.</h4>
          <p className="mb-5"><i className="fa fa-map-marker-alt"></i> Mailing Address: 2730 Peachtree Industrial Blvd, Ste 105 #3012 Duluth, GA 30097</p>
          {/*<p className="mb-5">
            <a href="tel:(678)951-9007" className="nounderline"><i className="fa fa-phone"></i> (678) 951-9007</a>
          </p>*/}
          <p>
            <a href="mailto:support@patientory.com" className="nounderline"><i className="fa fa-envelope"></i> support@patientory.com</a>
          </p>
        </div>
      </div>
      <h4 className={styles.legend}>Patientory empowers our end users with actionable insights from health data to improve outcomes.</h4>
    </Section>
  )
}
