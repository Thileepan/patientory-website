import classNames from "classnames";
import Section from "../components/common/section"

const Copyright = () => {
  return (
    <Section
      id="copyright"
      className={
        classNames({
          'copyright': true
        })
      }
    >
      <div
        className={
          classNames({
            'columns': true
          })
        }
      >
        <div className="column">
          <div className="columns">
            {/*<div className="column">
              <a href="/gdpr" className="">GDPR RIGHTS</a>&nbsp;&nbsp;&nbsp;<br/>
              <a href="/privacy" className="">PRIVACY POLICY</a>&nbsp;&nbsp;&nbsp;<br/>
              <a href="/terms">APPLICATION TERMS OF USE</a>&nbsp;&nbsp;&nbsp;<br/>
              <a href="/consent-medical-treatment" className="">CONSENT TO MEDICAL TREATMENT</a>
            </div>*/}
            <div className="column">
              <a href="/gdpr" className="">GDPR RIGHTS</a>&nbsp;&nbsp;&nbsp;<br/>
            </div>
            <div className="column">
              <a href="/privacy" className="">PRIVACY POLICY</a>&nbsp;&nbsp;&nbsp;<br/>
            </div>
            <div className="column">
              <a href="/terms">APPLICATION TERMS OF USE</a>&nbsp;&nbsp;&nbsp;<br/>
            </div>
            <div className="column">
              <a href="/consent-medical-treatment" className="">CONSENT TO MEDICAL TREATMENT</a>
            </div>
          </div>
          <h6>© 2025 Patientory Inc., All rights reserved.</h6>
        </div>
        {/*<div className="column">
          <div className="columns">
            <div className="column">
              <a href="/gdpr" className="">GDPR RIGHTS</a>&nbsp;&nbsp;&nbsp;<br/>
              <a href="/privacy" className="">PRIVACY POLICY</a>&nbsp;&nbsp;&nbsp;<br/>
              <a href="/terms">APPLICATION TERMS OF USE</a>&nbsp;&nbsp;&nbsp;<br/>
              <a href="/consent-medical-treatment" className="">CONSENT TO MEDICAL TREATMENT</a>
            </div>
          </div>
        </div>*/}
      </div>
    </Section>
  )
}

export default Copyright;