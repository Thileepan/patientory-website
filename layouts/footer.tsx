import classNames from "classnames";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { setFlagsFromString } from "v8";
import Section from "../components/common/section"
import { emailValidation } from "../utilities/validators";

interface Props {
  theme?: 'light' | 'dark'
}

const Footer = (props: Props) => {
  const [notCompliant, setNotCompliant] = useState(false);
  const [email, setEmail] = useState<string>(null);
  const {
    theme = 'light'
  } = props;

  const validate = (email: string): boolean => {
    if (emailValidation(email)) {
      setNotCompliant(true);
      return false
    } else {
      setNotCompliant(false);
      return true
    }
  }

  return (
    <Section
      id="footer"
      className={
        classNames({
          'footer': true
        })
      }
    >
      <div
        className={
          classNames({
            'subscribe': true
          })
        }
      >
        <div className="columns is-vcentered">
          <div className="column is-half">
            <h4>Subscribe to our newsletter for  the latest news & updates</h4>
          </div>
          <div className="column">
            <MailchimpSubscribe
              url="https://patientory.us14.list-manage.com/subscribe/post?u=6142e3f9afe8a69e181da7e12&amp;id=cdc66ef745"
              render={(hooks) => (
                <>
                  {
                    hooks.status != "success" &&
                    <>
                      <div className="form is-hidden-touch">
                        <div className="field is-grouped">
                          <p className="control is-expanded">
                            <input onChange={(e) => {
                              validate(e.target.value);
                              setEmail(e.target.value);
                            }} className="input" type="text" placeholder="Email"/>
                          </p>
                          <p className="control">
                            <button className="button mt-0 is-info is-submit" disabled={!notCompliant} onClick={e => {
                              e.preventDefault();
                              hooks.subscribe({ EMAIL: email });
                            }}>
                              Subscribe
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="form px-0 is-hidden-desktop">
                        <div className="field">
                          <p className="control is-expanded">
                            <input onChange={(e) => {
                              validate(e.target.value);
                              setEmail(e.target.value);
                            }} className="input" type="text" placeholder="Email"/>
                          </p>
                          <p className="control">
                            <button className="button mt-2 is-info is-submit" disabled={!notCompliant} onClick={e => {
                              e.preventDefault();
                              hooks.subscribe({ EMAIL: email });
                            }}>
                              Subscribe
                            </button>
                          </p>
                        </div>
                      </div>
                    </>
                  }
                  {
                    hooks.status == "success" &&
                    <span style={{ textAlign: "center", maxWidth: 780 }}>Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.</span>
                  }
                </>
              )}
            />
          </div>
        </div>
      </div>
      <div
        className={
          classNames({
            'secondary_menu': true
          })
        }
      >
        <div className="columns is-mobile is-multiline">
          <div className="column is-one-fourth-desktop is-full-mobile">
            <img src={theme === 'light' ? "/img/logo/big_dark.svg" : "/img/logo/big.svg"} alt="patientory horizontal logo"/>
          </div>
          <div className="column is-half-mobile">
            <h6><b>Company</b></h6><br/>
            <ul className="links montserrat">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about#careers">Careers</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="column is-half-mobile">
            <h6><b>Get Started</b></h6><br/>
            <ul className="links montserrat">
              <li><a href="/">Patientory Wallet</a></li>
              {/*<li><a href="/neith">Enterprise Solution</a></li>*/}
              
              <li><a href="/caretrials">CareTrials</a></li>
              <li><a href="https://patientory.careglp.com/partner/patientory">CareGLP</a></li>
              <li><a href="/caremeds">CareMeds</a></li>
              <li><a href="/carepharmacy">CarePharmacy</a></li>
              <li><a href="/carelabs">CareLabs</a></li>
              <li><a href="/fitbit">Complimentary Fitbit</a></li>
              <li><a href="https://carevalidate.jotform.com/242126131819855" target="_blank">Join Our Affiliate Program</a></li>
              <li><a target="_blank" href="//patientoryassociation.org/">Patientory Association</a></li>
              <li><a target="_blank" href="//ptoy.org/">$PTOY Token</a></li>
              <li><a target="_blank" href="//calendly.com/patientory-services">Request Demo</a></li>
            </ul>
          </div>
          <div className="column is-half-mobile">
            <h6><b>Services</b></h6><br/>
            <ul className="links montserrat">
              <li><a href="/services/pre-diabetes">Pre-Diabetes </a></li>
              <li><a href="/services/diabetes">Diabetes </a></li>
              <li><a href="/services/hypertension">Hypertension </a></li>
              <li><a href="/services/heart-health">Heart Health  </a></li>
              <li><a href="/services/cancer">Cancer </a></li>
              <li><a href="/services/chronic-kidney-disease">Chronic Kidney Disease  </a></li>
              <li><a href="/services/prevention-sexual-health">Prevention & Sexual Health   </a></li>
              <li><a href="/services/weight-management">Weight Management   </a></li>
            </ul>
          </div>
          <div className="column is-half-mobile">
            <h6><b>Who We Serve</b></h6><br/>
            <ul className="links montserrat">
            <li><a href="/enterprises/individuals">For Individuals</a></li>
              <li><a href="/enterprises/health-benefits-brokers">For Health & Benefits Brokers</a></li>
              <li><a href="/enterprises/self-insured-employers">For Self-Insured Employers</a></li>
              <li><a href="/enterprises/payors">For Payors</a></li>
              <li><a href="/enterprises/clinical-research-organization">For Pharmaceuticals / Clinical Research Organizations</a></li>
              <li><a href="/enterprises/federally-qualified-health-centers">For Federally Qualified Health Centers (FQHC)</a></li>
              <li><a href="/enterprises/sports-organizations">For Sports Organizations</a></li>
              <li><a href="/enterprises/pharmacy-benefit-managers">For Pharmacy Benefit Managers</a></li>
            </ul>
          </div>
          <div className="column is-half-mobile social-links text-center">
          {/*<div className="column is-one-third-desktop is-full-mobile social-links">*/}
            <h6><b>Social Media</b></h6><br/>
            <a href="https://discord.gg/MHgphjZaat" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-discord"></i>
              </span>
            </a>
            {/*<a className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-slack-hash"></i>
              </span>
            </a>*/}
            <a href="https://www.facebook.com/patientory" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-facebook"></i>
              </span>
            </a>
            <a href="https://www.twitter.com/patientory" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
            <a href="https://www.instagram.com/patientory_inc/" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-instagram"></i>
              </span>
            </a>
            <a href="https://www.youtube.com/channel/UCsTwOEvWGmSAhQ5OPG9kRQg" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-youtube"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/company/patientory" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-linkedin"></i>
              </span>
            </a>
            <a href="https://t.me/PTOYChat" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-telegram"></i>
              </span>
            </a>
            <a href="https://www.tiktok.com/@patientoryinc" className="button is-rounded social-icon">
              <span className="icon is-small">
                <i className="fab fa-tiktok"></i>
              </span>
            </a>
            <a href="https://zealy.io/cw/patientoryptoytoken/invite/3AYrtFzKjvmrTtgF4Kr40" className="button is-rounded social-icon">
              <span className="icon is-small">
                <svg 
                  role="img" 
                  aria-label="Logo" 
                  width="26" 
                  height="26" 
                  viewBox="0 0 84 80" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="fill-primary"
                  style={{ width: "50%" }}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M5.37693 7.24204L2.21093 7.07439L2.19659 10.2718L2.19499 10.9383C2.19404 11.4575 2.19278 12.3538 2.19152 13.8639C2.189 16.8839 2.18648 22.3606 2.18648 32.1883V33.4507L5.93775 37.234C4.45243 38.1765 2.96008 39.1081 1.46088 40.0289L0.0117395 40.919L0 61.9962L17.303 79.4581L18.4389 79.533C39.6703 80.9317 61.5054 79.3798 81.9636 72.2615L84 71.553V46.2255L79.5741 41.7618C80.3282 41.011 81.0806 40.2538 81.8275 39.492L82.7005 38.6015V37.3491C82.7005 36.4847 82.7031 31.9577 82.7056 27.6449L82.7114 17.974L64.8894 0L63.1155 0.599323C44.6964 6.82238 24.941 8.27802 5.37693 7.24204ZM64.0755 3.48918L79.6887 19.2356C79.6887 19.2356 79.6786 35.6178 79.6786 37.3491C78.9365 38.1061 78.1881 38.8592 77.4372 39.6067C76.7181 40.3225 75.9966 41.0331 75.2759 41.737L80.9781 47.4879V69.3804C61.0119 76.3276 39.6051 77.8732 18.6359 76.4917L3.02263 60.7351L3.03271 42.6319C4.74009 41.5832 6.43886 40.5206 8.12874 39.4436C9.00082 38.8879 9.87053 38.3283 10.7378 37.7649L5.2084 32.1883C5.2084 21.7569 5.21124 16.2286 5.21391 13.3372C5.21627 10.7806 5.21849 10.2856 5.21849 10.2856C6.22478 10.3388 7.23201 10.3856 8.23997 10.4256C27.065 11.1728 46.1422 9.54808 64.0755 3.48918Z" 
                    fill="currentColor"
                  />
                  <path 
                    id="zealy" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M5.21844 10.2855C25.0188 11.334 45.1819 9.87248 64.0754 3.48917L79.6887 19.2356C79.6887 19.2356 79.6786 35.6178 79.6786 37.3491C78.2256 38.8311 76.749 40.2981 75.2759 41.737L80.978 47.4879V69.3804C61.0119 76.3275 39.605 77.8732 18.6358 76.4917L3.02258 60.7351L3.03267 42.6319C5.62116 41.042 8.18985 39.4201 10.7378 37.7649L5.20836 32.1883C5.20836 12.5337 5.21844 10.2855 5.21844 10.2855Z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M73.6348 27.2004V35.9777C63.8941 45.3443 54.1535 53.5121 44.4229 60.7961C54.5967 60.1155 64.7603 58.4799 74.9442 55.5135C74.9442 58.7542 74.9442 61.9848 74.9442 65.2255C60.9023 69.3297 46.8706 70.884 32.8388 70.884C30.1191 70.884 27.3994 70.8231 24.6797 70.7113V61.9339C34.4203 55.6861 44.161 48.7882 53.8916 40.8947C46.8908 41.7988 39.8899 42.1849 32.8891 42.1849C30.8745 42.1849 28.87 42.1544 26.8554 42.0934C26.8554 38.8527 26.8554 35.6221 26.8554 32.3814C28.8498 32.4424 30.8343 32.4728 32.8288 32.4728C46.4274 32.4728 60.026 31.0201 73.6247 27.1902L73.6348 27.2004Z" 
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="column is-half-mobile">
            <h6><b>Certifications</b></h6><br/>
            <img src="/img/patientory/legitscript.png" alt="Patientory is Now LegitScript Certified"/>
          </div>
        </div>
      </div>

      
    </Section>
  )
}

export default Footer;