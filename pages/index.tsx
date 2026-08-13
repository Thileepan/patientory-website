import React, { useEffect, useRef, useState } from 'react';
import Route from '../layouts/route';
import Section from '../components/common/section';
import styles from '../styles/components/patientory/homeV2.module.scss';

const PRESS = [
  { src: '/img/patientory/healthcareitnews.webp', alt: 'Healthcare IT News' },
  { src: '/img/patientory/international-business-times.webp', alt: 'International Business Times' },
  { src: '/img/patientory/business-insider.webp', alt: 'Business Insider' },
  { src: '/img/patientory/forbes.webp', alt: 'Forbes' },
  { src: '/img/patientory/telegraph.webp', alt: 'Tech Telegraph' },
];

const BENTO = [
  {
    wide: true,
    tag: 'AI Health Coach',
    title: 'A care plan that actually knows you',
    text: 'Your AI health coach reads your records, wearables and habits, then builds a personalized care plan that adapts every day.',
    img: '/img/patientory/care-plan.webp',
    alt: 'AI care plan screen',
  },
  {
    tag: 'Rewards',
    title: 'Healthy choices earn $PTOY',
    text: 'Hit your goals, share your data on your terms, and watch the rewards stack up.',
    img: '/img/patientory/motivation.webp',
    alt: 'Rewards screen',
  },
  {
    tag: 'Records',
    title: 'Every record, one wallet',
    text: 'Your complete medical history — encrypted, portable, and always in your pocket.',
    img: '/img/patientory/medical-record.webp',
    alt: 'Medical records screen',
  },
  {
    tag: 'Health Score',
    title: 'One number that tells the whole story',
    text: 'Track your Health Score in real time and see exactly which habits move it up.',
    img: '/img/patientory/health-score.webp',
    alt: 'Health score screen',
  },
  {
    tag: 'Habits',
    title: 'Hydration, sleep & daily streaks',
    text: 'Simple trackers keep the small wins visible — and rewarded.',
    img: '/img/patientory/water-drinking-tracker.webp',
    alt: 'Water tracker screen',
  },
];

const MARKET = [
  {
    icon: 'fas fa-heartbeat',
    name: 'Plan',
    tagline: 'AI coaching, a daily Health Score and crypto rewards for staying on track.',
    body: [
      'Sign up for the Patientory Wallet CarePlan to receive AI Health Coach recommendations for better health. Track your body fitness metrics and get insights tailored to your unique health profile — your participation earns you rewards!',
      'Plus, gain access to clinical trials and cost-effective prescription drugs. Start your journey towards better health and savings today.',
    ],
    bullets: [],
    img: '/img/patientory/careplan.png',
    ctas: [
      { title: 'App Store', href: '/download', icon: 'fab fa-apple', primary: true },
      { title: 'Google Play', href: '/download', icon: 'fab fa-google-play', primary: false },
    ],
  },
  {
    icon: 'fas fa-flask',
    name: 'Trials',
    tagline: 'Get matched to clinical trials that fit your health profile — and earn rewards.',
    body: [
      'Clinical trials are needed globally to reduce disease burdens by helping to develop safe and effective new therapies and vaccines — your participation can help save millions.',
      'Your Patientory Wallet determines the best fit for clinical trial opportunities. Share your trial registration confirmation to receive in-app rewards.',
    ],
    bullets: [],
    img: '/img/patientory/caretrials.png',
    ctas: [
      { title: 'List of active trials', href: '/caretrials', icon: '', primary: true },
      { title: 'Sponsor Discovery Call', href: 'https://calendly.com/patientory-services/discovery-call', icon: '', primary: false },
    ],
  },
  {
    icon: 'fas fa-weight',
    name: 'GLP',
    tagline: 'GLP-1 weight-loss programs with 1:1 video coaching, delivered to your door.',
    body: [
      'CareGLP combines GLP-1 medications with personalized 1:1 video coaching to achieve optimal weight-loss results — medical treatment plus tailored lifestyle changes for long-term success. Meet your weight goals to earn rewards.',
    ],
    bullets: [
      'Quick approval process — no insurance needed',
      'Proven, effective weight-management program',
      'Affordable, competitive pricing',
    ],
    img: '/img/patientory/careglp.png',
    ctas: [
      { title: 'Start Your Journey', href: 'https://patientory.careglp.com/partner/patientory', icon: '', primary: true },
      { title: 'Nutrition Coaching', href: 'https://patientory.careglp.com/partner/patientory', icon: '', primary: false },
    ],
  },
  {
    icon: 'fas fa-capsules',
    name: 'Meds',
    tagline: 'Discounted medications through Mark Cuban Cost Plus Drugs.',
    body: [
      'Life-changing meds at unmatched prices. Access hundreds of vital medications at deeply discounted prices — life-saving drugs at the lowest possible cost, without compromising on quality. Powered by Mark Cuban Cost Plus Drug Company.',
      'Say goodbye to high prices and discover a more accessible way to manage your health. Your medication adherence earns you rewards.',
    ],
    bullets: [],
    img: '/img/patientory/life_changing.png',
    ctas: [
      { title: 'Buy Medications', href: '/caremeds', icon: '', primary: true },
      { title: 'Self-Insured Employer Discovery Call', href: 'https://calendly.com/patientory-services/self-insured-employer-discovery-call', icon: '', primary: false },
    ],
  },
  {
    icon: 'fas fa-prescription-bottle-alt',
    name: 'Pharmacy',
    tagline: 'A free Rx savings card accepted at pharmacies nationwide.',
    body: [
      'Get the Patientory Prescription Insurance Savings Card and enjoy significant discounts on eligible medications at participating pharmacies. The card makes it easier to afford the prescriptions you need, helping you save on essential treatments — start lowering your medication costs today.',
    ],
    bullets: [],
    img: '/img/patientory/pharmacy.png',
    ctas: [
      { title: 'Get Pharmacy Savings Card', href: '/carepharmacy', icon: '', primary: true },
    ],
  },
  {
    icon: 'fas fa-vial',
    name: 'Labs',
    tagline: 'At-home diagnostic tests with results synced straight to your wallet.',
    body: [
      'CareLabs delivers comprehensive home-based diagnostic testing that empowers you to make informed decisions about your health. Detailed biomarker analysis and a wide spectrum of diagnostic tests provide clear, actionable insights into your health status.',
      'Advanced testing helps identify potential health concerns early, track wellness progress and support preventive healthcare strategies — a deeper understanding of your overall well-being.',
    ],
    bullets: [],
    img: '/img/patientory/carelabs.png',
    ctas: [
      { title: 'Explore Lab Tests', href: '/carelabs', icon: '', primary: true },
    ],
  },
];

const STEPS = [
  {
    title: 'Connect',
    text: 'Link your providers, records and wearables. Everything lands in one encrypted wallet secured by the PTOYMatrix blockchain.',
  },
  {
    title: 'Understand',
    text: 'Your AI health coach turns raw data into a Health Score and a care plan you can actually follow.',
  },
  {
    title: 'Earn',
    text: 'Healthy actions and consented data sharing earn $PTOY — spend it on cost-reduced care across the marketplace.',
  },
];

export default function HomeV2() {
  const [activeMarket, setActiveMarket] = useState(0);
  const scrollyRef = useRef<HTMLDivElement>(null);

  // drive the active service from scroll progress through the tall section
  useEffect(() => {
    const onScroll = () => {
      const el = scrollyRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const idx = Math.min(MARKET.length - 1, Math.floor((scrolled / total) * MARKET.length));
      setActiveMarket(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToService = (i: number) => {
    const el = scrollyRef.current;
    if (!el) return;
    const top = window.pageYOffset + el.getBoundingClientRect().top;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    window.scrollTo({ top: top + (total * (i + 0.5)) / MARKET.length, behavior: 'smooth' });
  };

  return (
    <Route title="Home">
      <div className={styles.v2}>
        {/* ------------------------------------------------ hero */}
        <section className={`${styles.hero} ${styles.heroB}`}>
          <div className={styles.gridBg} />
          <div className={styles.wrap}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>
                  <span className={styles.dot} />
                  Web3 Health Wallet — live on iOS &amp; Android
                </span>
                <h1 className={styles.heroTitle}>
                  Own your health.
                  <br />
                  <span className={styles.gradient}>Get rewarded</span> for it.
                </h1>
                <p className={styles.heroSub}>
                  Patientory is your digital health passport — medical records, an AI
                  health coach, and a data marketplace that pays you in crypto for
                  every healthy choice you make.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.btnPrimary} href="/download">
                    <i className="fas fa-download" /> Get the app
                  </a>
                  <a className={styles.btnGhost} href="#marketplace">
                    Explore the marketplace <i className="fas fa-arrow-down" />
                  </a>
                </div>
                <div className={styles.heroTrust}>
                  <i className="fas fa-shield-alt" />
                  HIPAA &amp; GDPR compliant &nbsp;·&nbsp; Secured by the PTOYMatrix blockchain
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.orbit}>
                  <div className={styles.orbitSpin}>
                    <span className={styles.orbitBadge}>
                      <i className="fas fa-heartbeat" />
                    </span>
                  </div>
                </div>
                <img src="/img/patientory/phones.webp" alt="Patientory app" />
                <div className={`${styles.chip} ${styles.chipScore}`}>
                  <i className="fas fa-heartbeat" /> Health Score <b>87</b>
                </div>
                <div className={`${styles.chip} ${styles.chipPtoy}`}>
                  <i className="fas fa-coins" /> <b>+124 PTOY</b> earned
                </div>
                <div className={`${styles.chip} ${styles.chipSync}`}>
                  <i className="fas fa-check-circle" /> Records synced
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ press marquee */}
        <div className={styles.marquee}>
          <p className={styles.label}>As seen in</p>
          <div className={styles.marqueeTrack}>
            {[...PRESS, ...PRESS].map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} />
            ))}
          </div>
        </div>

        {/* ------------------------------------------------ bento features */}
        <Section id="features" className={styles.section}>
          <div className={styles.wrap}>
            <span className={styles.kicker}>The wallet</span>
            <h2 className={styles.sectionTitle}>
              One wallet. Every part of your health.
            </h2>
            <p className={styles.sectionSub}>
              Securely Connected. AI-Powered. Personalized. Rewarded.
            </p>
            <div className={styles.bento}>
              {BENTO.map((b) => (
                <div
                  key={b.title}
                  className={`${styles.bentoCard} ${b.wide ? styles.bentoWide : ''}`}
                >
                  <span className={styles.bentoTag}>
                    <i className="fas fa-circle" style={{ fontSize: 6 }} /> {b.tag}
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                  <div className={styles.bentoImg}>
                    <img src={b.img} alt={b.alt} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ------------------------------------------------ care marketplace */}
        <Section id="marketplace" className={`${styles.section} ${styles.market} ${styles.marketHead}`}>
          <div className={styles.wrap}>
            <span className={styles.kicker}>Care Health Data Marketplace</span>
            <h2 className={styles.sectionTitle}>
              Your wallet unlocks cheaper, smarter care.
            </h2>
            <p className={styles.sectionSub}>
              Six services, one login. Keep scrolling to explore them one by one.
            </p>
          </div>
        </Section>

        {/* tall scroll track — the console stays pinned while services rotate */}
        <div className={styles.scrolly} ref={scrollyRef}>
          <div className={styles.scrollySticky}>
            <div className={styles.wrap}>
              <div className={styles.marketShowcase}>
                <div className={styles.marketMenu}>
                  {MARKET.map((m, i) => (
                    <button
                      key={m.name}
                      type="button"
                      className={`${styles.menuItem} ${i === activeMarket ? styles.menuActive : ''}`}
                      onClick={() => scrollToService(i)}
                    >
                      <span className={styles.menuNum}>0{i + 1}</span>
                      <span className={styles.menuIcon}>
                        <i className={m.icon} />
                      </span>
                      <span className={styles.menuName}>
                        Care<b>{m.name}</b>
                      </span>
                    </button>
                  ))}
                </div>

                <div className={styles.marketStage}>
                {MARKET.map((m, i) => (
                  <div
                    key={m.name}
                    className={`${styles.stage} ${i === activeMarket ? styles.stageActive : ''}`}
                  >
                    <span className={styles.stageWatermark}>0{i + 1}</span>
                    <div className={styles.stageText}>
                      <h3 className={styles.stageName}>
                        Care<span>{m.name}</span>
                      </h3>
                      <p className={styles.stageTagline}>{m.tagline}</p>
                      {m.body.map((p) => (
                        <p key={p.slice(0, 24)} className={styles.stageBody}>
                          {p}
                        </p>
                      ))}
                      {m.bullets.length > 0 && (
                        <ul className={styles.detailBullets}>
                          {m.bullets.map((b) => (
                            <li key={b}>
                              <i className="fas fa-check-circle" /> {b}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className={styles.detailCtas}>
                        {m.ctas.map((c) => (
                          <a
                            key={c.title}
                            className={c.primary ? styles.btnPrimary : styles.btnGhost}
                            href={c.href}
                            target={c.href.startsWith('http') ? '_blank' : undefined}
                            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {c.icon ? <i className={c.icon} /> : null}
                            {c.title}
                          </a>
                        ))}
                      </div>
                    </div>
                      <div className={styles.stageImg}>
                        <img src={m.img} alt={`Care${m.name}`} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ how it works */}
        <Section id="how" className={styles.section}>
          <div className={`${styles.wrap} ${styles.centered}`}>
            <span className={styles.kicker}>How it works</span>
            <h2 className={styles.sectionTitle}>Three steps to owning your data.</h2>
            <div className={styles.steps}>
              {STEPS.map((s, i) => (
                <div key={s.title} className={styles.step}>
                  <div className={styles.num}>0{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ------------------------------------------------ security band */}
        <div className={styles.secure}>
          <div className={styles.wrap}>
            <div className={styles.secureRow}>
              <span><i className="fas fa-shield-alt" /> HIPAA compliant</span>
              <span><i className="fas fa-user-shield" /> GDPR compliant</span>
              <span><i className="fas fa-cubes" /> PTOYMatrix blockchain</span>
              <span><i className="fas fa-key" /> You control access</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ final CTA */}
        <Section id="download" className={styles.cta}>
          <div className={styles.wrap}>
            <div className={styles.ctaPanel}>
              <h2>
                Your health. Your data.
                <br />
                <span>Your rewards.</span>
              </h2>
              <p>
                Join the Web3 era of healthcare. Download Patientory and start
                earning for the healthy choices you already make.
              </p>
              <div className={styles.ctaActions}>
                <a className={styles.storeBtn} href="/download">
                  <i className="fab fa-apple" />
                  <span>
                    <small>Download on the</small>
                    <b>App Store</b>
                  </span>
                </a>
                <a className={styles.storeBtn} href="/download">
                  <i className="fab fa-google-play" />
                  <span>
                    <small>Get it on</small>
                    <b>Google Play</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Route>
  );
}
