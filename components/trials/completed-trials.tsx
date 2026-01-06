import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/trials/trials.module.scss';
import Button from '../common/button';

export default function CompletedTrialList() {
    let trials = [
    {
        logo: '/img/trials/prokidney.webp',
        title: 'Type 2 Diabetes Mellitus',
        content: 'A Study of REACT in Subjects With Type 2 Diabetes Mellitus and Chronic Kidney Disease',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/44ECr4j'
    },
    {
        logo: '/img/trials/emd-serono.webp',
        title: 'Head and Neck Cancer',
        content: 'A Clinical Trial to Learn More About an Investigational Drug for Head and Neck Cancer',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3oTsHnI'
    },
    {
        logo: '/img/trials/insmed.webp',
        title: 'Mycobacterium Infections',
        content: 'Study to Evaluate ALIS (Amikacin Liposome Inhalation Suspension) in Participants With Nontuberculous Mycobacterial Lung Infection Caused by Mycobacterium Avium Complex',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/3SuEvaB'
    },
    {
        logo: '/img/trials/sitero.webp',
        title: 'Hepatic Encephalopathy',
        content: 'Study to Assess Rifaximin Soluble Solid Dispersion (SSD) for the Delay of Encephalopathy Decompensation in Cirrhosis',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3OwyvOj'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Cytomegalovirus (CMV)',
        content: 'A potential new vaccine may be able to protect your kids—and their kids—against CMV.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3ULbFSB'
    },
    {
        logo: '/img/trials/dizal-pharma.webp',
        title: 'Non-Small Cell Lung Cancer',
        content: 'A Trial to Evaluate DZD9008 as a Treatment for People with Non-Small Cell Lung Cancer with EGFR Gene Mutations',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/3WPfhoO'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Cytomegalovirus Infection (CMV)',
        content: 'A Cytomegalovirus (CMV) Investigational Vaccine Clinical Trial for Healthy Women Age 16 to 40',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3r8OBlp'
    },
    {
        logo: '/img/trials/ionis.webp',
        title: 'Hereditary Angioedema',
        content: 'A Phase 3 Double-Blind, Placebo-Controlled Study to Evaluate the Efficacy and Safety of ISIS 721744 in Patients with Hereditary Angioedema (HAE)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3U2jxQm'
    },
    {
        logo: '/img/trials/kinnate.webp',
        title: 'NSCLC/Melanoma',
        content: 'A Study to Evaluate KIN-2787 in Participants With BRAF and/or NRAS Mutation Positive Solid Tumors',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3mZMnC3'
    },
    {
        logo: '/img/trials/dizal-pharma.webp',
        title: 'Relapsed or Refractory Peripheral T Cell Lymphoma',
        content: 'A Phase I/II, Open-Label, Multicenter Study to Investigate the Safety, Tolerability, Pharmacokinetics and Anti-tumor Activity of AZD4205 in Patients with Peripheral T Cell Lymphoma (PTCL)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/34QueRs'
    },
    {
        logo: '/img/trials/seagen.webp',
        title: 'Diffuse Large B-cell Lymphoma',
        content: 'The purpose of this clinical research study is to test the drug brentuximab vedotin combined with lenalidomide and rituximab in patients with diffuse large B-cell lymphoma (DLBCL) that did not get better or that came back after treatment compared to treatment with lenalidomide and rituximab. ',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3Ey96vg'
    },
    {
        logo: '/img/trials/rezolute.webp',
        title: 'Diabetic Macular Edema',
        content: 'A Clinical Trial to Evaluate the Study Drug RZ402 as a Treatment for People with Diabetic Macular Edema (DME)',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/3Xz3ISS'
    },
    {
        logo: '/img/trials/kinnate.webp',
        title: 'Solid Tumor',
        content: 'Have you been diagnosed with cancer and screened for changes in a gene called FGFR2 and/or FGFR3?',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3hY6lxT'
    },
    {
        logo: '/img/trials/merz.webp',
        title: 'Lower Limb Spasticity',
        content: 'A clinical trial to evaluate NT 201 as a treatment for lower limb spasticity caused by stroke or traumatic brain injury (the PATTERN trial)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3WLA7ok'
    },
    {
        logo: '/img/trials/athria.webp',
        title: 'Alzheimer\'s Disease',
        content: 'A Clinical Trial to Learn More About an Investigational Treatment for Mild to Moderate Alzheimer’s Disease',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/3UGkvSD'
    },
    {
        logo: '/img/trials/leo.webp',
        title: 'Atopic Dermatitis',
        content: 'A Clinical Trial to Learn More About an Experimental Oral Treatment for Moderate to Severe Atopic Dermatitis',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3huDT6o'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Herpes Zoster',
        content: 'A Study to Evaluate the Safety, Reactogenicity, and Immunogenicity of mRNA-1468 in Healthy Adults ≥50 Years of Age',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/3DOtXgp'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'SARS-CoV-2',
        content: 'A clinical trial of investigational flu, RSV, and COVID-19 vaccines for adults 50–75 years of age',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/3Jb6MQE'
    },
    {
        logo: '/img/trials/bavarian-nordic.webp',
        title: 'COVID-19 Disease',
        content: 'The ABNCoV2 COVID-19 Booster Vaccine Trial',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3GQeJJt'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Epstein-Barr Virus Infection',
        content: 'A Study of an Epstein-Barr Virus (EBV) Candidate Vaccine, mRNA-1189, in 18- to 30-Year-Old Healthy Adults',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3GkkQSL'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'A clinical trial evaluating investigational mRNA vaccines in adults',
        content: 'A clinical trial conducted by Moderna is evaluating the safety and efficacy of investigational mRNA vaccines to better understand how they work in adults ages 18–75.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3NPC8eR'
    },
    {
        logo: '/img/trials/incyte.webp',
        title: 'Myelofibrosis',
        content: 'This is a Phase 3 clinical study investigating the safety and efficacy of a potential treatment for participants with Myelofibrosis (MF) who have suboptimal response while receiving ruxolitinib monotherapy.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3Fh71FD'
    },
    {
        logo: '/img/trials/seagen.webp',
        title: 'Hodgkin Disease',
        content: 'This trial will study brentuximab vedotin (BV) (Part E), to find out whether it is an effective treatment for Hodgkin Lymphoma. Patients in this study will have other conditions that make them unable to receive standard chemotherapy treatment.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/2QWNTbq'
    },
    {
        logo: '/img/trials/karyopharm.webp',
        title: 'Myelofibrosis',
        content: 'A Study to Evaluate Safety and Efficacy of Selinexor Versus Treatment of Physician\'s Choice in Participants With Previously Treated Myelofibrosis',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3OFtkYO'
    },
    {
        logo: '/img/trials/bavarian-nordic.webp',
        title: 'Respiratory Syncytial Virus Infections',
        content: 'The VANIR Study is a randomized, double-blind, phase 3 trial to assess the clinical efficacy and safety of the recombinant MVA-BN®-RSV vaccine in adults over 60.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3At2I9O'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'SARS-CoV-2',
        content: 'A Study to Evaluate Safety and Effectiveness of mRNA-1273 Vaccine in Healthy Children Between 6 Months of Age and Less Than 12 Years of Age',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3SgDsdI'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'An investigational COVID-19 vaccine study for adolescents',
        content: 'A research study to test an investigational vaccine that may protect adolescents between the ages of 12–17 from getting sick if they come in contact with the SARS-COV-2 virus, which causes COVID-19; also known as coronavirus.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3kKIzmJ'
    },
    {
        logo: '/img/trials/arcutis.webp',
        title: 'Atopic Dermatitis Eczema II',
        content: 'Trial of PDE4 Inhibition With Roflumilast for the Management of Atopic Dermatitis (INTEGUMENT-II)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3yZZDf7'
    },
    {
        logo: '/img/trials/arcutis.webp',
        title: 'Atopic Dermatitis Eczema I',
        content: 'Trial of PDE4 Inhibition With Roflumilast for the Management of Atopic Dermatitis (INTEGUMENT-I)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/32GfUth'
    },
    {
        logo: '/img/trials/checkmate.webp',
        title: 'Melanoma',
        content: 'This study is evaluating CMP-001 in combination with nivolumab in subjects with unresectable or metastatic melanoma.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/2XHivkU'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Respiratory Syncytial Virus',
        content: 'A Respiratory Syncytial Virus (RSV) vaccine study for children',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3xqaQnq'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Influenza Vaccine',
        content: 'A clinical trial of an influenza vaccine for volunteers ages 18 and older',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3HqX4Xp'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'SARS-CoV-2',
        content: 'A COVID-19 vaccine study for people who have received kidney or liver transplants',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3eZ91ps'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Respiratory Syncytial Virus',
        content: 'A clinical trial for an investigational respiratory syncytial virus (RSV) vaccine combined with an approved flu vaccine for older adults.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3PrKJFZ'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Respiratory Syncytial Virus (Older Adults)',
        content: 'A Respiratory Syncytial Virus (RSV) vaccine clinical trial for older adults',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3BEqS02'
    },
    {
        logo: '/img/trials/ucb.webp',
        title: 'Restless Legs Syndrome',
        content: 'A Study of Rotigotine Patch in Adolescent Subjects With Restless Legs Syndrome of Unknown Cause',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3o8wbiB'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Seasonal Influenza',
        content: 'A clinical trial conducted by Moderna is evaluating whether investigational mRNA vaccines may protect people from seasonal influenza, commonly called “the flu.” Seasonal flu is a common cause of sickness, severe illness, and even death.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3uXffy5'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Cytomegalovirus Infection',
        content: 'A Cytomegalovirus (CMV) Investigational Vaccine Clinical Trial for Healthy Women Age 16 to 40',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3r8OBlp'
    },
    {
        logo: '/img/trials/macrogenics.webp',
        title: 'Solid Tumor, Adult',
        content: 'The purpose of this study is to evaluate the safety, tolerability, and potential efficacy of MGD019 in patients with Squamous Cell Non-Small Cell Lung Cancer.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3H6IDWN'
    },
    {
        logo: '/img/trials/otsuka.webp',
        title: 'Neurobehavioral Disinhibition',
        content: 'Study to Assess the Efficacy, Safety, and Tolerability of AVP-786 for the Treatment of Neurobehavioral Disinhibition Including Aggression, Agitation, and Irritability in Patients With Traumatic Brain Injury',
        active: true,
        upcoming: false,
        link: 'http://bit.ly/2Nw6MjO'
    },
    {
        logo: '/img/trials/otsuka.webp',
        title: 'Schizophrenia',
        content: 'Efficacy, Safety, and Tolerability of AVP-786 for the Treatment of Negative Symptoms of Schizophrenia',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3ryi0lY'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Flu',
        content: 'A research study conducted by Moderna is testing an investigational vaccine that may protect people from Influenza, commonly called \'the flu\'. Seasonal flu is a common cause of sickness, severe illness, and even death.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3wes1e5'
    },
    {
        logo: '/img/trials/teva.webp',
        title: 'Asthma',
        content: 'A study of TEV-53275 given by subcutaneous (under the skin) injection in adult patients with eosinophilic asthma',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3mAt16H'
    },
    {
        logo: '/img/trials/boehringer-ingelheim.webp',
        title: 'Depressive Disorder, Major',
        content: 'A Home-based Study Using Mobile Technology to Test Whether BI 1358894 is Effective in People With Depression',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3me8MM4'
    },
    {
        logo: '/img/trials/seagen.webp',
        title: 'Hodgkin Lymphoma',
        content: 'A retreatment study with brentuximab vedotin in subjects with classical Hodgkin lymphoma or peripheral T cell lymphoma whose cancer got better after taking brentuximab vedotin, and subsequently got worse. ',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3pCfsWw'
    },
    {
        logo: '/img/trials/koralstudy.webp',
        title: 'Major Depressive Disorder',
        content: 'The goal of the study is to evaluate the safety and effectiveness of an investigational drug compared to placebo in patients with Major Depressive Disorder.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3ibJTOO'
    },
    {
        logo: '/img/trials/leo.webp',
        title: 'Atopic Dermatitis',
        content: 'A phase 2a, randomized, double-blind, placebo-controlled, multi-site, proof of concept trial to evaluate the efficacy and safety of LEO 138559 in adult subjects with moderate to severe atopic dermatitis (AD).',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3HgTaiy'
    },
    {
        logo: '/img/trials/adagio.webp',
        title: 'COVID-19',
        content: 'A Phase 2/3 Randomized, Double-blind, Placebo-Controlled Trial to Evaluate the Efficacy and Safety of ADG20 in the Prevention of COVID-19 (EVADE)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3CHpyct'
    },
    {
        logo: '/img/trials/89bio.webp',
        title: 'Severe Hypertriglyceridemia',
        content: 'This study is designed to assess the efficacy, safety and tolerability of different doses and dose regimens (every week or every 2 weeks) of BIO89-100 compared to placebo in subjects with SHTG. The study will separately evaluate the response to BIO89-100 in subjects who are not on fibrate therapy and subjects who remain on their current fibrate therapy.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3aa7LxQ'
    },
    {
        logo: '/img/trials/rezolute.webp',
        title: 'Congenital Hyperinsulinism',
        content: 'An Open-Label Multiple Dose Study of RZ358 in Patients with Congenital Hyperinsulinism',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/2Su4Yd9'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Human Metapneumovirus and Human Parainfluenza Infection',
        content: 'A Human Metapneumonovirus (hMPV) and Parainfluenza Virus Type 3 (PIV3) vaccine study for children',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3wunWza'
    },
    {
        logo: '/img/trials/seagen.webp',
        title: 'Carcinoma, Transitional Cell',
        content: 'A Study of Enfortumab Vedotin Alone or With Other Therapies for Treatment of Urothelial Cancer',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3wzyJZ8'
    },
    {
        logo: '/img/trials/seagen.webp',
        title: 'Metastatic Colorectal Adenocarcinoma',
        content: 'A Clinical Trial for HER2+ Metastatic Colorectal Cancer',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/31PMdlV'
    },
    {
        logo: '/img/trials/aclaris.webp',
        title: 'Rheumatoid Arthritis',
        content: 'This is a Phase 2 study to investigate the safety, tolerability, PK, and PD of ATI-450 plus methotrexate versus methotrexate alone in patients with moderate to severe RA.',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3hVOyVy'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'SARS-CoV-2',
        content: 'A Study to Evaluate Efficacy, Safety, and Immunogenicity of mRNA-1273 Vaccine in Adults Aged 18 Years and Older to Prevent COVID-19',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3wunWza'
    },
    {
        logo: '/img/trials/novavax.webp',
        title: 'SARS-CoV Infection, Covid19',
        content: 'A Study Looking at the Efficacy, Immune Response, and Safety of a COVID-19 Vaccine in Adults at Risk for SARS-CoV-2',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3xqaQnq'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Melanoma',
        content: 'An Efficacy Study of Adjuvant Treatment With the Personalized Cancer Vaccine mRNA-4157 and Pembrolizumab in Patients With High-Risk Melanoma (KEYNOTE-942)',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3eZ91ps'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Cytomegalovirus Infection',
        content: 'Dose-Finding Trial to Evaluate the Safety and Immunogenicity of Cytomegalovirus Vaccine mRNA-1647 in Healthy Adults',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/2Su4Yd9'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'SARS-CoV-2',
        content: 'A Study to Evaluate the Safety, Reactogenicity, and Effectiveness of mRNA-1273 Vaccine in Adolescents 12 to <18 Years Old to Prevent COVID-19',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3wzyJZ8'
    },
    {
        logo: '/img/trials/moderna.webp',
        title: 'Seasonal Influenza',
        content: 'A Study of mRNA-1010 Seasonal Influenza Vaccine in Healthy Adults',
        active: true,
        upcoming: false,
        link: 'https://bit.ly/3hVOyVy'
    }]
  return (
    <>
        <div style={{width: "100%", paddingLeft: "10%", paddingRight: "10%"}}><table className="table"><tr><th>Sponsor</th><th>Research Study</th></tr>
        {
            trials.map(trial => (
                <tr
                        className={
                            classNames({
                                [styles.container]: true
                            })
                        }
                    >
                        <td><img src={trial.logo} alt={trial.title} /></td>
                        <td><b>{trial.title}</b><div>{trial.content}</div></td>
                        {/*<td className="columns">
                            <div className="column">
                                <img src={trial.logo} alt="" />
                            </div>
                            <div className="column">
                                <p>
                                    <b>
                                        {trial.title}
                                    </b>
                                </p>
                                <p>
                                    {trial.content}
                                </p>
                                <p className={styles.status}>
                                    Status: <span className={
                                        classNames({
                                            [styles.accent]: trial.upcoming || trial.active
                                        })
                                    }>{trial.active ? 'Active' : trial.upcoming ? 'Upcoming' : 'Complete'} </span>
                                </p>
                                {
                                    trial.active &&
                                    <Button className={styles.button} title="Get Started" action={trial.link}></Button>
                                }
                            </div>
                        </td>*/}
                    </tr>
                
            ))
        }
        </table>

        <div className={styles.center}>
          <h2 className="pb-4">Clinical Trial Recruitment Sponsor Discovery Call</h2>
          <Button className={styles.center} title="Sponsor Demo Request" action="https://calendly.com/sponsor-discovery-call"></Button>
          <div className="pt-6"></div>
        </div>
        </div>
        
    </>
  )
}
