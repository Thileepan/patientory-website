import classNames from "classnames";
import React from "react";
import PressContent from "../../components/career-detail/content";
import Hero from "../../components/career-detail/hero";
import Form, { FormItem } from "../../components/common/form";
import Section from "../../components/common/section";
import { CareerPost } from "../../helpers/career/useCareerPost";
import styles from '../../styles/components/career-detail/main.module.scss';

export default function Blog() {
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
          [styles.career_detail]: true
        })
      }
    >
      <CareerPost>
        {(post) => {
          const {
            content,
            ...rest
          } = post;

          return (
            <div className="columns">
              <div className="column">
                <Hero {...rest}/>
                
                <PressContent
                  content={post.content}
                />
                <b>If you are eligible and interested on this job, please send your resume to <a href="mailto:careers@patientory.com">careers@patientory.com</a></b>
              </div>
              {/*<div className="column is-one-third">

                {<Form
                  url="https://patientory.us14.list-manage.com/subscribe/post?u=6142e3f9afe8a69e181da7e12&amp;id=cdc66ef745"
                  className={
                    classNames({
                      "sticky": true,
                      [styles.form]: true
                    })
                  }
                  items={formItems}
                  action="submit"
                  onSubmit={() => {}}
                  disclamer="By subscribing I give consent to be contacted by Patientory*"
                />}
              </div>*/}
            </div>
          )
        }}
      </CareerPost>
    </Section>
  )
}