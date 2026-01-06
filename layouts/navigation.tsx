import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

interface Props {
  theme?: 'light' | 'dark'
}

const Navigation = (props: Props) => {
  const router = useRouter();
  const [active, setActive] = useState('/');
  const [opened, setOpened] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const {
    theme = 'light'
  } = props;

  const { scrollY } = useViewportScroll();
  const imageOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const smallImageOpacity = useTransform(scrollY, [0, 50, 150], [0, 0, 1]);
  const transform = useTransform(smallImageOpacity, value => -(10 * value));
  const smallTransform = useTransform(imageOpacity, value => 10 * value);

  const logo_source = theme === 'light' ? "/img/logo/big_dark.svg" : "/img/logo/big.svg";
  const logo_source_small = theme === 'light' ? "/img/logo/small_dark.svg" : "/img/logo/small.svg";

  const openMenu = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const activeClassname = (path: string) => {
    return classNames({
      'active': active === path
    })
  };

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
  }, [servicesOpen]);

  const toggleWhoWeServe = useCallback(() => {
    setWhoWeServeOpen(!whoWeServeOpen);
  }, [whoWeServeOpen]);

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname])

  return (
    <div id="nav">
      <div className="container">
        
        {/*<div className="desktop is-hidden-mobile">
          <div className="navigation-content">
            <img
              className="logo-touch is-hidden-desktop"
              src={logo_source} 
              alt="Patientory Logo"
            />
            <a href="/">Patientory Wallet</a>
            <a href="/neith" style={{"width": "200px"}}></a>
            <span className="filler is-hidden-desktop"/>
            <a href="/">
              <motion.img
                style={{
                  opacity: imageOpacity,
                  y: transform
                }}
                className="logo is-hidden-touch"
                src={logo_source}
                alt="Patientory Logo"
              />
              <motion.img
                style={{
                  opacity: smallImageOpacity,
                  y: smallTransform
                }}
                className="logo is-hidden-touch floating"
                src={logo_source_small}
                alt="Patientory Logo"
              />
            </a>
            <a classNames={activeClassname('/about')} href="/about">About</a>
            <a classNames={activeClassname('/contact')} href="/contact">Contact</a>
            <div className="dropdown_nav-item">
              Download
              <i className="fas fa-chevron-down"></i>
              <div className="dropdown_nav-item-content">
                <a href="https://apps.apple.com/us/app/patientory/id1583534430" className="option">Apple</a>
                <a href="https://play.google.com/store/apps/details?id=com.patientory.app" className="option">Android</a>
              </div>
            </div>
          </div>
        </div>*/}

      <div className="desktop is-hidden-mobile">
        <div className="navigation-content">
          <img
            className="logo-touch is-hidden-desktop"
            src={logo_source} 
            alt="Patientory Logo"
          />
          <div className="left-nav">
            <a href="/">Patientory Wallet</a>
            <div className="dropdown_nav-item">
              <span className="dropdown-link">
                Services
                <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown_nav-item-content">
                <a href="/services/pre-diabetes" className="option">Pre-Diabetes </a>
                <a href="/services/diabetes" className="option">Diabetes </a>
                <a href="/services/hypertension" className="option">Hypertension </a>
                <a href="/services/heart-health" className="option">Heart Health  </a>
                <a href="/services/cancer" className="option">Cancer </a>
                <a href="/services/chronic-kidney-disease" className="option">Chronic Kidney Disease  </a>
                <a href="/services/prevention-sexual-health" className="option">Prevention & Sexual Health   </a>
                <a href="/services/weight-management" className="option">Weight Management   </a>
              </div>
            </div>

            <div className="dropdown_nav-item">
              <span className="dropdown-link">
                Who We Serve
                <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown_nav-item-content">
                <a href="/enterprises/individuals" className="option">For Individuals</a>
                <a href="/enterprises/health-benefits-brokers" className="option">For Health & Benefits Brokers</a>
                <a href="/enterprises/self-insured-employers" className="option">For Self-Insured Employers</a>
                <a href="/enterprises/payors" className="option">For Payors</a>
                <a href="/enterprises/clinical-research-organization" className="option">For Pharmaceuticals / Clinical Research Organizations</a>
                <a href="/enterprises/federally-qualified-health-centers" className="option">For Federally Qualified Health Centers (FQHC)</a>
                <a href="/enterprises/sports-organizations" className="option">For Sports Organizations</a>
                <a href="/enterprises/pharmacy-benefit-managers" className="option">For Pharmacy Benefit Managers</a>
              </div>
            </div>
          </div>

          <div className="center-logo">
            <a href="/">
              <motion.img
                style={{
                  opacity: imageOpacity,
                  y: transform
                }}
                className="logo is-hidden-touch"
                src={logo_source}
                alt="Patientory Logo"
              />
              <motion.img
                style={{
                  opacity: smallImageOpacity,
                  y: smallTransform
                }}
                className="logo is-hidden-touch floating"
                src={logo_source_small}
                alt="Patientory Logo"
              />
            </a>
          </div>

          <div className="right-nav">
            <a className={activeClassname('/about')} href="/about">About</a>
            <a className={activeClassname('/contact')} href="/contact">Contact</a>
            <div className="dropdown_nav-item">
              <span className="dropdown-link">
                Resources
                <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown_nav-item-content">
                <a href="/fitbit" target="_blank" className="option">Complimentary Fitbit</a>
                <a href="/press" className="option">Press</a>
                <a href="/blog" className="option">Blog</a>
                <a href="/about#careers" className="option">Careers</a>
                <a href="https://ptoy.org" target="_blank" className="option">$PTOY Token</a>
                <a href="https://patientoryassociation.org" target="_blank" className="option">Patientory Association</a>
                <a href="/faq" className="option">FAQs</a>
              </div>
            </div>
            <a className={activeClassname('/download')} href="/download">Download</a>
            {/*<div className="dropdown_nav-item">
              <span className="dropdown-trigger">
                Download
                <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown_nav-item-content">
                <a href="https://apps.apple.com/us/app/patientory/id1583534430" className="option">Apple</a>
                <a href="https://play.google.com/store/apps/details?id=com.patientory.app" className="option">Android</a>
              </div>
            </div>*/}
          </div>
        </div>
      </div>


        <div 
          className={
            classNames({
              "mobile is-hidden-tablet": true,
              'opened': opened
            })
          }
        >
          <button
            className={
              classNames({
                'bars': true,
                'opened': opened
              })
            }
            onClick={openMenu}
          >
            <span className="bars_container">
              <span className="bar"/>
              <span className="bar"/>
              <span className="bar"/>
            </span>
          </button>
          <a href="/">
            <img
              className="logo-touch is-hidden-desktop"
              src={logo_source_small} 
              alt="Patientory Logo"
            />
          </a>
        </div>
        <div
          className={
            classNames({
              'mobile-navigation-content': true,
              'opened': opened,
              'is-hidden-tablet': true
            })
          }
        >
        {/*{active != "/" && (
          
        )}*/}
          <Link href="/">Patientory Wallet</Link>

          <div className="mobile-dropdown">
            <button onClick={toggleServices} className="dropdown-trigger">
              Services
              <i className={`fas fa-chevron-${servicesOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={classNames('dropdown-content', { 'is-active': servicesOpen })}>
              <Link href="/services/pre-diabetes">Pre-Diabetes</Link>
              <Link href="/services/diabetes">Diabetes</Link>
              <Link href="/services/hypertension">Hypertension</Link>
              <Link href="/services/heart-health">Heart Health</Link>
              <Link href="/services/cancer">Cancer</Link>
              <Link href="/services/chronic-kidney-disease">Chronic Kidney Disease</Link>
              <Link href="/services/prevention-sexual-health">Prevention & Sexual Health</Link>
              <Link href="/services/weight-management">Weight Management</Link>
            </div>
          </div>

          <div className="mobile-dropdown">
            <button onClick={toggleWhoWeServe} className="dropdown-trigger">
              Who We Serve
              <i className={`fas fa-chevron-${whoWeServeOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={classNames('dropdown-content', { 'is-active': whoWeServeOpen })}>
              <Link href="/enterprises/health-benefits-brokers">For Health & Benefits Brokers</Link>
              <Link href="/enterprises/self-insured-employers">For Self-Insured Employers</Link>
              <Link href="/enterprises/payors">For Payors</Link>
              <Link href="/enterprises/clinical-research-organization">For Pharmaceuticals / Clinical Research Organizations</Link>
              <Link href="/enterprises/federally-qualified-health-centers">For FQHCs</Link>
              <Link href="/enterprises/sports-organizations">For Sports Organizations</Link>
            </div>
          </div>

          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <div className="pt-6 has-text-centered">
            <Link href="https://apps.apple.com/us/app/patientory/id1583534430"><img width="30%" src="/img/patientory/download-appstore.png" alt="Downlaod from App Store" /></Link>
            <Link href="https://play.google.com/store/apps/details?id=com.patientory.app"><img width="36%" src="/img/patientory/download-playstore.png" alt="Downlaod from Play Store" /></Link>
          </div>
          

        </div>


      </div>
    </div>
  );
}

export default Navigation;