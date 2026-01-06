import classNames from 'classnames'
import React, { useState } from 'react'
import Section from '../common/section'
import styles from '../../styles/components/neith/supply.module.scss';
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
  title: 'List of Medications',
  data: [{
    type: 'text',
    content: 'We provide bulk quantities of pharmaceutical therapies used in treating infections through our global partnerships with leading laboratories. Please inquire for more information.'
  },{
    type: 'link',
    content: "Request full list",
    action: "/"
  }]
},{
  title: 'Rapid Diagnostic Test Kits',
  data: [{
    type: 'list',
    content: [
      "nCoV One step RT-PCR",
      "COVID-19 Ag Rapid FIA",
      "COVID-19 IgG/IgM Rapid Gold",
      "COVID-19 Total Ab EIA",
      "COVID-19 IgM Ab EIA",
    ]
  }]
},{
  title: 'Personal Protection Equipment (PPE)',
  data: [{
    type: 'list',
    content: [
      "Air Purifying Mchines",
      "Hair Covers",
      "N-95 Masks / Equivalent",
      "Thermometers (Regular/No-touch)",
      "Sanitizing Spray",
      "Surgical GownsGloves (Latex/Nitrile)Tyvek Suits",
      "Hospital beds",
      "Vantilators",
      "Face shields",
      "Negative Pressure Machines",
      "Safety Goggles",
      "Sanitizing Wipes",
      "Surgical Masks",
      "Sanitation Units",
      "Shoe Covers"
    ]
  }]
}]

export default function Supply() {
  const [activeSection, setSection] = useState(0);

  return (
    <Section
      id="distribution"
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
      <h2>Global Pharma & <br className="is-hidden-touch"/>Medical Supply <br className="is-hidden-touch"/>Distribution</h2>
      <h5 className={styles.subtitle}>*This list is not exhaustive. The following are featured items from our stock - contact us for a full-list of our offerings.</h5>
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
