import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import { MembershipsMembers } from '../../helpers/about/memberships/useMemberships';
import styles from '../../styles/components/about/memberships.module.scss';

export default function Partners() {
  return (
    <Section
      className={
        classNames({
          [styles.memberships]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <h1>
        Memberships
      </h1>
      <div
        className={
          classNames({
            [styles.memberships_members]: true,
            'level': true,
          })
        }
      >
        <MembershipsMembers>
          {(member) => (
            <div
              className={
                classNames({
                  'level-item': true,
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
        </MembershipsMembers>
      </div>
    </Section>
  )
}
