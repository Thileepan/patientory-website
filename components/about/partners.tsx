import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import { PartnersMembers } from '../../helpers/about/partners/usePartners';
import styles from '../../styles/components/about/partners.module.scss';

export default function Partners() {
  return (
    <Section
      className={
        classNames({
          [styles.partners]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <h1>
        Partners
      </h1>
      <div
        className={
          classNames({
            [styles.partners_members]: true,
            'columns': true,
            'is-multiline': true
          })
        }
      >
        <PartnersMembers>
          {(member) => (
            <div
              className={
                classNames({
                  'column': true,
                  'is-one-fifth': true
                })
              }
            >
              <div
                className={
                  classNames({
                    [styles.member]: true
                  })
                }
              >
                <img src={member.src} alt={member.title}/>
              </div>
            </div>
          )}
        </PartnersMembers>
      </div>
    </Section>
  )
}
