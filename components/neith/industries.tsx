import classNames from 'classnames'
import React, { useState } from 'react'
import Section from '../common/section'
import styles from '../../styles/components/neith/industries.module.scss';
import Button from '../common/button';
import Accordion from '../common/accordion';

type Section = {
  title: string,
  data: {
    type: string,
    content: string | string[]
    action?: string
  }[]
}

const sections: Section[] = [{
    title: 'Pharma / CRO',
    data: [{
        type: 'text',
        content: 'Gain direct access to population health data and recruit instantaneously for clinical trials.'
    }]
  },{
    title: 'Employer / Insurer',
    data: [{
      type: 'text',
      content: 'Close care gaps and drive meaningful engagement that improves overall health and productivity for your workforce and member populations.'
    }]
  },{
    title: 'Providers / Health Systems',
    data: [{
      type: 'text',
      content: 'Use advanced insights into social determinants of health to curate and personalize preventative care programs. '
    }]
  }]

export default function Industries() {
  const [activeSection, setSection] = useState(0);

  return (
    <Section
      id="industries"
      className={
        classNames({
          [styles.supply]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <h2>Industries</h2>
      <div className="is-hidden-desktop">
        <Accordion
          className={
            classNames({
              [styles.accordion]: true 
            })
          }
          data={sections.map(item => {
            return {
              title: item.title,
              paragraph: item.data
            }
          })}
        />
      </div>
      <div className="is-hidden-touch">
        {
          sections.map((section, idx) => (
            <section
              key={idx + "_supply_section"} 
              className={
                classNames({
                  [styles.supply_section]: true,
                  'columns': true
                })
              }
            >
              <div className="column">
                <a onClick={() => setSection(idx)}>
                  <h3>{section.title}</h3>
                </a>
              </div>
              <div
                className={
                  classNames({
                    "column": true,
                    [styles.content_column]: true,
                    [styles.opened]: activeSection === idx
                  })
                }
              >
                {
                  section.data.map((item, idx) => {
                    switch (item.type) {
                      case 'text': 
                        return <p key={idx + 'suplly_section_item'}>{item.content}</p>
                      case 'list':
                        const temp = [...(item.content as string[])]
                        const a = temp
                        const b = a.splice(0, 9)
                        return (
                          <div key={idx + 'suplly_section_item'} className="columns">
                            <div className="column">
                              <ul>
                                {
                                  b.map(
                                    (i, idx) => (
                                      <li key={idx + 'suplly_section_item_list_item'}>
                                        <p>{i}</p>
                                      </li>
                                    )
                                  )
                                }
                              </ul>
                            </div>
                            <div className="column">
                              <ul>
                                {
                                  a.map(
                                    (i, idx) => (
                                      <li key={idx + 'suplly_section_item_list_item'}>
                                        <p>{i}</p>
                                      </li>
                                    )
                                  )
                                }
                              </ul>
                            </div>
                          </div>
                        )
                      case 'link': 
                        return <Button className={classNames({[styles.action]: true})} light title={item.content as string} action={item.action} />
                    }
                  })
                }
              </div>
            </section>
          ))
        }
      </div>
    </Section>
  )
}
