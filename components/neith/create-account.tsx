import React, { useState } from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/neith/create-account.module.scss';
import Form, { FormItem } from '../common/form';
import Button from '../common/button';
import { motion, useTransform, useViewportScroll } from "framer-motion"

// <div id="mc_embed_signup">
// <form >
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-FNAME">First Name </label>
// 	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-LNAME">Last Name </label>
// 	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-MMERGE3">Company </label>
// 	<input type="text" value="" name="MMERGE3" class="" id="mce-MMERGE3">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-MMERGE4">Role </label>
// 	<input type="text" value="" name="MMERGE4" class="" id="mce-MMERGE4">
// </div>
// <div class="mc-field-group input-group">
//     <strong>Accept Terms and Conditions </strong>
//     <ul><li><input type="checkbox" value="2" name="group[4561][2]" id="mce-group[4561]-4561-0"><label for="mce-group[4561]-4561-0">I Agree the Terms and Conditions</label></li>
// </ul>
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6142e3f9afe8a69e181da7e12_cdc66ef745" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='MMERGE4';ftypes[4]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></div>

export default function CreateAccount() {
  let [state, setState] = useState({ submitted: false });
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
  },{
    type: 'text',
    name: 'MMERGE3',
    placeholder: 'Company'
  }]

  return (
    <Section
      id="signup"
      className={
        classNames({
          [styles.create_account]: true
        })
      }
      containerClassName={styles.container}
    >
      <img src="/img/neith/account-creation.svg" alt="Account creation"/>
      <h2>Request a Demo</h2>
      <h4>Pick a day and time to demo our Neith Enterprise Solution for improving the clinical and financial state of your healthcare organization.</h4>
      {/*<div
        className={
          classNames({
            'columns': true,
            [styles.form_container]: true
          })
        }
      >
        {
          !state.submitted && 
          <Form
            className={styles.form}
            items={formItems}
            action="submit"
            url="https://patientory.us14.list-manage.com/subscribe/post?u=6142e3f9afe8a69e181da7e12&amp;id=cdc66ef745"
            onSubmit={(state) => {
              setState({ submitted: true })
            }}
            disclamer="By subscribing I give consent to be contacted by Patientory*"
          />
        }
        {
          state.submitted &&
          <span style={{ textAlign: "center", maxWidth: 780 }}>Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.</span>
        }
      </div>*/}
      <div
        className={
          classNames({
            'columns': true,
            [styles.form_container]: true
          })
        }
      >
      <motion.div style={{paddingTop: '2rem'}}>
          <Button title="Schedule Demo" action="https://calendly.com/sponsor-discovery-call"/>
        </motion.div>
        </div>
    </Section>
  )
}
