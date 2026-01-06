import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/neith/orders.module.scss';
import Form, { FormItem } from '../common/form';

export default function Orders() {
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
      id="order"
      className={
        classNames({
          [styles.orders]: true
        })
      }
      containerClassName={styles.container}
    >
      <img src="/img/neith/account-creation.svg" alt="Account creation"/>
      <h2>Interested? <br className="is-hidden-touch"/>Place an order</h2>
      <h4>Disclaimer: These products are for Professional <br className="is-hidden-touch"/>Medical Use Only. Find more products on Amazon Seller Account:</h4>
      <div
        className={
          classNames({
            'columns': true,
            [styles.form_container]: true
          })
        }
      >
        <Form
          className={styles.form}
          items={formItems}
          action="submit"
          url="https://patientory.us14.list-manage.com/subscribe/post?u=6142e3f9afe8a69e181da7e12&amp;id=cdc66ef745"
          onSubmit={() => {}}
          disclamer="By subscribing I give consent to be contacted by Patientory*"
        />
      </div>
    </Section>
  )
}
