import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Route from '../layouts/route';

export interface DetailedHTMLProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  name?: String
}

const Privacy = () => {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        if (!markdown) {
            fetch('/docs/privacy.md')
                .then(res => res.text())
                .then(text => setMarkdown(text))
        }
    }, [markdown])

    return (
        <Route title="Privacy Policy">
            <section className="section privacy">
                <div className="container has-text-centered content">
                    <h1>
                        CONSENT TO MEDICAL TREATMENT
                    </h1>
                    {/*<ReactMarkdown className="has-text-left md-content">
                        {markdown}
                    </ReactMarkdown>*/}

                    {/*<h4>GDPR Data Processing Addendum Terms & Conditions</h4>*/}
<div className="has-text-left">
{/*<p>Effective Date:<b>09/2018</b></p>*/}

<a data-name="key-definitions"><h4>1. OVERVIEW</h4></a>

<p>
    Patientory, Inc (“Patientory”) facilitates a connection for users (“users” or “you” or “patient”) to obtain certain Health Care Services (“Health Care Services” or “Services”) from contracted Business Associate Health Care Providers (“Health Care Providers”) via Patientory’s decentralized mobile application, dApp (“Application” or “dApp”).
</p>

<a data-name="key-definitions"><h4>2. FACILITATIONS AND LIMITATIONS OF HEALTH CARE SERVICES</h4></a>
<p>Health Care Providers use dApp to facilitate medical treatment via telemedicine/telehealth or diagnostic procedures in the United States including Washington, DC in the following methods:</p>

<p>Direct Messaging- Health Care Providers may communicate with the user via the Application’s direct messaging functionality. This is the primary method of communication. This method of communication may spur further interactions including video conference, audio communication (including telephone), and store and forward technologies.</p>

<p>Store and Forward Technologies- The user may enter data about themselves through direct or indirect channels which will be shared with the Health Care Provider to augment care.</p>

<p>Video Conference- Health Care Providers may use dApp to coordinate or host a video conference to complete medical services. This service may not be available within the mobile application.</p>

<p>Note that Patientory does not guarantee the availability of the delivery methods listed above.</p>
<p><b>IF YOU ARE IN THE UNITED STATES AND ARE EXPERIENCING A MEDICAL EMERGENCY OR A POTENTIAL MEDICAL EMERGENCY, PLEASE CALL 911 AND SEEK IMMEDIATE EMERGENCY MEDICAL HELP.</b> The delivery methods of medical treatment in the Application are not appropriate for emergent or potentially emergent medical situations. The form of medical treatment delivered in the Application may not be appropriate for certain types of patients and conditions. Health Care Providers may discontinue care if they believe that the limitations of services significantly degrades the quality of care for the user.</p>
<p>By using the Application, it is understood that the Health Care Services will be delivered via the methods described above, and that there are limitations to the technology and the process of telemedicine and diagnostics, including the potential for incomplete exchange or loss of information. Also, it is understood that in the course of a medical evaluation, only information that is presented to the Health Care Provider at the exact time of service can be used, and Patientory, Health Care Providers and affiliates, are not responsible for liabilities related to critical medical information that is omitted by the patient or that is not gathered during the consultation. Attempts to gather medical data could be made by Patientory and Health Care Providers, but obtaining all relevant data cannot be guaranteed.</p>
<p>As with any medical procedure, there may be potential risks associated with the use of services. These risks include, but may not be limited to:</p>
<p>Information transmitted may not be sufficient (e.g., poor resolution of images) to allow for appropriate medical decisions to be made by the provider.</p>
<p>The provider may not be able to offer medical treatment to the patient using telemedicine equipment nor provide for, or arrange for, any emergency care that may be required.</p>
<p>Delays in medical evaluation and treatment can occur due to deficiencies or failures of the diagnostic equipment or software.</p>
<p>Security protocols can fail, causing a breach of privacy of confidential medical information.</p>
<p>A lack of access to complete medical records may result in errors in medical judgment.</p>

<a data-name="key-definitions"><h4>3. GENERAL TERMS OF HEALTH CARE SERVICES</h4></a>
<p>Health Savings Accounts, Insurance providers and payers including but not limited to Medicare, Medicaid, and Medi-cal, or Flexible Spending Accounts may be accepted. If verified Patientory will bill via the company’s NPI# 1477173706. Although, payment is the responsibility of the patient or patient representative.</p>
<p>Workers compensation cases cannot be facilitated with the Application.</p>
<p>If at any time before, during, or after the services there is concern for a medical emergency, or if the patient’s medical condition is worsening, it is understood that immediate local emergency services will be obtained at the sole discretion and liability of the patient or patient’s guardian.</p>
<p>The patient and / or guardian have the right to inspect all information obtained and recorded during the course of a service, and may receive copies of this information for a reasonable fee. Such inspection and copying of records shall be subject to Health Care Provider’s or affiliate’s policies and procedures.</p>
<p>The anticipated benefits, diagnoses and results of care from the use of services cannot be guaranteed. If the medical condition of the patient is not improved, then the patient will seek local emergency care as needed and as decided by the patient or guardian.</p>
<p>It is understood that the patient’s condition may require a referral to a specialist for further evaluation and treatment.</p>
<p>It is understood that medical or medical education services are provided by physicians who are not employees of Patientory, Inc, and may not be employees of Health Care Providers. Such physicians are solely responsible for ensuring any medical or medical educational services are provided in compliance with applicable state law and medical license requirements, and within the applicable standard of care. Patientory, Inc is not responsible for the delivery of healthcare, or the quality of healthcare delivered by healthcare providers utilizing the Application.</p>
<p>It is understood that there are alternatives to using services for medical care needs.</p>

<a data-name="key-definitions"><h4>4. CONSENT FOR MEDICAL TREATMENT FROM HEALTH CARE PROVIDER VIA APPLICATION AND PAYMENT POLICIES</h4></a>
<p>I, the individual as identified by first name and last name, hereby authorize HEALTH CARE PROVIDERS and whoever they designate as their assistants to medically treat me and perform diagnostic tests. I understand and agree that health insurance policies are an arrangement between an insurance carrier and myself. I understand that HEALTH CARE PROVIDERS will attempt to bill services to insurance carriers and/or prepare any necessary reports and forms to assist me in making a collection from my insurance company. I understand and agree that all services rendered to me are charged directly to me, and I am personally responsible for payment. I understand that HEALTH CARE PROVIDERS will attempt to verify insurance coverage, but that is not a guarantee of payment or authorization. I understand and agree that there are certain services available to me within the Application, including but not limited to genetic testing, which I may choose to self pay for. In the event that I self pay for a service and then subsequently submit a claim for said service to my insurance carrier, and the claim is paid to HEALTH CARE PROVIDERS by the insurance carrier, I will be issued a refund from HEALTH CARE PROVIDERS. In this circumstance, the amount refunded to me by HEALTH CARE PROVIDERS will be the amount of my original payment or the amount of the insurance carrier payment, whichever is less.</p>

<a data-name="key-definitions"><h4>5. ACKNOWLEDGEMENT OF RECEIPT OF NOTICE OF PRIVACY PRACTICES</h4></a>
<p>
    I certify that I am aware that the Notice of Privacy Practices describes the types of uses and disclosures of any protected health information that might occur in my treatment, payment of my bills or in the performance of Health Care Provider’s health care operations. The Notice of Privacy Practices also describes my rights and Health Care Provider’s duties with respect to my protected health information. The Notice of Privacy Practices is posted within the Application. Health Care Providers reserve the right to change the privacy practices that are described in the Notice of Privacy Practices. I may obtain the notice or a revised Notice of Privacy Practices within the Application or by communicating via direct messaging. I certify that I am also aware of the Terms of Services, Notice of Privacy Practices, Authorization to Release Medical Information, and Authorization of Marketing and understand I must agree to all in order to use the Application.
</p>

<a data-name="key-definitions"><h4>6. PATIENTORY AND HEALTH CARE PROVIDER CONTACT POLICY</h4></a>
<p>Patientory and Health Care Providers may contact you by telephone at any telephone number associated with your account, including wireless telephone numbers, which could result in charges to you. Patientory Health Care Providers may also contact you by sending text messages or emails, using any email address you provide to us. Methods of contact may include using pre-recorded/artificial voice messages and/or use of an automatic dialing device, as applicable.</p>
<h4>Who is our Medical Team?</h4>
<p>
    <ul>
        <li>
            <p>We are supported by Beluga Health, a team of medical professionals operating across the country and certified in all 50 states to practice medicine. Please make sure you check to see our shipping availability for your state.</p>
        </li>
        <li>
            <p>Medical Provider: Beluga Health | Provider: Dr. Jonah Mink | Phone: <a href="tel:618.740.4204">618.740.4204</a> | <a href="http://www.belugahealth.com" target="_blank">www.belugahealth.com</a></p>
        </li>
    </ul>
</p>
<h4>Who are our Pharmacy Providers?</h4>
<p>
    <ul>
        <li>
            <p>We are partnered with Belmar Pharmacy to bring the best product and overall experience to our membership. We speak with our pharmacies weekly to discuss any product shortages, shipping delays, and get updated reports on their medication testing.</p>
        </li>
        <li>
            <p>Belmar Pharmacy - Phone: <a href="tel:800-525-9473">800-525-9473</a> | Website: <a href="http://belmarpharmasolutions.com" target="_blank">belmarpharmasolutions.com</a> | Address: 231 Violet St suite 140, Golden, CO 80401</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>7. MARKETING OVERVIEW</h4></a>
<p>Patientory partners with Health Care Providers in an effort to deliver low-cost or no-cost health care services to users. To properly fund and scale such a delivery model via the Application, marketing materials may be delivered to you while you use the Application. Examples of such marketing materials may include but are not limited to: Links, advertisements, videos, articles, games. Examples may also include: Educational content/ materials about pharmaceuticals, health products, health services, foods/ beverages, goods, research studies, companies, events. Marketing materials provided by Patientory may be for financial remuneration.</p>
<p>Marketing materials may also be used in an effort to encourage regular use of the Application. (This may include email reminders or alerts reminding you to check the Application.) These communications will never disclose Protected Health Information.</p>
<p>Health Care Providers, nor their Business Associates, including Patientory, sell your Protected Health Information to third parties.</p>

<a data-name="key-definitions"><h4>8. HEALTH CARE DELIVERY METHODS OVERVIEW</h4></a>
<p>Health Care Providers offer health care services through alternative methods than the Application, and services from Health Care Providers are made available through other channels, which would not require you to agree to this Authorization or use Kyla.</p>

<a data-name="key-definitions"><h4>9. CONSENT TO OPT IN FOR MARKETING MATERIALS BASED OFF OF MY PROTECTED HEALTH INFORMATION</h4></a>
<p>I consent and opt- in for marketing materials, and hereby agree to allow Lifetime and its Business Associates, including Lifetime App, Inc, to use my Protected Health Information for Marketing purposes as described in Authorization of Marketing.</p>
<p>By engaging with the toggle in the application, I, the user identified, hereby agree to these terms and conditions as set forth in sections 1 through 9 of this Consent to Medical Treatment document and consent to medical treatment.</p>

<a data-name="key-definitions"><h4>TERMS OF SERVICE</h4></a>
<p>THIS TERMS OF SERVICE DOCUMENT, AS AMENDED FROM TIME TO TIME (“TERMS” OR “TOS”), ARE A BINDING CONTRACT BETWEEN LifeTime App, Inc, ITS AFFILIATES, AND ITS SUBSIDIARIES WITH RESPECT TO ITS APPLICATION SERVICE (collectively, “Lifetime” or “we” or “our” or “Us”) AND YOU (“you” or “user”, collectively “users”). YOU MUST READ AND AGREE TO THESE TERMS, INCLUDING THE PRIVACY POLICY BEFORE USING THE KYLA APPLICATION (the “Application” or “Kyla” or “Mobile Application” or the “SITE”) AND ANY SOFTWARE, TOOLS, PRODUCTS, SERVICES, FEATURES, OR FUNCTIONALITY MADE AVAILABLE BY LIFETIME (COLLECTIVELY, THE “SERVICE”). BY USING THE SERVICE, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.</p>

<a data-name="key-definitions"><h4>1. DESCRIPTION OF SERVICE; MINIMUM AGE REQUIREMENT; LOCATION REQUIREMENT</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Description of Service.</b> The Application provides users with four core functionalities:</p>
            <p>The Application is a lifestyle app that educates, engages, and empowers users to make healthy choices in their life. The Application helps users take action to make the most of their life, their time, their body and their health.</p>
            <p>The Application provides and facilitates a connection for users to obtain limited health care services available via communication within the Application (“Health Care Services”) with contracted Health Care Provider Business Associates (“Health Care Providers”).</p>
            <p>The Application securely stores user information in order to generate appropriate content, generate recommendations, and may offer marketing materials which can augment interactions with Health Care Providers.</p>
            <p>The Application educates users about research based or experimental studies, activities, tests, or products that deviate from the traditional medical standard of care which may encompass cutting edge, science based technologies to identify individual health risks, which may create a basis for early detection and prevention of diseases in adults. (“Research Services”).</p>
        </li>
        <li>
            <p><b>B. Age Requirement.</b> You must be at least eighteen (18) years old to use the Service independently. By using the Service independently, you hereby represent that you are at least eighteen (18) years old.</p>
        </li>
        <li>
            <p><b>C. Location Requirement.</b> The Service may only be used in the state of California.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>2. MODIFICATIONS TO TERMS</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Procedure.</b> At any time Patientory may change or update these Terms, which include: (i)-This Terms of Service which includes a privacy policy. (ii)-Notice of Privacy Practices. (iii)-Consent to Medical Treatment. (iv)-Authorization to Release Medical Information. (v)-Authorization of Marketing. (vi)- Kyla Authorization for Use and/or Disclosure of Protected Health Information. We will provide notice to you of any material change or update in the Terms by posting notice to the Service and/or by email. Your continued use of the Service after our notice to you of a change in the Terms means that you have agreed to the amended or updated Terms.</p>
        </li>
        <li>
            <p><b>B. Obligation to Stay Current.</b> We encourage you to check back regularly to review these Terms.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>3. MODIFICATIONS TO SERVICE</h4></a>
<p>We reserve the right to change the Application, modify or discontinue, and restrict or block access to, the Service without notice to you. We may modify or remove any Content (as defined below) from the Service at any time without notice to you, including the removal of Content for any reason.</p>
<p>Occasionally, there may be information on the Service that contains typographical errors, inaccuracies or omissions. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information if any such information on the Service or on any related website or Mobile Application is inaccurate at any time without prior notice. We undertake no obligation to update, amend or clarify information in the Service or on any related website or Mobile Application, except as required by applicable local, state, federal or international laws, regulations, or statutes (collectively, “Applicable Law”). No specified update or refresh date applied to the Service or on any related website or Mobile Application should be taken to indicate that all information on the Service or on any related website or Mobile Application has been modified or updated.</p>

<a data-name="key-definitions"><h4>4. CONTENT</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Content Protected by Intellectual Property Rights; No Warranty.</b> Any content available through the Service, including tools, action cards, Mobile Applications, software, text, audio, video, pictures, graphics, music, sound clips, images, and other works of authorship (collectively, “dApp Content”) is protected by the intellectual property rights of Patientory, its licensors, or external 3rd parties. Patientory, ITS LICENSORS, AND ITS SUPPLIERS MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT:</p>
            <p>i. THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE CONTENT; OR</p>
            <p>ii. THE SATISFACTION OF ANY LAWS REQUIRING DISCLOSURE OF INFORMATION ON PRESCRIPTION DRUGS OR OTHER HEALTH-RELATED PRODUCTS AND SERVICES.</p>
        </li>
        <li>
            <p><b>B. Content is not medical advice.</b> The only aspect of the Application which should be construed as medical advice is specified under the Facilitations and Limitations of Health Care Services section of the Consent to Medical Treatment.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>5. PRIVACY POLICY</h4></a>
<p>The Privacy Policy is divided into a traditional Privacy Policy and a Notice of Privacy Practices. Our traditional Privacy Policy located on our homepage is incorporated and summarized in these Terms under section 15. Our Notice of Privacy Practices is incorporated with and subject to these Terms. The Notice of Privacy Practices is found as an attachment page to these Terms, for easy accessibility to you.</p>

<a data-name="key-definitions"><h4>6. TERMINATION, SUSPENSION, CANCELLATION</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Right to Terminate.</b> We may, at any time, without notice to you, terminate, suspend, or block your access to the Service and your Account for any reason including but not limited to:</p>
            <p>i. we believe in our sole discretion that you may have violated these Terms or have otherwise engaged in any activities that may harm or damage the reputation, rights, person, or property of Lifetime, our users, or any other person;</p>
            <p>ii. requested by law enforcement or other government agencies; or</p>
            <p>iii. your Account has extended periods of inactivity.</p>
        </li>
        <li>
            <p><b>B. Notice of Termination.</b> If Applicable Law requires us to provide notice of termination, suspension, or cancellation, we may give prior or subsequent notice by posting it on the Service or by sending a communication to any address (email or otherwise) that we have for you in our records.</p>
        </li>
        <li>
            <p><b>C. Reminder to Retain Primary Care.</b> Given that a component of this Application consists of the facilitation of Health Care Services, it is recommended that Users retain all current forms and future forms of personal health care providers including primary care providers while using this Application to ensure the continuity of your medical care should access to the Application become unavailable.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>7. MERCHANTS, LINKS</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Advertisements and Links.</b> The Service may contain advertisements, offers, or other links to websites, Mobile Application or services of third parties that we do not control. Advertisements and other information provided by third parties may not be wholly accurate. Patientory does not endorse or recommend any of the products or services in advertisements on the Service. Patientory is not responsible or liable for: (i) the availability or accuracy of such sites or advertisements; or (ii) the content, products or services available from such third parties. The inclusion of any link on the Service does not imply that we endorse the products or services of any third party. You use the links at your own risk. The Privacy Policy is applicable only when you are using the Service. Once you link to another third party service, its privacy statement applies to any personal information you supply.</p>
        </li>
        <li>
            <p><b>B. Transactions with Third Parties.</b> Your transactions and other dealings with third party merchants or advertisers that are found on or through the Service, including payment and delivery of related goods or services, are solely between you and such merchant or advertiser.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>8. DISCLAIMER/ WARRANTIES</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. MEDICAL ADVICE IS PROVIDED SOLELY BY “HEALTH CARE PROVIDERS” VIA PHONE CALL, VIDEO COMMUNICATIONS, ELECTRONIC MEDICAL DATA TRANSMISSION OR MESSAGING FACILITATED WITHIN THE SERVICE.</b> THE SERVICE FACILITATES COMMUNICATION WITH HEALTH CARE PROVIDERS, BUT PATIENTORY, INC DOES NOT PROVIDE MEDICAL ADVICE. PATIENTORY, INC IS A THIRD PARTY DATA AGGREGATION TOOL ON BEHALF OF YOU THE PATIENT/CONSUMER. THE SERVICE IS FOR CONSUMER EDUCATIONAL USE AND COMMUNICATION FACILITATION ONLY. WITH THE EXCEPTION OF COMMUNICATION BETWEEN YOU AND HEALTH CARE PROVIDERS, THE SERVICE IS NOT OR SHOULD NOT BE CONSIDERED, OR USED AS A SUBSTITUTE FOR, MEDICAL ADVICE, DIAGNOSIS OR TREATMENT. THE SERVICE IS PROVIDED TO EDUCATE CONSUMERS ON HEALTH CARE AND MEDICAL ISSUES THAT MAY AFFECT THEIR DAILY LIVES. THIS IS DONE THROUGH A GAMIFIED MANNER AS A WAY TO CREATE EXCITEMENT AROUND A MORE HEALTHFUL LIFE. WITH THE EXCEPTION OF COMMUNICATION BETWEEN YOU AND HEALTH CARE PROVIDERS THE SERVICE DOES NOT CONSTITUTE THE PRACTICE OF ANY MEDICAL, NURSING OR OTHER PROFESSIONAL HEALTH CARE ADVICE, DIAGNOSIS OR TREATMENT. WE ADVISE USERS TO ALWAYS SEEK THE ADVICE OF A PHYSICIAN OR OTHER QUALIFIED HEALTHCARE PROVIDER WITH ANY QUESTIONS REGARDING PERSONAL HEALTH OR MEDICAL CONDITIONS. WE ADVISE THAT WHILE THE APPLICATION AIMS TO UNDERSTAND WHAT IS APPROPRIATE AND APPLICABLE TO ITS USERS, YOU SHOULD ALWAYS OBTAIN MEDICAL CLEARANCE FROM YOUR DOCTOR OR OTHER QUALIFIED HEALTHCARE PROVIDER BEFORE ACTING UPON ANY CONTENT, INCLUDING BUT NOT LIMITED TO: CHANGES OF ANY KIND TO YOUR DIET, USE OF HERBAL OR DIETARY SUPPLEMENTS, CHANGES IN EXERCISE, UTILIZATION OF PRODUCTS THAT COULD AFFECT YOUR BODY, OR GENERAL LIFESTYLE CHANGES OF ANY KIND. NEVER DISREGARD, AVOID OR DELAY IN OBTAINING MEDICAL ADVICE FROM YOUR DOCTOR OR OTHER QUALIFIED HEALTH CARE PROVIDER BECAUSE OF SOMETHING YOU HAVE READ OR SAW ON THE SERVICE. IF YOU HAVE OR SUSPECT THAT YOU HAVE A MEDICAL PROBLEM OR CONDITION, PLEASE CONTACT A QUALIFIED HEALTH CARE PROFESSIONAL IMMEDIATELY. IF YOU ARE IN THE UNITED STATES AND ARE EXPERIENCING A MEDICAL EMERGENCY, PLEASE CALL 911 OR CALL FOR EMERGENCY MEDICAL HELP ON THE NEAREST TELEPHONE. DO NOT USE THE HEALTH CARE SERVICES OFFERED THROUGH THE SERVICE FOR EMERGENT OR POTENTIALLY EMERGENT SITUATIONS.</p>
        </li>
        <li>
            <p><b>B. NO ENDORSEMENT.</b> PATIENTORY DOES NOT RECOMMEND OR ENDORSE ANY SPECIFIC TESTS, PHYSICIANS, PRODUCTS, PROCEDURES, OPINIONS, OR OTHER INFORMATION THAT MAY BE MENTIONED ON THE SERVICE. RELIANCE ON ANY INFORMATION PROVIDED BY THE APPLICATION, PATIENTORY EMPLOYEES, OTHERS APPEARING ON THE SERVICE AT THE INVITATION OF PATIENTORY, OR OTHER VISITORS TO THE SERVICE IS SOLELY AT YOUR OWN RISK.</p>
        </li>
        <li>
            <p><b>C. YOU ACCEPT THE SERVICE "AS-IS".</b>YOU ACCEPT THE SERVICE “AS-IS”. WE, AND OUR LICENSORS, CANNOT AND DO NOT GUARANTEE OR WARRANT AGAINST ERRORS, OMISSIONS, DELAYS, INTERRUPTIONS OR LOSSES, INCLUDING LOSS OF DATA OR USER CONTENT. USERS OF THE SERVICE ARE RESPONSIBLE FOR MAINTAINING A MEANS EXTERNAL TO THE APPLICATION FOR THE RECONSTRUCTION OF ANY LOST DATA OR USER CONTENT. PATIENTORY PROVIDES THE SERVICE “AS IS” AND “AS AVAILABLE”. THAT MEANS THAT THE INFORMATION CONTAINED ON OR PROVIDED THROUGH THE SERVICE IS INTENDED FOR GENERAL CONSUMER UNDERSTANDING AND EDUCATION. ANY ACCESS TO THE SERVICE IS VOLUNTARY. WE WILL REGARD ALL ACCESS AS VOLUNTARY AND AT THE SOLE RISK OF THE USER. TO THE MAXIMUM EXTENT PERMITTED BY LAW, PATIENTORY MAKES NO REPRESENTATIONS, WARRANTIES OR CONDITIONS OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SERVICE OR THE INFORMATION, TOOLS, SOFTWARE, OR CONTENT INCLUDED ON THE SERVICE. PATIENTORY MAKES NO REPRESENTATIONS OR WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR TIMELY. TO THE MAXIMUM EXTENT PERMITTED BY LAW, PATIENTORY EXPRESSLY DISCLAIMS ALL REPRESENTATIONS, WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED REPRESENTATIONS, WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT AND THOSE ARISING FROM A COURSE OF DEALING, TRADE, USAGE OR PERFORMANCE. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES, AND THEREFORE SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. WE URGE YOU TO KEEP BACKUP COPIES OF YOUR DATA AND USER CONTENT, IF ANY, THAT YOU MAINTAIN ON OR USE WITH THE SERVICE. IF YOUR USE OF THE SERVICE RESULTS IN THE NEED FOR SERVICING OR REPLACING PROPERTY, MATERIAL, EQUIPMENT OR DATA, WE ARE NOT RESPONSIBLE FOR ANY RESULTING COSTS OR DAMAGES.</p>
        </li>
        <li>
            <p><b>D. 3RD PARTY WEBSITES.</b>THE APPLICATION MAY SHARE LINKS TO 3RD PARTY WEBSITES FOR EDUCATIONAL OR SALES PURPOSES THAT MAY BE OF INTEREST TO YOU. THE LINKS PROVIDED IN THE APPLICATION ARE SOLELY FOR YOUR CONVENIENCE AND TO ENHANCE YOUR EXPERIENCE WITHIN THE APPLICATION. WHEN YOU CLICK ON THESE LINKS YOU WILL BE DIRECTED TO ANOTHER SITE. THESE SITES ARE NOT UNDER THE CONTROL OF PATIENTORY. PATIENTORY IS NOT RESPONSIBLE FOR THE CONTENT OF THE LINKED THIRD PARTY WEBSITES. PATIENTORY IS NOT AN AGENT FOR THESE THIRD PARTIES. PATIENTORY DOES NOT ENDORSE THESE PRODUCTS OR SERVICES. PATIENTORY DOES NOT GUARANTEE THESE PRODUCTS OR SERVICES. PATIENTORY MAKES NO REPRESENTATION OR WARRANTY REGARDING THE ACCURACY OF THE INFORMATION CONTAINED IN THE LINKED 3RD PARTY SITES. WE SUGGEST THAT YOU ALWAYS VERIFY INFORMATION OBTAINED FROM LINKED WEBSITE BEFORE ACTING UPON THIS INFORMATION. PLEASE BE AWARE THAT THE SECURITY AND PRIVACY POLICIES ON THESE SITES MAY BE DIFFERENT THAN PATIENTORY’S POLICIES, SO CAREFULLY READ THIRD PARTY PRIVACY AND SECURITY POLICIES. QUESTIONS OR CONCERNS REGARDING PRODUCTS AND SERVICES OFFERED THROUGH 3RD PARTY WEBSITES SHOULD BE POSSED TO THE THIRD PARTY DIRECTLY.</p>
        </li>
        <li>
            <p><b>E. PATIENTORY- HEALTH SCORE AND PATIENTORY REWARDS, (ie PTOY EARNED), HEALTH SCORE.</b>THE APPLICATION USES A GAMIFIED TRACKER TO PROJECT A HEALTH SCORE FOR USERS AND ASSIGNS REWARDS TO USERS WHO COMPLETE CERTAIN TASKS WITHIN THE APPLICATION. PATIENTORY MAKES NO REPRESENTATIONS OR WARRANTIES THAT THIS INFORMATION ACCURATELY PORTRAYS A REASONABLE ESTIMATE OF USER HEALTH OR DISEASE, HOW LONG A USER MAY HAVE LEFT TO LIVE, OR THE QUANTIFIABLE AMOUNT OF REAL- WORLD BENEFIT OR DETRIMENT A USER MAY EXPERIENCE FROM ACTIONS. PATIENTORY- REWARDS AND HEALTH SCORE IS NOT MEDICAL OR SCIENTIFIC INFORMATION. PATIENTORY MAKES NO REPRESENTATIONS OR WARRANTIES THAT COMPLETING ACTION CARDS, COMPLETING RECOMMENDED TASKS, PURCHASING RECOMMENDED PRODUCTS, ENGAGING WITH MARKETING MATERIALS OR USING THE APPLICATION IN ANY MANNER WILL ENHANCE THE HEALTH OF THE USER OR EXTEND THE USER’S LIFE. PATIENTORY REWARDS ASSIGNED TO ACTION CARDS AND RECOMMENDATIONS ARE FOR GAMING PURPOSES ONLY, ARE NOT BASED OFF OF MEDICAL OR SCIENTIFIC INFORMATION, AND SHOULD NOT BE TREATED AS SUCH.</p>
        </li>
        <li>
            <p><b>F. INMATES.</b>IF YOU ARE A CURRENT INMATE OF A CORRECTIONAL FACILITY, YOU MAY NOT USE THIS APPLICATION.</p>
        </li>
        <li>
            <p><b>G. RESEARCH SERVICES.</b>THE APPLICATION EDUCATES USERS ABOUT RESEARCH- BASED OR EXPERIMENTAL STUDIES, ACTIVITIES, TESTS, OR PRODUCTS THAT DEVIATE FROM THE TRADITIONAL MEDICAL STANDARD OF CARE AND WHICH MAY ENCOMPASS CUTTING EDGE, SCIENCE BASED TECHNOLOGIES TO IDENTIFY ACTIONABLE INDIVIDUAL HEALTH RISKS, WHICH MAY CREATE A BASIS FOR EARLY DETECTION AND PREVENTION DISEASE IN ADULTS. (“RESEARCH SERVICES”). PATIENTORY AND HEALTH CARE PROVIDERS DO NOT ENDORSE OR GUARANTEE RESEARCH SERVICES.</p>
            <p>RESEARCH SERVICES THAT DO NOT REQUIRE A PHYSICIAN ORDER OR REFERRAL ARE STRICTLY BETWEEN YOU AND THE 3RD PARTY VENDOR. PATIENTORY AND HEALTH CARE PROVIDERS DO NOT ENDORSE THESE PRODUCTS. PATIENTORY AND HEALTH CARE PROVIDERS DO NOT GUARANTEE THESE PRODUCTS. PATIENTORY AND HEALTH CARE PROVIDERS MAKE NO REPRESENTATION OR WARRANTY REGARDING THE ACCURACY OF THE INFORMATION CONTAINED IN THE PROVIDED 3RD PARTY SITES. WE SUGGEST THAT YOU ALWAYS VERIFY INFORMATION OBTAINED FROM 3RD PARTY SITES BEFORE ACTING UPON THIS INFORMATION. PLEASE BE AWARE THAT THE SECURITY AND PRIVACY POLICIES ON THESE SITES MAY BE DIFFERENT THAN PATIENTORY’S POLICIES, SO CAREFULLY READ THIRD PARTY PRIVACY AND SECURITY POLICIES. QUESTIONS OR CONCERNS REGARDING PRODUCTS AND SERVICES OFFERED THROUGH 3RD PARTY WEBSITES SHOULD BE POSSED TO THE THIRD PARTY DIRECTLY.</p>
            <p>RESEARCH SERVICES THAT REQUIRE A PHYSICIAN ORDER ARE STRICTLY BETWEEN YOU AND YOUR TREATING PHYSICIAN. DECISIONS ON YOUR CARE AND TREATMENT MUST BE BASED ON THE INDEPENDENT MEDICAL JUDGMENT OF THE TREATING PHYSICIAN, TAKING INTO CONSIDERATION ALL APPLICABLE INFORMATION CONCERNING YOUR CONDITION SUCH AS INDIVIDUAL AND FAMILY HISTORY, EXAMINATIONS, INFORMATION FROM OTHER TESTS, AND PERSONAL PREFERENCES, IN ACCORDANCE WITH THE STANDARD OF CARE IN A GIVEN COMMUNITY.</p>
            <p>SOME OF THE RESEARCH SERVICES ARE NOT FDA APPROVED OR CLEARED. THESE PARTICULAR RESEARCH SERVICES ARE ONLY DESIGNED FOR EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD BE BACKED UP BY STANDARD OF CARE METHODS.</p>
            <p>ADDITIONAL RISKS ASSOCIATED WITH UTILIZING RESEARCH SERVICES INCLUDE PHYSICAL, PHYSCOLOGICAL, AND/OR FINANCIAL RISKS. THESE RISKS MAY OCCUR AS A RESULT OF AN INCIDENTAL, OR “UNEXPECTED” FINDING AS A RESULT OF UTILIZING RESEARCH SERVICES. THE SIGNIFICANCE OF AN INCIDENTAL FINDING AND ITS IMPACT ON YOUR HEALTH MAY OR MAY NOT BE KNOWN. THE RISKS RESULTING FROM UNEXPECTED OR INCIDENTAL FINDS ARE AS FOLLOWS:</p>
            <p><b>PHYSICAL RISK:</b> CERTAIN FINDINGS MAY REQUIRE FOLLOW UP WITH A HEALTH CARE PROVIDER OR OUTSIDE HEALTH CARE PROVIDER. FOLLOW UP COULD INCLUDE ADDITIONAL TESTS, WHICH MAY BE INVASIVE. FOLLOW UP IMAGING MAY BE REQUIRED AND COULD BE HAZARDOUS TO YOUR HEALTH.</p>
            <p><b>FINANCIAL RISK:</b> IF FOLLOW UP TESTS ARE INDICATED, PATIENTORY AND HEALTH CARE PROVIDERS DO NOT COVER THESE COSTS. ADDITIONALLY, THERE IS A CHANCE THAT YOUR INSURANCE WILL NOT COVER THE REQUIRED TESTS.</p>
            <p><b>PSYCHOLOGICAL RISKS:</b> BECAUSE SOME RESULTS FROM RESEARCH SERVICES ARE SOMETIMES UNKNOWN AND BECAUSE SOME RESULTS MAY NOT HAVE A LARGE AMOUNT OF CLINICAL EVIDENCE OR ACTIONABILITY, YOU MIGHT EXPERIENCE STRESS, ANXIETY AND PSYCHOLOGICAL DISTRESS FROM UTILIZING RESEARCH SERVICES.</p>
            <p>USERS ARE NOT REQUIRED TO ENGAGE IN OR UTILIZE RESEARCH SERVICES. ENGAGING IN RESEARCH SERVICES IS COMPLETELY OPTIONAL. YOU FULLY AGREE TO THESE TERMS AND UTILIZE RESEARCH SERVICES AT YOUR OWN RISK AND DO NOT HOLD PATIENTORY OR HEALTH CARE PROVIDERS LIABLE FOR ANY DAMAGES EXPERIENCED AS A RESULT OF UTILIZING RESEARCH SERVICES.</p>
        </li>
        <li>
            <p><b>H. 3RD PARTY DEVICES.</b>PATIENTORY MAY OFFER AND SHIP 3RD PARTY PRODUCTS TO BETTER HELP FACILITATE HEALTH CARE SERVICES. PATIENTORY AND HEALTH CARE PROVIDERS DO NOT ENDORSE THESE PRODUCTS. PATIENTORY AND HEALTH CARE PROVIDERS DO NOT GUARANTEE THESE PRODUCTS. PATIENTORY AND HEALTH CARE PROVIDERS MAKE NO REPRESENTATION OR WARRANTY REGARDING THE ACCURACY OF THE INFORMATION CONTAINED IN THE PROVIDED 3RD PARTY PRODUCTS AND RESPECTIVE SITES OF THE PRODUCTS.</p>
            <p>ASSISTED DEVICES. PATIENTORY MAY OFFER SHIPMENT OF PRODUCTS TO DOMESTIC ADDRESSES IN THE CONTINENTAL UNITED STATES TO BETTER HELP FACILITATE HEALTH CARE SERVICES. THESE PRODUCTS MAY BE SHIPPED AFTER THE USER PAYS A FEE FOR A LIMITED RENTAL OF THE DEVICE. THE FEE IS SUBJECT TO CHANGE AND WILL BE SPECIFIED WITHIN THE APPLICATION. DEVICES ARE RENTED FOR A PERIOD OF THREE (3) WEEKS, BEGINNING ON DATE OF DELIVERY. DEVICES ARRIVING DAMAGED MUST BE REPORTED TO PATIENTORY WITHIN ONE (1) DAY OF PRODUCT RECEIPT. USERS MUST SHIP THE DEVICE BACK TO PATIENTORY WITHIN THE THREE (3) WEEK RENTAL PERIOD. IT IS THE USER’S RESPONSIBILITY TO ENSURE PROPER PACKAGING, PROPER TRACKING AND ADEQUATE SHIPMENT INSURANCE WHEN SHIPPING THE PRODUCT BACK TO PATIENTORY. DAMAGED, LOST, OR UNRETURNED PRODUCTS WILL BE BILLED TO THE USER FOR A FEE.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>9. EXCLUSION OF DAMAGES; LIMITATIONS OF LIABILITY</h4></a>
<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NONE OF THE INDEMNIFIED PERSONS ARE LIABLE TO YOU OR ANY OTHER PERSON FOR INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY, SPECIAL, STATUTORY, OR CONSEQUENTIAL DAMAGES, LOST PROFITS, LOST REVENUE, LOSS OF DATA, LOSS OF GOODWILL OR ANY OTHER LOSSES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IN THE EVENT OF FAULT, TORT (INCLUDING NEGLIGENCE) OR STRICT OR PRODUCT LIABILITY. WITHOUT LIMITING THE FOREGOING, IN NO EVENT WILL THE AGGREGATE LIABILITY TO YOU OF THE INDEMNIFIED PERSONS EXCEED, IN TOTAL, MORE THAN FIVE HUNDRED DOLLARS ($500.00 USD).</p>

<a data-name="key-definitions"><h4>10. INDEMNIFICATION</h4></a>
<p>You agree to hold Patientory and its Health Care Providers, subsidiaries, affiliates, officers, directors, employees, agents, attorneys, independent contractors, business associates, licensors, experts, content providers, advisors, consultants, vendors, and suppliers, and each of their respective successors and assigns (collectively, the “Indemnified Persons”), harmless from, and indemnify them for, all damages, costs, expenses and other liabilities, including reasonable attorneys’ fees and expenses, relating to any third party claim arising out of or related to: (i) your access to and use of the tools, software, and other aspects of the Service and the Content; (ii) your violation of these Terms, and any Applicable Law or the rights of another person or party; (iii) any dispute you have with any user of the Service and any dispute you have related to any merchant or advertising found on or through the Service; (iv) Lifetime’s resolution (if any) of any dispute you have with any user of the Service; (v) your improper authorization for Lifetime to collect, use or disclose any User Content provided by you; and (vi) any disclosures made with your permission.</p>

<a data-name="key-definitions"><h4>11. COPYRIGHT INFRINGEMENT/ DMCA</h4></a>
<p>A. Procedures to Submit a Notice of Claimed Copyright Infringement. Patientory has a zero tolerance policy for infringement of copyrights and other intellectual property rights. If you believe in good faith that any Content made available through the Service infringes upon your intellectual property rights, you may submit a notice of claimed infringement to us (a “NOCI”) by providing the following information in writing to our designated copyright agent (listed below) (“Designated Agent”):</p>
<p>1. A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright or other intellectual property right that has been allegedly infringed;</p>
<p>2. Identification of the works claimed to have been infringed, or if this is a single notification of a copyright infringement claim covering multiple copyrighted works on the Service, as permitted under the Digital Millennium Copyright Act, 17 U.S.C. 512 (“DMCA”), a representative list of such works on the Service;</p>
<p>3. Identification of the Content that is claimed to be infringing or to be the subject of infringement activity and that is to be removed or access to which is to be disabled, including information reasonably sufficient to permit Lifetime to locate the material;</p>
<p>4. Information reasonably sufficient to permit us to contact the complaining party, including address, telephone number and e-mail address;</p>
<p>5. A statement that the complaining party has a good faith belief that the use of the Content is not authorized by the copyright owner or other intellectual property rights owner, its agent, or the law; and</p>
<p>6. A statement made under penalty of perjury that the information in the NOCI is accurate and that the complaining party is authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.</p>
<p>A Designated Agent can be contacted at the following address:</p>
<p>Patientory, Inc<br/>
Attn: Patientory Copyright Dept.<br/>
3480 Peachtree Rd NE<br/> 
Atlanta, GA<br/>
30326<br/>
</p>
<p>You acknowledge that if you fail to comply with all of the above notice requirements of this Section, your NOCI may not be valid.</p>
<p>When a complete and proper NOCI is received by the Designated Agent, it is Patientory’s policy to expeditiously investigate the claim and take appropriate action, as determined by us in our sole discretion. Such action may include without limitation: (i) removing or disabling access to the Content or other material identified in the NOCI; (ii) notifying the applicable Application user that we have removed or disabled access to such material; and (iii) terminating such Application user’s Account.</p>
<p>Only notices of suspected intellectual property rights infringement should be sent to the Designated Agent. For all other requests for technical support, feedback, comments, and other communications, please contact Patientory.</p>

<a data-name="key-definitions"><h4>12. LEGAL NOTICES AND PROHIBITED USES</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. NOTICE:</b> NO HARVESTING OR DICTIONARY ATTACKS ALLOWED</p>
            <p>YOU MAY VIOLATE FEDERAL LAW IF YOU: (i) INITIATE THE TRANSMISSION TO PATIENTORY COMPUTERS OR DEVICES OF A COMMERCIAL ELECTRONIC MAIL MESSAGE (AS DEFINED IN THE U.S. “CAN-SPAM ACT OF 2003”) THAT DOES NOT MEET THE MESSAGE TRANSMISSION REQUIREMENTS OF THAT ACT; OR (ii) ASSIST IN THE ORIGINATION OF SUCH MESSAGES THROUGH THE PROVISION OR SELECTION OF ADDRESSES TO WHICH THE MESSAGES WILL BE TRANSMITTED.</p>
        </li>
        <li>
            <p><b>B. NOTICE RE TRADEMARKS</b> The trademark Neith and all other trademarks used in the Service are owned or used under license by Patientory, Inc. Neith is a registered trademark of Patientory, Inc. in the United States. The names of third parties and their products mentioned may be their trademarks. You may not use any of the above or other trademarks displayed on the Service or in any Neith Content. All rights are reserved.</p>
        </li>
        <li>
            <p><b>C. Prohibited Uses</b> In using the Application, you agree not to:</p>
            <p>Misrepresent your identity, demographics, signs, symptoms, ailments, affiliation or medical history in any way. Doing so may violate federal and state law and is fraudulent when seeking medical services. You bear all liability related to misrepresentation or fraud;</p>
            <p>Send or otherwise transmit to or through the Application any unlawful, infringing, harassing, harmful, threatening, hateful, defamatory, or otherwise objectionable materials of any kind, and material that may cause harm or delay to the Application or computers of any kind, and any unsolicited advertising, solicitation or promotional materials;</p>
            <p>Restrict or inhibit any person from using the Application, disclose personal information obtained from the Service or collect information about users of the Application;</p>
            <p>Reverse engineer, disassemble or decompile any section or technology on the Application, or attempt to do any of the foregoing;</p>
            <p>Gain unauthorized access to the Application, to other users’ accounts, names, personally identifiable information or other information, or to other computers or websites connected or linked to the Sites;</p>
            <p>Launch or use any automated system, including without limitation, “robots,” “spiders,” or “offline readers,” that access the Application in a manner that sends more request messages to our servers in a given period of time than a human can reasonably produce in the same period by using a conventional web browser;</p>
            <p>Send or otherwise transmit to or through the Sites chain letters, unsolicited messages, so-called “spamming” or “phishing” messages, or messages marketing or advertising goods and services;</p>
            <p>Post, transmit or otherwise make available any virus, worm, spyware or any other computer code, file or program that may or is intended to damage or hijack the operation of any hardware, software or telecommunications equipment;</p>
            <p>Violate any applicable laws or regulations or these Terms and Conditions;</p>
            <p>Alter or modify any part of the Content or services offered on the Application; or</p>
            <p>Assist or permit any persons in engaging in any of the activities described above.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>13. MOBILE SERVICES AND APPLICATION</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Wireless Carriers.</b> To the extent you access the Application through a mobile device, your wireless carrier’s standard charges, data rates and other fees may apply.</p>
        </li>
        <li>
            <p><b>B. Notifications and Messages.</b> By using the Application you agree that we may communicate with you regarding the Application and other entities by SMS, MMS, text message or other electronic means to your mobile device for the purpose of providing the applicable service and that certain information about your usage of the Application may be communicated to us. In the event you change or deactivate your mobile telephone number, you agree to promptly update your Account information to ensure that your messages are not sent to the person that acquires your old number. In the event that you fail to comply with the obligation to promptly update your Account information when changing or deactivating your mobile telephone number, you accept full responsibility for any of your messages, which may not be delivered or may be sent to the person that acquires your old number.</p>
        </li>
        <li>
            <p><b>C. Application.</b> Subject to your compliance with these Terms, Patientory grants you a limited non-exclusive, non-transferable, non-sublicensable, revocable license to download, install and use a copy of the Mobile Application on a mobile device that you own or control and to run such copy of the Mobile Application solely to access the Services for your own personal non-commercial purposes. Furthermore, with respect to any Mobile Application accessed through or downloaded from the Apple App Store (an “App Store Sourced Application”), you will only use the App Store Sourced Application: (i) on an Apple-branded product that runs iOS (Apple’s proprietary operating system); and (ii) as permitted by the “Usage Rules” set forth in the Apple App Store Terms of Service.</p>
        </li>
        <li>
            <p><b>D. App Stores.</b> You acknowledge and agree that the availability of the Mobile Application and the Mobile Services is dependent on the third party from whom you received the Mobile Application license, e.g., the Apple or Android app stores (“App Store”). You acknowledge that these Terms are between you and Patientory and not with the App Store. Patientory, not the App Store, is solely responsible for the Mobile Application and the Mobile Services, the Content thereof, maintenance, support services, and warranty thereof, and addressing any claims relating thereto (e.g. product liability, legal compliance, or intellectual property infringement). You agree to pay all fees (if any) charged by the App Store in connection with the Mobile Application and the Mobile Services. You agree to comply with, and your license to use the Mobile Application and the Mobile Services is conditioned upon your compliance with, all applicable third party terms of agreement (e.g., the App Store’s terms and policies) when using the Mobile Application and the Mobile Services. You acknowledge that the App Store (and its subsidiaries) are third party beneficiaries of these Terms and will have the right to enforce them.</p>
        </li>
        <li>
            <p><b>E. Accessing and Downloading the Mobile Application from the Apple App Store.</b> The following applies to any Mobile Application accessed through or downloaded from the Apple App Store:</p>
            <p>i. You acknowledge and agree that: (i) these Terms are concluded between you and Patientory only, and not Apple; and (ii) Patientory not Apple, is solely responsible for the App Store Sourced Application and Content thereof. Your use of the App Store Sourced Application must comply with the Apple App Store terms of service.</p>
            <p>ii. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App Store Sourced Application.</p>
            <p>iii. In the event of any failure of the App Store Sourced Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the App Store Sourced Application to you and to the maximum extent permitted by Applicable Law, Apple will have no other warranty obligation whatsoever with respect to the App Store Sourced Application. As between Patientory and Apple, any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be the sole responsibility of Patientory.</p>
            <p>iv. You and Patientory acknowledge that, as between Patientory and Apple, Apple is not responsible for addressing any claims you have or any claims of any third party relating to the App Store Sourced Application or your possession and use of the App Store Sourced Application, including, but not limited to: (i) product liability claims; (ii) any claim that the App Store Sourced Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.</p>
            <p>v. You and Patientory acknowledge that, in the event of any third party claim that the App Store Sourced Application or your possession and use of that App Store Sourced Application infringes that third party’s intellectual property rights, as between Patientory and Apple, Patientory, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by these Terms.</p>
            <p>vi. You and Patientory acknowledge and agree that Patientory, and Apple’s subsidiaries, are third party beneficiaries of these Terms as related to your license of the App Store Sourced Application, and that, upon your acceptance of these Terms and the conditions of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms as related to your license of the App Store Sourced Application against you as a third party beneficiary thereof.</p>
            <p>vii. Without limiting any other terms of these Terms, you must comply with all applicable third party terms of agreement when using the App Store Sourced Application.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>14. NOTICE TO CALIFORNIA USERS AND USERS FROM OTHER JURISDICTIONS.</h4></a>
<p>Under California Civil Code Section 1789.3, California users of the online services are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 400 R Street, Suite 1080, Sacramento, California 95814, or by telephone at (916) 445-1254 or (800) 952-5210.</p>
<p>By accessing or using the Application, or submitting information (including User Content), you acknowledge that you accept the practices and policies outlined in this Agreement and consent to having your data transferred to and processed in the United States. If you do not agree to these Terms, please do not use the Service. The Service is controlled and operated by Patientory from the United States. We do not represent or warrant that the Service, or any part thereof, is appropriate or available for use in any particular jurisdiction. Those who choose to access the Service, do so on their own initiative and at their own risk, and are responsible for complying with all local laws, rules and regulations. You also are subject to United States export controls in connection with your use of the Service and are responsible for any violations of such controls, including, without limitation, any United States embargoes or other federal rules and regulations restricting exports. We may limit the availability of the Service, in whole or in part, to any person, geographic area or jurisdiction that we choose, at any time and in our sole discretion.</p>

<a data-name="key-definitions"><h4>15. PRIVACY POLICY</h4></a>
<p>This Privacy Policy describes what information Patientory collects about Users and how that information is used.</p>
<p>
    <ul>
        <li>
            <p><b>A. Agreement to this Privacy Policy.</b> Your access to the Sites is subject to your agreement with this Privacy Policy, the Terms of Service, and, when appropriate, Health Care Services Terms- Condition- and Consent, Notice of Privacy Practices, and Authorization to Release Medical Information. By using the site, you expressly agree to the terms of this Privacy Policy and consent to the collection and use of information as discussed in this Privacy Policy.</p>
        </li>
        <li>
            <p><b>B. Updates and Changes to this Privacy Policy.</b> Patientory may update, change, or revise this Privacy Policy regarding the collection of information at any time. Should this Privacy Policy change, Patientory will give you notice on the website, within the Application and/or via email. Policies become effective immediately upon update unless stated otherwise. By accessing or continuing to use the Sites you agree to such changes.</p>
        </li>
        <li>
            <p><b>C. Collection and Use of Information.</b> Patientory, or third party partners on behalf of Lifetime may collect information, which is collected as you use and interact with the Sites. We may collect information through various means, including but not limited to: via “cookie” technology, IP addresses, and/ or clickstream activities. The Application is inherently designed to understand its users and provide valuable content based off of that understanding. We collect basic information about User’s computers or mobile device including, but not limited to: Geographical location, IP address, operating system, browsing software. We also use Protected Health Information provided by our Health Care Provider Business Associates. This aggregation and analysis is essential for providing the very best experience for Users. Please see the Authorization of Marketing and Notice of Privacy Practices for more information on how information can be used.</p>
        </li>
        <li>
            <p><b>D. Cookies.</b> A cookie is a small text file containing a unique identification number that is transferred from a web server to the end user’s computer. Cookies allow us to personalize your experience with our website and to ensure that no unauthorized users can access our subscribers’ web pages within our service. We do not issue any cookies which enable third parties to track the activities of end users. Most Internet browsers automatically accept cookies, but you can set your browser to refuse them or to alert you when they are being sent.</p>
        </li>
        <li>
            <p><b>E. Links.</b> The Application contains links to other sites. Patientory is not responsible for the privacy practices of other websites. When you leave our site or Application, we encourage you to read the privacy statements of each and every website that you visit to review their use of personally identifiable information. This privacy statement applies solely to information collected at Application, Patientory’s websites, and its hosted service.</p>
        </li>
        <li>
            <p><b>F. Portal.</b> The vast majority of content and functionality within the Application requires Users to login to their unique profile. This profile is a secure portal in which Protected Health Information (PHI) is stored. Much of the content available to the user is based off of the user’s PHI. Identifiable User information, PHI, and individualized utilization of the Application is held safe within the Application. Identifiable information is never sold or distributed outside of the Application.</p>
            <p>While no web site or mobile Application can guarantee absolute security, Patientory exercises thorough safeguards within its Application. While we cannot guarantee that loss, misuse, or alteration of data will not occur, physical, technical, and internal safeguards are constantly used to meet or exceed industry standards and keep your PHI confidential.</p>
        </li>
        <li>
            <p><b>G. Contact.</b> If you have any questions about this privacy policy or if you feel that Patientory is not abiding by its posted privacy policy, you can contact us by emailing your questions or concerns via the chat functionality within the Application or mail us at 3480 Peachtree Rd NE 
Atlanta, GA 30326.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>16. ADDITIONAL TERMS</h4></a>
<p>
    <ul>
        <li>
            <p><b>A. Agreement to Conduct Transactions Electronically.</b> All of your transactions with or through the Service may, at our option, be conducted electronically from start to finish. If we decide to proceed non-electronically, those services will still be governed by the remainder of these Terms unless you enter into different terms on a form provided by us. If the Applicable Law allows you to withdraw your consent to conducting transactions electronically, or if we are ever required to deal with you non-electronically, we reserve the right to charge or increase fees and you agree to print or make an electronic copy of these Terms and any other contract or disclosure that we are required to provide to you.</p>
        </li>
        <li>
            <p><b>B. No Agency.</b> These Terms do not create any agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship.</p>
        </li>
        <li>
            <p><b>C. Severance.</b> If any part of these Terms is held by a court of competent jurisdiction to be invalid or unenforceable, the invalid or unenforceable part will be given effect to the greatest extent possible and the remainder will remain in full effect, provided that the allocation of risks described in these Terms is given effect to the fullest extent possible.</p>
        </li>
        <li>
            <p><b>D. Assignment.</b> These Terms are personal to you and you may not transfer, assign or delegate them to anyone without the express written permission of Patientory. Any attempt by you to assign, transfer or delegate these Terms without the express written permission of Patientory will be null and void. Patientory has the right to transfer, assign and delegate these Terms to one (1) or more third parties without your permission.</p>
        </li>
        <li>
            <p><b>E. Export Limitations.</b> The Service is controlled by us from our offices in the United States of America and is directed to U.S. users. Do not use this Application outside of the U.S. If you access the Service from locations outside the U.S., you do so at your own risk and you are responsible for compliance with applicable local laws. You may not use or export anything from the Service in violation of U.S. export laws and regulations or the Terms.</p>
        </li>
        <li>
            <p><b>F. Arbitration.</b> Any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by binding arbitration in Atlanta, GA before three (3) arbitrators. The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures. Judgment on the Award may be entered in any court having jurisdiction.</p>
        </li>
        <li>
            <p><b>G. Waiver of Class Action Rights.</b> By agreeing to these Terms, you hereby irrevocably waive any right you may have to join claims with those of others in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connected with these Terms must be individually asserted.</p>
        </li>
        <li>
            <p><b>H. Limitations on Actions.</b> Any action concerning any dispute with respect to the Service must be commenced within three (3) months after the cause of the dispute arises, or the cause of action is barred.</p>
        </li>
        <li>
            <p><b>I. Interpretation.</b> The paragraph headings in these Terms are included to help make these Terms easier to read and have no binding effect. As used in these Terms, the words “include” and “including” are meant to be illustrative and not exhaustive.</p>
        </li>
        <li>
            <p><b>J. No Waiver.</b> The failure of any party to exercise or enforce any right or provision of these Terms, including any failure to act with respect to a breach, will not constitute a waiver of such right or provision or that party’s right to act with respect to subsequent or similar breaches. We suggest that you print out a copy of these Terms for your records.</p>
        </li>
        <li>
            <p><b>K. Waiver of Jury Trial.</b> To the extent permitted by applicable law, the User hereto irrevocably waives all right of trial by jury in any action, proceeding or counterclaim based on, or arising out of, under or in connection with these TERMS, any other Transaction Document, or any matter arising hereunder or thereunder.</p>
        </li>
        <li>
            <p><b>L. No corporate use.</b> Corporate entities are not permitted to use the Service.</p>
        </li>
        <li>
            <p><b>M. Severance of Authorizations.</b> If any part of the Consent to Medical Treatment, Authorization to Release Medical Information, and Authorization of Marketing is held by a court of competent jurisdiction to be invalid or unenforceable, the invalid or unenforceable part will be given effect to the greatest extent possible and the remainder will remain in full effect, provided that the allocation of risks described in these documents is given effect to the fullest extent possible.</p>
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>17. Entire Agreement</h4></a>
<p>These Terms, Consent to Medical Treatment, Authorization to Release Medical Information, Notice of Privacy Practices, Authorization of Marketing, Authorization for Use and/or Disclosure of Protected Health Information, and any policies and guidelines posted by Patientory comprise the entire agreement (the “Entire Agreement”) between you and Patientory with respect to your use of the Service and supersede all contemporaneous and prior agreements between the parties regarding the subject matter contained herein, and neither party has relied on any representations made by the other that are not expressly set forth in the Entire Agreement.</p>

<a data-name="key-definitions"><h4>18. FURTHER INFORMATION</h4></a>
<p>If you have a complaint, you may contact us at Patientory’s Legal Department:</p>
<p>Patientory, Inc<br/>
Attn: Legal Dept.<br/>
3480 Peachtree Rd NE<br/>
Atlanta, GA<br/>
30326
</p>
<p>By engaging with the toggle in the application, I, the user identified, hereby agree to these terms of service.</p>


<a data-name="key-definitions"><h4>NOTICE OF PRIVACY PRACTICES</h4></a>
<p>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
<p>This Notice of Privacy Practices describes how Health Care Providers may use and disclose your protected health information to carry out treatment, payment or health care operations and for other purposes that are permitted or required by law. It also describes your rights to access and control your protected health information. “Protected health information” is information about you, including demographic information, that may identify you and that relates to your past, present or future physical or mental health or condition and related health care services. We are required to abide by the terms of this Notice of Privacy Practices. We may change the terms of our notice, at any time. The new notice will be effective for all protected health information that we maintain at that time. Upon your request, we will provide you with any revised Notice of Privacy Practices. You may request a revised version by accessing the Application, requesting via Kyla’s chat functionality, or calling the office and requesting that a revised copy be sent to you in the mail or asking for one at the time of your next appointment.</p>
<p>Uses and Disclosures of Protected Health Information</p>
<p>Your protected health information may be used and disclosed by the treating physician, Health Care Providers staff and others outside of our office who are involved in your care and treatment for the purpose of providing health care services to you. Your protected health information may also be used and disclosed to pay your health care bills and to support the operation of Health Care Providers. Following are examples of the types of uses and disclosures of your protected health information that your Health Care Providers is permitted to make. These examples are not meant to be exhaustive, but to describe the types of uses and disclosures that may be made by our office. These examples may describe inapplicable circumstances depending on the status of insurance acceptance and fees associated with services.</p>
<p><b>Treatment:</b> We will use and disclose your protected health information to provide, coordinate, or manage your health care and any related services. This includes the coordination or management of your health care with another provider. For example, we would disclose your protected health information, as necessary, to a home health agency that provides care to you. We will also disclose protected health information to other physicians who may be treating you. For example, your protected health information may be provided to a physician to whom you have been referred to ensure that the physician has the necessary information to diagnose or treat you. In addition, we may disclose your protected health information from time-to-time to another physician or health care provider (e.g., a specialist or laboratory) who, at the request of your treating physician, becomes involved in your care by providing assistance with your health care diagnosis or treatment.</p>
<p><b>Payment:</b> Your protected health information will be used and disclosed, as needed, to obtain payment for your health care services provided by us or by another provider. This may include certain activities that your health insurance plan may undertake before it approves or pays for the health care services we recommend for you such as: making a determination of eligibility or coverage for insurance benefits, reviewing services provided to you for medical necessity, and undertaking utilization review activities. For example, obtaining approval for a hospital stay may require that your relevant protected health information be disclosed to the health plan to obtain approval for the hospital admission.</p>
<p><b>Health Care Operations:</b> We may use or disclose, as needed, your protected health information in order to support the business activities of Health Care Providers. These activities include, but are not limited to, quality assessment activities, employee review activities, training of medical students, licensing, and conducting or arranging for other business activities.</p>
<p>We will share your protected health information with third party “business associates” that perform various activities (for example, billing or technical facilitation) for Health Care Providers. Patientory is an example of a business associate of Health Care Providers. Whenever an arrangement between Health Care Providers and a business associate involves the use or disclosure of your protected health information, we will have a written contract that contains terms that will protect the privacy of your protected health information.</p>
<p>We may use or disclose your protected health information, as necessary, to provide you with information about treatment alternatives or other health-related benefits and services that may be of interest to you. You may contact our Privacy Officer to request that these materials not be sent to you.</p>
<p><b>Marketing:</b> Health Care Providers partners with Patientory in an effort to deliver low-cost or no-cost health care services to users. To properly fund and scale such a delivery model via the Application, marketing materials may be delivered to you while you use the Application. Examples of such marketing materials may include but are not limited to: Links, advertisements, videos, articles, games. Examples may also include: Educational content/ materials about pharmaceuticals, health products, health services, foods/ beverages, goods, research studies, companies, events. Marketing materials provided by Patientory may be for financial remuneration.</p>
<p>Marketing materials may also be used in an effort to encourage regular use of the Application. (This may include email reminders or alerts reminding you to check the Application.) These communications will never disclose Protected Health Information. Health Care Providers, nor their Business Associates, including Patientory, sell or share your Protected Health Information to other companies outside of Business Associates.</p>
<p>Other Permitted and Required Uses and Disclosures That May Be Made Without Your Authorization or Opportunity to Agree or Object. We may use or disclose your protected health information in the following situations without your authorization or providing you the opportunity to agree or object. These situations include:</p>
<p><b>Required By Law:</b> We may use or disclose your protected health information to the extent that the use or disclosure is required by law. The use or disclosure will be made in compliance with the law and will be limited to the relevant requirements of the law. You will be notified, if required by law, of any such uses or disclosures.</p>
<p><b>Public Health:</b> We may disclose your protected health information for public health activities and purposes to a public health authority that is permitted by law to collect or receive the information. For example, a disclosure may be made for the purpose of preventing or controlling disease, injury or disability.</p>
<p><b>Communicable Diseases:</b> We may disclose your protected health information, if authorized by law, to a person who may have been exposed to a communicable disease or may otherwise be at risk of contracting or spreading the disease or condition.</p>
<p><b>Health Oversight:</b> We may disclose protected health information to a health oversight agency for activities authorized by law, such as audits, investigations, and inspections. Oversight agencies seeking this information include government agencies that oversee the health care system, government benefit programs, other government regulatory programs and civil rights laws.</p>
<p><b>Abuse or Neglect:</b> We may disclose your protected health information to a public health authority that is authorized by law to receive reports of child abuse or neglect. In addition, we may disclose your protected health information if we believe that you have been a victim of abuse, neglect or domestic violence to the governmental entity or agency authorized to receive such information. In this case, the disclosure will be made consistent with the requirements of applicable federal and state laws.</p>
<p><b>Food and Drug Administration:</b> We may disclose your protected health information to a person or company required by the Food and Drug Administration for the purpose of quality, safety, or effectiveness of FDA-regulated products or activities including, to report adverse events, product defects or problems, biologic product deviations, to track products; to enable product recalls; to make repairs or replacements, or to conduct post marketing surveillance, as required.</p>
<p><b>Legal Proceedings:</b> We may disclose protected health information in the course of any judicial or administrative proceeding, in response to an order of a court or administrative tribunal (to the extent such disclosure is expressly authorized), or in certain conditions in response to a subpoena, discovery request or other lawful process.</p>
<p><b>Law Enforcement:</b> We may also disclose protected health information, so long as applicable legal requirements are met, for law enforcement purposes. These law enforcement purposes include (1) legal processes and otherwise required by law, (2) limited information requests for identification and location purposes, (3) pertaining to victims of a crime, (4) suspicion that death has occurred as a result of criminal conduct, (5) medical emergency and it is likely that a crime has occurred.</p>
<p><b>Coroners, Funeral Directors, and Organ Donation:</b> We may disclose protected health information to a coroner or medical examiner for identification purposes, determining cause of death or for the coroner or medical examiner to perform other duties authorized by law. We may also disclose protected health information to a funeral director, as authorized by law, in order to permit the funeral director to carry out their duties. We may disclose such information in reasonable anticipation of death. Protected health information may be used and disclosed for cadaveric organ, eye or tissue donation purposes.</p>
<p><b>Research:</b> We may disclose your protected health information to researchers when their research has been approved by an institutional review board that has reviewed the research proposal and established protocols to ensure the privacy of your protected health information.</p>
<p><b>Criminal Activity:</b> Consistent with applicable federal and state laws, we may disclose your protected health information, if we believe that the use or disclosure is necessary to prevent or lessen a serious and imminent threat to the health or safety of a person or the public. We may also disclose protected health information if it is necessary for law enforcement authorities to identify or apprehend an individual.</p>
<p><b>Military Activity and National Security:</b> When the appropriate conditions apply, we may use or disclose protected health information of individuals who are Armed Forces personnel (1) for activities deemed necessary by appropriate military command authorities; (2) for the purpose of a determination by the Department of Veterans Affairs of your eligibility for benefits, or (3) to foreign military authority if you are a member of that foreign military services. We may also disclose your protected health information to authorized federal officials for conducting national security and intelligence activities, including for the provision of protective services to the President or others legally authorized.</p>
<p><b>Inmates:</b> We may use or disclose your protected health information if you are an inmate of a correctional facility and your physician created or received your protected health information in the course of providing care to you. Note, inmates may not use this Application.</p>
<p><b>Workers’ Compensation:</b> We may disclose your protected health information as authorized to comply with workers’ compensation laws and other similar legally-established programs if applicable.</p>
<p><b>Uses and Disclosures of Protected Health Information Based upon Your Written Authorization:</b> Other uses and disclosures of your protected health information will be made only with your written authorization, unless otherwise permitted or required by law as described below. You may revoke this authorization in writing at any time. If you revoke your authorization, we will no longer use or disclose your protected health information for the reasons covered by your written authorization. Please understand that we are unable to take back any disclosures already made with your authorization.</p>
<p>Other Permitted and Required Uses and Disclosures That Require Providing You the Opportunity to Agree or Object: We may use and disclose your protected health information in the following instances. You have the opportunity to agree or object to the use or disclosure of all or part of your protected health information. If you are not present or able to agree or object to the use or disclosure of the protected health information, then your physician may, using professional judgment, determine whether the disclosure is in your best interest:</p>
<p><b>Facility Directories:</b> Unless you object, we will use and disclose in our facility directory your name, the location at which you are receiving care, your general condition (such as fair or stable), and your religious affiliation. All of this information, except religious affiliation, will be disclosed to people that ask for you by name. Your religious affiliation will be only given to a member of the clergy, such as a priest or rabbi.</p>
<p><b>Others Involved in Your Health Care or Payment for your Care:</b> Unless you object, we may disclose to a member of your family, a relative, a close friend or any other person you identify, your protected health information that directly relates to that person’s involvement in your health care. If you are unable to agree or object to such a disclosure, we may disclose such information as necessary if we determine that it is in your best interest based on our professional judgment. We may use or disclose protected health information to notify or assist in notifying a family member, personal representative or any other person that is responsible for your care of your location, general condition or death. Finally, we may use or disclose your protected health information to an authorized public or private entity to assist in disaster relief efforts and to coordinate uses and disclosures to family or other individuals involved in your health care.</p>
<p><b>Your Rights</b></p>
<p>The following is a statement of your rights with respect to your protected health information and a brief description of how you may exercise these rights.</p>
<p>You have the right to inspect and copy your protected health information. This means you may inspect and obtain a copy of protected health information about you for so long as we maintain the protected health information. You may obtain your medical record that contains medical and billing records and any other records that are used for making decisions about you As permitted by federal or state law, we may charge you a reasonable copy fee for a copy of your records.</p>
<p>Under federal law, however, you may not inspect or copy the following records: psychotherapy notes; information compiled in reasonable anticipation of, or use in, a civil, criminal, or administrative action or proceeding; and laboratory results that are subject to law that prohibits access to protected health information. Depending on the circumstances, a decision to deny access may be reviewable. In some circumstances, you may have a right to have this decision reviewed. Please contact our Privacy Office via the chat function within the Application if you have questions about access to your medical record.</p>
<p>You have the right to request a restriction of your protected health information. This means you may ask us not to use or disclose any part of your protected health information for the purposes of treatment, payment or health care operations. You may also request that any part of your protected health information not be disclosed to family members or friends who may be involved in your care or for notification purposes as described in this Notice of Privacy Practices. Your request must state the specific restriction requested and to whom you want the restriction to apply. Health Care Providers are not required to agree to a restriction that you may request. If your Health Care Provider does agree to the requested restriction, we may not use or disclose your protected health information in violation of that restriction unless it is needed to provide emergency treatment. With this in mind, please discuss any restriction you wish to request with Health Care Providers.</p>
<p>You have the right to request to receive confidential communications from us by alternative means. We will accommodate reasonable requests. We may also condition this accommodation by asking you for information as to how payment will be handled or specification of an alternative address or other method of contact. We will not request an explanation from you as to the basis for the request. Please make this request to the Privacy Office.</p>
<p>You may have the right to have a physician amend your protected health information. This means you may request an amendment of protected health information about you in a designated record set for so long as we maintain this information. In certain cases, we may deny your request for an amendment. If we deny your request for amendment, you have the right to file a statement of disagreement with us and we may prepare a rebuttal to your statement and will provide you with a copy of any such rebuttal. Please contact our Privacy Office if you have questions about amending your medical record.</p>
<p>You have the right to receive an accounting of certain disclosures we have made, if any, of your protected health information. This right applies to disclosures for purposes other than treatment, payment or health care operations as described in this Notice of Privacy Practices. It excludes disclosures we may have made to you if you authorized us to make the disclosure, for a facility directory, to family members or friends involved in your care, or for notification purposes, for national security or intelligence, to law enforcement (as provided in the privacy rule) or correctional facilities, as part of a limited data set disclosure. You have the right to receive specific information regarding these disclosures that occur after April 14, 2003. The right to receive this information is subject to certain exceptions, restrictions and limitations.</p>
<p>You have the right to obtain a paper copy of this notice from us, upon request, even if you have agreed to accept this notice electronically.</p>
<p><b>Complaints</b></p>
<p>You may complain to us or to the Secretary of Health and Human Services if you believe your privacy rights have been violated by us. You may file a complaint with us by notifying our Privacy Office of your complaint. We will not retaliate against you for filing a complaint. You may contact Action if you have any other questions about privacy practices.</p>
<p>Agreement to this Notice of Privacy Practices</p>
<p>By engaging with the toggle in the application, I, the user identified, hereby agree to this Notice of Privacy Practices and the terms described in this Notice of Privacy Practices.</p>
<p>AUTHORIZATION FOR USE AND/OR DISCLOSURE OF PROTECTED HEALTH INFORMATION</p>
<p>Patientory Inc. (“Patientory”) provides and facilitates a connection for users to obtain certain Health Care Services (“Health Care Services”) from contracted Health Care Providers and their associates (“Health Care Providers”) via the  Mobile Application (“Application” or “dApp”).</p>
<p>I attest that the Name, Date of Birth, and any other identifying information I provide in the Application are true. I understand that if I am using the Application at the request of an Employer, I am authorizing that the Employer, its contractors, and its affiliates’ Human Resources and Risk Management Personnel may REQUEST and RECEIVE certain protected health information about me. I clearly understand that I am linking my account to the Employer when I enter “Company Details” or “Company ID Number”. For the purposes of this Authorization, Employer is defined as the company or entity associated with the Company ID Number I enter during the registration process, regardless of who my legal employer is.</p>
<p>On this date, I, the user identified, do hereby grant permission for Patientory and its Health Care Providers, or any of their subsidiary companies or clinics, to use and/ or disclose my protected health information as specifically indicated below:</p>
<p>Diagnostic testing results and testing information (including but not limited to testing date, testing method, testing location, and time of the test) related to the novel coronavirus disease, SARS-CoV-2 (COVID19).</p>
<p>Testing results and testing information (including but not limited to testing date, testing method, testing location, and time of the test) for antibody testing, IgG, IgM, or any test used to detect both early or late markers of antibodies in humans for SARS-CoV-2 (COVID19).</p>
<p>Diagnostic testing results for genetic, and  respiratory diseases including Tuberculosis and Influenza.</p>
<p>Signs or symptoms of respiratory illnesses related to COVID19, including but not limited to fever, cough, body ache, headache, loss of senses, shortness of breath, fatigue, sore throat, chills, shaking, chest pain or pressure, confusion, bluish lips or face, and diarrhea.</p>
<p>On this date, I, the user identified, do hereby grant permission for Patientory and its Health Care Providers, or any of their subsidiary companies or clinics, to use and/ or disclose my personal information as specifically indicated below:</p>
<p>1. Utilization data from the Application, including but not limited to: Sign-in times and cumulative time engaged within the Application.</p>
<p>2. Completion and progress of certain training or education within the Application.</p>
<p>3. Information I provide within the Application to help with contact tracing for COVID19, Influenza, and other respiratory illnesses.</p>
<p>4. Information I provide within the Application to help determine my risk level for exposure to COVID19. This information may include but is not limited to: Commuting methods. Work environment. Public exposure (such as grocery store shopping, gas stations, shopping centers, gyms, exercising in public etc.) Contact with people who have or could have COVID19.</p>
<p>5. Personal photograph used in your account profile.</p>
<p>6. Health insurance data, including identification numbers and information related specifically to claims and payments for the testing and treatment of COVID19.</p>
<p>I understand that my Employer will not be authorized to view ALL of my medical records or information stored within the Application and this authorization limits what information can be viewed by my Employer.</p>
<p>I understand that my Authorization, or refusal to provide additional Authorization(s), does not affect my ability to obtain treatment from Health Care Providers I may revoke this Authorization in writing at any time by sending a letter to Health Care Providers or by completing the Health Care Provider’s Authorization Revocation Form, except to the extent that the Health Care Provider has taken action in reliance on this Authorization. I also understand that the information used or disclosed pursuant to this Authorization may be subject to re-disclosure by the recipient and no longer protected by the HIPAA privacy regulations. I agree that the Employer is the recipient of this information, and may use the information for the following purpose(s):</p>
<p>- Compliance with state and local legal requirements including the requirement to report positive test results to public health and workplace safety agencies;</p>
<p>- Responding to COVID-19 infections including notifying individuals with whom I have had close contact if my test results are positive;</p>
<p>- In connection with health insurance billing and claims;</p>
<p>- In connection with requests for medical accommodations and administering employee benefits and workers' compensation benefits; and</p>
<p>- Communicating with my health care providers and legal representatives.</p>
<p>I understand that by agreeing to this Authorization, I have the right to receive a copy for this authorization. Upon request, Patientory, Inc will provide me with a copy of this authorization.</p>
<p>I hereby represent and certify by engaging with the toggle in the application, that my Name, Date of Birth, and any other identifying information I provide in this Application are true and that I give this Authorization of my own free will, am competent by law to give such Authorization, and will hold Health Care Providers, Patientory, and its affiliates and subsidiaries harmless from liability for their compliance with the provisions of this Authorization.</p>




</div>
                </div>
            </section>
        </Route>
    )
}

export default Privacy;