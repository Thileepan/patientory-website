import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import { BoardMembers } from '../../helpers/about/team/useBoard';
import styles from '../../styles/components/about/board.module.scss';

export default function Team() {
  return (
    <Section
      className={
        classNames({
          [styles.board]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <h1>
        Advisory Board
      </h1>
      <div
        className={
          classNames({
            [styles.board_members]: true,
            'columns': true,
            'is-multiline': true
          })
        }
      >
        <BoardMembers>
          {(member) => (
            <div
              className={
                classNames({
                  'column': true,
                  'is-one-quarter': true
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
                <figure className="image is-128x128">
                  <img src={member.src} alt={member.title} className="is-rounded"/>
                </figure>
                <h4 className="pt-4">
                  {member.title}
                  <a href={member.link}>
                    <span className="icon is-small">
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </h4>
                <h6>{member.description}</h6>
              </div>
            </div>
          )}
        </BoardMembers>
      </div>
    </Section>
  )
}