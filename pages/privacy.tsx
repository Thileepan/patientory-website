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
                        Privacy policy
                    </h1>
                    {/*<ReactMarkdown className="has-text-left md-content">
                        {markdown}
                    </ReactMarkdown>*/}

                    <h4>PATIENTORY PRIVACY POLICY</h4>
<div className="has-text-left">
<p>This Data Processing Addendum (“DPA”) is an agreement between Patientory, Inc.(“Patientory,” “we,” “us,” or “our”) and you (“Customer”, “user” or “you”</p>

<p>Thank you for being a part of the Patientory community. We wrote this Privacy Policy to help you understand how Patientory Inc. (“<b>us</b>,” “<b>we</b>,” or “<b>Patientory</b>”) uses and protects the information that we collect from you when you visit <a href="https://patientory.com">www.patientory.com</a> (the “<b>Patientory Website</b>”), use our mobile application (the “Patientory Application”), or interact with us in any other context in which we provide or link to this Privacy Policy (together with the Patientory Website and Patientory Application, the “Services”).</p>

<p>Please review this Privacy Policy, which is incorporated into and made part of our Terms of Use. By using the Services, you confirm that you understand and agree to the provisions contained in these documents. If you do not understand our Privacy Policy or our Terms of Use, please contact us at <a href="mailto:support@patientory.com">support@patientory.com</a> or by using the information below. If you do not agree to our Privacy Policy or Terms of Use, you may not use the Services.</p>

<p>Please use the below links to navigate our Privacy Policy:</p>

<p><a href="#key-definitions">Key Definitions</a></p>

<p><a href="#collect-information">How We Collect Your Information</a></p>

<p><a href="#information-stored">How Your Information Is Stored</a></p>

<p><a href="#use-information">How We Use Your Information</a></p>

<p><a href="#technologies">Data Collection Technologies</a></p>

<p><a href="#share-information">When We Share Your Information</a></p>

<p><a href="#international-users">Note to International Users</a></p>

<p><a href="#choices">Your Choices</a></p>

<p><a href="#protect-information">How We Protect Your Information</a></p>

<p><a href="#privacy-rights">Children’s Privacy Rights</a></p>

<p><a href="#retention-information">Retention of Your Information</a></p>


<p><a href="#third-party-services">Third Party Links and Services</a></p>

<section id="key-definitions"></section>
<p><a href="#changes-privacy-policy">Changes to This Privacy Policy</a></p>

<p><a href="#contact-us">How to Contact Us</a></p>



<a data-name="key-definitions"><h4>KEY DEFINITIONS</h4></a>

<p>“Aggregate Information” is information that has been combined with information about other users and analyzed or evaluated as a whole, such that no specific individual may be reasonably identified. For example, Aggregate Information may include a statement that says “50% of our users have uploaded medical information in the last 6 months.”</p>

<p>“Cookies” are small text files that are placed on your hard disk by a webpage server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to your browser or device, and can only be read by a web server in the domain that issued the Cookie to you.</p>

<p>“Health Care Providers” are providers, doctors, specialists, professionals and other organizations who deliver health care services to you and/or take part in your treatment.</p>

<p>“Health Device Data” is any information that is derived from a mobile device or a wearable fitness tracker that tracks or monitors behavior in a way intended to give the user insight into physical activity and wellness.</p>

<p>“Personal Information” is any information that relates to you directly or indirectly.</p>

<p>“Usage Information” is information that we automatically collect about your device and your use of the Services. This type of information does not usually, by itself, uniquely identify you, but it may still be Personal Information. Usage Information may include your IP address, domain server, type of device(s) and web browser(s) used to access the Services, referring webpage or other source through which you accessed the Services, and other statistics and information associated with the interaction between your browser or device.</p>

<p>“Web Beacons” (also known as “clear GIFs” and “pixel tags”) are small bits of code embedded in web pages or in emails that are used to monitor the behavior of a website user or recipient of an email.</p>
<section id="collect-information"></section>
<p>“Your Content” is the information, comments, photos, images, video, data, text, and other content that you may post, upload, store, share, send or display through the Patientory Application. Your Content also includes any copies of or excerpts from medical records and Personal Information that you upload to the Services.</p>


<a data-name="collect-information"><h4>HOW WE COLLECT YOUR INFORMATION</h4></a>

<p>We may collect your information in the following ways:</p>

<p>• When you voluntarily share your information with us. We will ask you to provide us with information in order to access certain features of the Patientory Application. For example, when you create an account for the Patientory Application, we may ask for your name, contact information, birthday, and health information. When you create a profile, we may collect your photos and additional information that you provide to personalize your profile. We may also conduct surveys or polls that request your information.</p>
 

<p>• When you use interactive tools on the Patientory Application. We may collect your information when you use the Patientory Application’s interactive tools, such as uploading copies of and/or excerpts from medical records, and syncing or uploading Health Device Data to the Patientory Application.</p>
 

<p>• When you submit content. Certain features of the Patientory Application may allow you to communicate your Content on public forums or to share it with Health Care Providers. When you share Content in this way, you share it at your own risk.</p>
 

<p>• Automatically through your use of the Patientory Website. When you navigate the Patientory Website, we and our service providers may collect Usage Information through a variety of technical methods, including Cookies, Web Beacons, and other identifiers (collectively, “Data Collection Technologies”). For more information about how we use Data Collection Technologies, please see the Section titled Data Collection Technologies below. To learn how to exercise your choices about Data Collection Technologies, please see the Section titled Your Choices.</p>
 

<p>• From social networks and other third parties. We may collect your information from sources other than you, such as from social networks, chat rooms, message boards, other users, and our business partners. If you use or access the Patientory Application or other Patientory Services on or through a social network, we may receive from the social network certain information about you. The information that we receive depends on the social network and your privacy settings with that network. Your interactions with social networks are governed by that network’s privacy statement. You should always review and, if necessary, adjust your privacy settings on third party websites and services before linking or connecting them to the Patientory Application or other Patientory Services.</p>
<section id="information-stored"></section>
<p>If you choose not to provide us with any of your information, you may still be able to access and use some of our Services. Note, however, that certain features of our Services that require your information may not be accessible to you.</p>

<a data-name="information-stored"><h4>HOW YOUR INFORMATION IS STORED</h4></a>

<section id="use-information"></section>
<p>Storage of your Content using the Patientory Application relies on blockchain technology.  This means that Patientory community members who are not affiliated with Patientory, Inc. are incentivized to provide and facilitate access to digital storage space.  This system is designed with the intent that these community members are unable to access unencrypted copies of your Content.  Patientory, Inc. maintains access to the information stored with these third party service providers for analytics and other purposes as described in this Privacy Policy.  Patientory may not have the ability to recover your Content if issues arise in the storage or transfer of this information from community members providing digital storage space for the Patientory Application.  Please refer to the “How We Protect Your Information” section of this Privacy Policy below for more information.</p>

<a data-name="use-information"><h4>HOW WE USE YOUR INFORMATION</h4></a>

<p>We use your information to operate, provide, analyze, and improve the Services, consistent with our commitments in this Privacy Policy. These activities may include, but are not limited to:</p>

<p>• Provide you the Patientory Application and fulfill your requests. We may use your information to register you, administer your account and profile, enable purchases and other transactions, and provide you the information and services that you request, including information about health care and health-related services and resources.</p>
 

<p>• Communicate with you. We may contact you to share information and marketing materials that we think might be of interest to you. You may unsubscribe from receiving marketing emails from us by emailing us at support@patientory.com or using the unsubscribe link included in the marketing email. We may also send you administrative messages such as support updates, technical notices, security alerts and administrative messages about changes to this Privacy Policy, our Terms of Use, or the Services.</p>
 

<p>• Enhance your experience. We use your Usage Information to personalize and enhance your experience when you use the Services, such as tailoring content and advertising and remembering your preferences.</p>
 

<p>• Monitor, improve, and develop new Services. Your information helps us improve the content and functionality of our Services. For example, we may use our users’ demographics, interests, uploaded Content, and behaviors to create new features and content. We may also use your information to monitor and analyze trends, usage and activities in connection with the Services.</p>
 

<p>• Prevent illegal activities. We use your information to detect, investigate and prevent fraudulent transactions and other illegal activities. We also may use your information to protect the rights and property of Patientory and others.</p>
 

<p>• As disclosed. In addition to those purposes listed above, we may use your information for any other purpose disclosed to you at the time of collection.</p>

<section id="technologies"></section>
<p>We may de-identify or aggregate your information with other users of the Services. This de-identified or Aggregate Information may be used by us for any lawful purpose, including for data mining and analytics.</p>

<a data-name="technologies"><h4>DATA COLLECTION TECHNOLOGIES</h4></a>

<p>We use Cookies and other Data Collection Technologies to provide you with a better experience when you use the Patientory Website. Data Collection Technologies help, us to remember your settings and preferences, keep your information safe and secure, and enable our partners to serve ads for our products and services, including those targeted to your interests.</p>

<p>For example, we partner with Google Analytics, who uses Cookies to track your interactions with our Website. Google then collects that information and reports it to us, without identifying individual users. This information helps us improve our Services so that we can better serve users like you. For more information on Google Analytics, visit https://support.google.com/analytics.</p>

<p>Although most browsers and devices accept Cookies and other Data Collection Technologies by default, their settings usually allow you to clear or decline Cookies. If you disable Cookies, some of the features of our Website may not function properly.</p>

<p>Interest Based Advertising: We may use service providers to serve advertisements on our behalf across the Internet. These advertising service providers may collect (through the use of Data Collection Technologies) non-identifiable information about your visits to and interactions with our Website. In addition, our service providers may also use the information about your visits to other websites to target advertisements for products and services available from us. If you would like more information about this practice, please visit the Network Advertising Initiative (“NAI”) at http://optout.networkadvertising.org/#!/.</p>

<section id="share-information"></section>
<p>Please note: Some web browsers incorporate a “Do Not Track” feature (“DNT”) that signals to the websites that you visit that you do not want to have your online activity tracked. Many websites and applications, including our Website, do not currently respond to web browser DNT signals. For more information about DNT signals, please visit http://allaboutdnt.com.</p>

<a data-name="share-information"><h4>WHEN WE SHARE YOUR INFORMATION</h4></a>

<p>Because we know your Personal Information is important to you, we may share your information for the reason(s) disclosed to you at the time we collect it, with your consent, as well as in the following ways:</p>

<p>• At your direction. We will share your information with third parties if and when you direct us to. For example, you may ask us to share your health information with your Health Care Providers. You may also authorize us to share your information with third party researchers to use the information for scientific research purposes.</p>
 

<p>• With our service providers. We may share your Personal Information with our service providers as necessary to enable them to provide services to us. Service providers are third parties (other companies and individuals) that support the operation and maintenance of our Services.</p>
 

<p>• With our commonly owned entities. We may share your Personal Information with other companies under common ownership and control of Patientory, which may include our subsidiaries, corporate parent, or any other subsidiaries owned by our corporate parent. We do this in order to provide you better service and improve your experience.</p>
 

<p>• For legal purposes. We may share your Personal Information as reasonably necessary to comply with law or a legal process (including a court or government order or subpoena), to detect, prevent, or otherwise address fraud, security or technical issues, to enforce this Privacy Policy and/or the Terms of Use, and to protect the rights, property or safety of Patientory, our members and users, and/or the public.</p>
 

<p>• During a corporate transaction. If Patientory is involved in a merger, acquisition, financing, or sale of business or assets, information collected from and about users may be transferred to one or more third parties involved in such transaction and, upon such transfer, the relevant third party privacy policy or policies may govern further use of the information.</p>

<section id="international-users"></section>
<p>We reserve the right to share or sell Aggregate Information and other de-identified information (including metadata) to third parties for their own internal purposes, and publicly disclose such Aggregated Information and de-identified information, for example, in our marketing materials and research reports.</p>

<a data-name="international-users"><h4>NOTE TO INTERNATIONAL USERS</h4></a>

<p>Patientory is based in the United States and the information we collect is governed by U.S. law.  We recognize that the laws in the United States may be different and, in some cases, less protective as the laws other countries, including the European Economic Area (“EEA”). By providing us with your Personal Information and using our Site, you acknowledge that your Personal Information will be transferred to and processed in the United States.  Patientory is also committed to complying with data protection laws outside of the United States that apply to our collection and use of your Personal Information.</p>

<p>If you are located in the EEA, we have identified the following legal bases for the processing of Personal Information that we collect under this Privacy Policy:</p>

<p>• Where use of your information is necessary to perform our obligations under a contract with you (for example, to comply with: the terms of service of our Website and Application which you accept by browsing the website or registering to use our Application);</p>
<p>• Where use of your information is necessary for our legitimate interests or the legitimate interests of others (for example, to provide security for our Website and Application; operate our business and our Services; make and receive payments; comply with legal requirements and defend our legal rights; prevent fraud and to know the customer to whom we are providing Services);</p>
<p>• Where we are required to process information in accordance with an EU Member State legal obligation;</p>
<p>• Where we are carrying out processing in the public interest; or,</p>
<p>• Where we have your consent, in accordance with applicable law.</p>
<section id="choices"></section>
<p>If applicable, you may make a complaint to the data protection supervisory authority in the country where you reside. Alternatively you may seek a remedy through local courts if you believe your rights have been breached.</p>

<a data-name="choices"><h4>YOUR CHOICES</h4></a>

<p>Your preferences about how we use your information are important to us and, when possible, we aim to honor them. We offer the following choices that you can exercise with regard to your Personal Information, some of which may be required under local laws (e.g., in the EEA). Please note, however, that we may decline your requests in some circumstances.  For example, we may need to continue processing your information for our legitimate interests or to comply with a legal obligation. We may request you to provide us with information necessary to confirm your identity before responding to your request.</p>

<p>• Access and modify your Personal Information. We provide you with account settings and tools to access and manage the Personal Information associated with your Patientory Application account. If you wish to access or modify other of your Personal Information that you are unable to manage using the Patientory Application, such as Usage Information, you may contact us at support@patientory.com with your request and we will make reasonable efforts to accommodate it.</p>
 

<p>• Delete your Personal Information or your account or transfer your information to a third party. You can delete your account at any time by contacting us at support@patientory.com, and local law may permit you to additionally request the deletion of other of your Personal Information that we possess.  Local law may also permit you to request a transfer of Personal Information to a third party service provider.  We will undertake reasonable efforts to honor requests to delete Personal Information stored through the Patientory Application where required by local law.</p>
 

<p>Restrict the way that we process and disclose certain of your Personal Information. Local law may permit you to request restrictions on the way we process certain of your Personal Information. We will undertake reasonable efforts to honor such restrictions in accordance with local law.</p>
 

<p>Opt out or revoke consent for marketing communications or other processing of your Personal Information. You can control marketing communications and certain other notifications by clicking the ‘Unsubscribe’ link in any marketing email you receive from us. You can also email us at support@patientory.com to unsubscribe or revoke your consent for processing of your Personal Information for which you have previously given your consent.</p>
 

<p>• Managing Cookies and Other Data Collection Technologies. You have a number of options to control or limit how we and our service providers use Cookies and other Data Collection Technologies including for advertising:</p>
<p>• To prevent your data from being used by Google Analytics, you can install Google’s opt-out browser add-on.
<p>• For information on how our advertising partners allow you to opt out of receiving ads based on your web browsing history, please visit http://optout.aboutads.info/. To opt out of interest-based advertising, you can visit http://optout.networkadvertising.org/#!/ and follow NAI’s on-screen instructions. Note that if you opt out through the NAI, you will still receive advertising, but the advertising will not be tailored to your interest. In addition, if you opt out through NAI and later delete your Cookies, use a different browser, or buy a new device, you will need you opt out of interest-based advertising again.</p>
<section id="protect-information"></section>
<p>• Check your mobile device for settings that control ads based on your interactions with the applications on your device. For example, on your iOS device, enable the “Limit Ad Tracking” setting, and on your Android device, enable the “Opt out of Ads Personalization” setting.</p>

<a data-name="protect-information"><h4>HOW WE PROTECT YOUR INFORMATION</h4></a>

<section id="privacy-rights"></section>
<p>The security of Personal Information is important to us. We use reasonable safeguards aimed to protect against unauthorized use, disclosure, alteration or destruction of the Personal Information we collect and maintain. You should keep in mind, however, that no data transmitted over the Internet is 100% secure and any information disclosed online can potentially be collected and used by parties other than the intended recipient. As a result, while we strive to protect your information, we cannot guarantee or warrant the security of any information you transmit to or from our Services.</p>

<a data-name="privacy-rights"><h4>CHILDREN’S PRIVACY RIGHTS</h4></a>

<section id="retention-information"></section>
<p>We are committed to protecting the privacy of children. Neither Patientory nor any of its Services are designed for, intended to attract, or directed toward children under the age of thirteen, and we do not knowingly process data of persons under the age of sixteen in the EEA.  If we become aware that a user is under the age of thirteen, or under the age of sixteen in the EEA, and has provided personal information to us, we will take reasonable steps to remove all information provided by such underage user from our database.</p>

<a data-name="retention-information"><h4>RETENTION OF YOUR INFORMATION</h4></a>

<section id="third-party-services"></section>
<p>We keep your information for no longer than necessary for the purposes for which it is processed. The length of time for which we retain information depends on the purposes for which we collected and use it and/or as required to comply with applicable laws.</p>

<a data-name="third-party-services"><h4>THIRD PARTY LINKS AND SERVICES</h4></a>

<section id="changes-privacy-policy"></section>
<p>We provide links to third party websites operated by organizations not affiliated with Patientory. We do not disclose your Personal Information to organizations operating such linked third party websites. Patientory does not review or endorse, and is not responsible for, the privacy practices of these organizations. We encourage you to read the privacy statements of each and every website that you visit. This Privacy Policy applies solely to information collected by Patientory through the Services.</p>

<a data-name="changes-privacy-policy"><h4>CHANGES TO THIS PRIVACY POLICY</h4></a>

<p>As we improve our Services over time, we may need to update this Privacy Policy to reflect new ways we may collect and use your information. When we update this Privacy Policy, we will post a new Effective Date at the top. If we make material changes that would impact your use of the Services or your privacy, we will endeavor to notify you of the changes prior to the changes taking effect, such as by posting a notice directly on the Services, by sending an email notification (if you have provided your email address to us), or by any other reasonable method.</p>

<p><b>Disclaimer:</b> Maintaining the privacy and security of Your Information is important to us. 1upHealth has implemented appropriate safeguards to prevent unlawful use or disclosure of information. These include administrative, physical, and technical security safeguards that reasonably and appropriately protect the confidentiality, integrity, and availability of information we receive, maintain, or transmit. Nevertheless, while security of information is of tremendous importance to us, no data transmission (over the internet or any wireless network) or method of electronic storage can be guaranteed to be 100% secure.</p>
<section id="contact-us"></section>
<p>In the event of a security breach, we will notify affected individuals, regulatory authorities, and others consistent with requirements under federal and state law or contractual obligations.</p>

<a data-name="contact-us"><h4>HOW TO CONTACT US</h4></a>

<p>Questions or comments about this Privacy Policy or our data handling questions can be directed to:</p>

<p>Patientory Inc.</p>

<p>3480 Peachtree Rd NE, Second Floor</p>

<p>Atlanta, GA 30326</p>

{/*<p>(678) 951-9007</p>*/}
<p>support@patientory.com</p></p></div>
                </div>
            </section>
        </Route>
    )
}

export default Privacy;