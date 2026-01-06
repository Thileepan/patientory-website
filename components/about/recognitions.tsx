import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import { RecognitionsMembers } from '../../helpers/about/recognitions/useRecognitions';
import styles from '../../styles/components/about/recognitions.module.scss';

export default function Recognitions() {
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
        Recognitions
      </h1>
      <div
        className={
          classNames({
            [styles.partners_members]: true,
            'columns': true,
            'is-multiline': true,
          })
        }
      >
        <RecognitionsMembers>
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
        </RecognitionsMembers>
      </div>
    </Section>
  )
}
