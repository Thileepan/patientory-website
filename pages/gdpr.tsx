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
                        GDPR Data Processing Addendum Terms & Conditions
                    </h1>
                    {/*<ReactMarkdown className="has-text-left md-content">
                        {markdown}
                    </ReactMarkdown>*/}

                    {/*<h4>GDPR Data Processing Addendum Terms & Conditions</h4>*/}
<div className="has-text-left">
{/*<p>Effective Date:<b>09/2018</b></p>*/}

<p>This Data Processing Addendum (“DPA”) is an agreement between Patientory, Inc.(“Patientory,” “we,” “us,” or “our”) and you (“Customer”, “user” or “you” </p>

<a data-name="key-definitions"><h4>1. Data Processing</h4></a>

<p>
    <ul>
        <li>
            <b>Scope and Roles.</b> This DPA applies when Customer Data is processed by dApp. In this context, Patientory, Inc. will act as “processor” and “controller” to Customer who may act as “controller” with respect to Customer Data (as each term is defined in the GDPR).
        </li>
        <li>
            <b>Customer Controls.</b> The Services provide Customer with a number of controls, including security features and functionalities, that Customer may use to retrieve, correct, delete or restrict Customer
        </li>
        <li>
            <b>Details of Data</b>
            <ul>
                <li>The subject matter of the data processing under this DPA is Customer</li>
                <li>As between Patientory, Inc. and Customer, the duration of the data processing under this DPA is determined by Customer.</li>
                <li>The purpose of the data processing under this DPA is the provision of the Services initiated by Customer from time to time.</li>
                <li><b>Nature of the processing: </b>Compute, storage and such other Services as described in the Documentation and initiated by Customer from time to time.</li>
                <li><b>Type of Customer Data: </b>Customer Data uploaded to the Services under Customer’s Patientory, Inc. </li>
            </ul> 
        </li>
        <li>
            <b>Categories of data subjects.</b> The data subjects may include Customer’s customers, employers, suppliers and end-user
        </li>
        <li>
            <b>Compliance with LAW.</b> Each party will comply with all laws, rules and regulations applicable to it and binding on it in the performance of this DPA, including the GDPR.
        </li>
    </ul>
</p>

<a data-name="key-definitions"><h4>2. Customer Instructions</h4></a>
<p>The parties agree that this DPA constitutes Customer’s documented instructions regarding Patientory, Inc’s processing of Customer Data (<b>“Documented Instructions”</b>). Patientory, Inc. will process Customer Data only in accordance with Documented Instructions. Additional instructions outside the scope of the Documented Instructions (if any) require prior written agreement between Patientory, Inc. and Customer, including agreement on any additional fees payable by Customer to Patientory, Inc. for carrying out such instructions. Customer is entitled to terminate this DPA and the Agreement if Patientory, Inc. declines to follow instructions requested by Customer that are outside the scope of, or changed from, those given or agreed to be given in this DPA.</p>

<a data-name="key-definitions"><h4>3. Confidentiality of Customer Data.</h4></a>
<p>dApp will not access or use, or disclose to any third party, any Customer Data, except, in each case, as necessary to maintain or provide the Services, or as necessary to comply with the law or a valid and binding order of a governmental body (such as a subpoena or court order). If a governmental body sends Patientory, Inc. a demand for Customer Data, Patientory, Inc. will attempt to redirect the governmental body to request that data directly from Customer. As part of this effort, Patientory, Inc. may provide Customer’s basic contact information to the government body. If compelled to disclose Customer Data to a government body, then Patientory, Inc. will give Customer reasonable notice of the demand to allow Customer to seek a protective order or other appropriate remedy unless Patientory, Inc. is legally prohibited from doing so. If the Standard Contractual Clauses apply, nothing in this Section 3 varies or modifies the Standard Contractual Clauses.
</p>

<a data-name="key-definitions"><h4>4. Confidentiality Obligations</h4></a>
<p>dApp restricts its personnel from processing Customer Data without authorization by Patientory, Inc. as described in the Patientory, Inc. Security Standards. Patientory, Inc. imposes appropriate contractual obligations upon its personnel, including relevant obligations regarding confidentiality, data protection and data security.</p>

<a data-name="key-definitions"><h4>5. Security of Data Processing</h4></a>
<p>
    <ul>
        <li>dApp has implemented and will maintain the technical and organizational measures for the Patientory, Inc. Network as described in the Patientory, Inc. Security Standards and this Section. In particular, Patientory, Inc. has implemented and will maintain the following technical and organizational measures:</li>
        <li>security of the Patientory, Inc. Network;</li>
        <li>physical security of the facilities;</li>
        <li>measures to control access rights for Patientory, Inc. employees and contractors in relation to the Patientory, Inc. Network; and</li>
        <li>processes for regularly testing, assessing and evaluating the effectiveness of the technical and organizational measures implemented by Patientory, Inc.</li>
    </ul>
</p>

<a data-name="key-definitions"><h4>6. dApp Certifications and Audits.</h4></a>
<p><b>Patientory, Inc. – Certification and SOC Reports. In addition to the information contained in this DPA, upon Customer’s request, and provided that the parties have an applicable NDA in place, Patientory, Inc. will make available the following documents and information: the System and Organization Controls (SOC) 1 Report, the System and Organization Controls (SOC) 2 Report and the System and Organization Controls (SOC) 3 Report (or the reports or other documentation describing the controls implemented by Patientory, Inc. that replace or are substantially equivalent to the SOC 1, SOC 2 and SOC 3).</b></p>
<p>
    <ul>
        <li><b>dApp Audits.</b>Patientory, Inc. uses external auditors like securitymetrics.com to verify the adequacy of its security measures, including the security of the physical data centers from which Patientory, Inc. provides the Services. This audit: (a) will be performed at least annually; (b) will be performed according to ISO 27001 standards or such other alternative standards that are substantially equivalent to ISO 27001; (c) will be performed by independent third party security professionals at Patientory, Inc’s selection and expense; and (d) will result in the generation of an audit report (<b>“Report”</b>), which will be Patientory, Inc’s Confidential Information.</li>
        <li><b>Audit Reports.</b> At Customer’s written request, and provided that the parties have an applicable NDA in place, Patientory, Inc. will provide Customer with a copy of the Report so that Customer can reasonably verify Patientory, Inc’s compliance with its obligations under this</li>
    </ul>
</p>

<a data-name="key-definitions"><h4>7. Transfers of Personal Data</h4></a>
<p>
    <ul>
        <li><b>Application of Standard Contractual Clauses.</b> The Standard Contractual Clauses will apply to Customer Data that is transferred outside the EEA, either directly or via onward transfer, to any country not recognized by the European Commission as providing an adequate level of protection for personal data (as described in the GDPR). The Standard Contractual Clauses will not apply to Customer Data that is not transferred, either directly or via onward transfer, outside the EEA. Notwithstanding the foregoing, the Standard Contractual Clauses (or obligations the same as those under the Standard Contractual Clauses) will not apply if IO has adopted Binding Corporate Rules for Processors or an alternative recognized compliance standard for the lawful transfer of personal data (as defined in the GDPR) outside the EEA.</li>
    </ul>
</p>

<a data-name="key-definitions"><h4>8. Transfers of Personal Data</h4></a>
<p>This DPA shall continue in force until the termination of the Agreement (the <b>“Termination Date”</b>).</p>

<a data-name="key-definitions"><h4>9. Return or Deletion of Customer Data.</h4></a>
<p>The Services provide Customer with controls that Customer may use to retrieve or delete Customer Data as described in the Documentation. Up to the Termination Date, Customer will continue to have the ability to retrieve or delete Customer Data in accordance with this Section. For 90 days following the Termination Date, Customer may retrieve or delete any remaining Customer Data from the Services, subject to the terms and conditions set out in the Agreement, unless prohibited by law or the order of a governmental or regulatory body or it could subject Patientory, Inc. or its Affiliates to liability. No later than the end of this 90 day period, Customers will close all Patientory, Inc. accounts. Patientory, Inc. will delete Customer Data when requested by Customer by using the Service controls provided for this purpose by Patientory, Inc. </p>

<a data-name="key-definitions"><h4>10. Entire Agreement; Conflict.</h4></a>
<p>Except as amended by this DPA, the Agreement will remain in full force and effect. If there is a conflict between any other agreement between the parties including the Agreement and this DPA, the terms of this DPA will control.</p>

<a data-name="key-definitions"><h4>11. Definitions</h4></a>
<p>Unless otherwise defined in the Agreement, all Capitalized terms used in this DPA will have the meanings given to them below:</p>
<p><b>“Patientory, Inc. Network”</b> means Patientory, Inc’s data center facilities, servers, networking equipment, and host software systems (e.g., virtual firewalls) that are within Patientory, Inc’s control and are used to provide the Services.
</p>
<p><b>“Patientory, Inc. Security Standards”</b> means the security standards attached to the Agreement, or if none are attached to the Agreement, attached to this DPA as Annex 1.</p>
<p><b>“Customer”</b> means you or the entity you represent.</p>
<p><b>“Customer Data”</b> means the “personal data” (as defined in the GDPR) that is uploaded to the Services under Customer’s Patientory, Inc. accounts.</p>
<p><b>“EEA”</b> means the European Economic Area.</p>
<p><b>“GDPR”</b> means Regulation 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
<p><b>“processing”</b> has the meaning given to it in the GDPR and “process”, “processes” and “processed” will be interpreted accordingly.</p>
<p><b>“Security Incident”</b> means a breach of Patientory, Inc’s security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Customer Data.</p>
<p><b>“Standard Contractual Clauses”</b> means Annex 2, attached to and forming part of this DPA pursuant to the European Commission Decision of 5 February 2010 on standard contractual clauses for the transfer of personal data to processors established in third countries under Directive 95/46/EC.</p></div>
                </div>
            </section>
        </Route>
    )
}

export default Privacy;