import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { getPost } from '../../lib/posts';

interface Item {
  id: string | number
  slug: string
  title: string
  description: string
  content: string
  author: string
  date: string
  src: string
}

const mock: Item[] = [
{
  id: 6,
  slug: 'ccm-rpm-physician',
  date: 'Press Release • 29.01.2020',
  title: 'CCM & RPM Physician',
  description: '',
  content: `

    <div><b>Transform Patient Care with AI & Digital Health!</b></div><BR>
    Patientory, a leader in blockchain and AI-driven healthcare solutions, is seeking a Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) Physician to join our innovative team. This role is ideal for a physician passionate about digital health, AI, and proactive patient care through technology-driven solutions.<BR><BR>

    Patientory is creating a cutting edge healthcare technology company to enable specific cybersecurity digital blockchain distributed technology software services for availability across healthcare stakeholders.<BR><BR>

    <div><b>Role Overview</b></div><BR>
    As a CCM & RPM Physician, you will oversee chronic disease management and remote patient monitoring, leveraging cutting-edge AI and blockchain technology to improve patient outcomes. You will work closely with care teams, provide virtual patient consultations, and ensure the highest standards of remote care management.<BR><BR>

    <div><b>Key Responsibilities</b></div><BR>

    <ul>
      <li>1. Manage and oversee CCM & RPM programs, ensuring compliance with CMS and payer guidelines</li>
      <li>2. Conduct virtual patient consultations for chronic disease management and remote monitoring</li>
      <li>3. Utilize AI-driven analytics to assess patient data and optimize treatment plans</li>
      <li>4. Collaborate with care teams, including nurses and care coordinators, to implement proactive interventions</li>
      <li>5. Ensure documentation and billing compliance for CCM & RPM services</li>
      <li>6. Provide telehealth-based patient education on chronic disease management</li>
      <li>7. Stay up-to-date with digital health trends and contribute to innovative care strategies</li>
    </ul><BR>

    <div><b>Qualifications:</b></div><BR>
    <ul>
      <li>1. MD or DO, Board-Certified in Internal Medicine, Family Medicine, or related field</li>
      <li>2. Licensed to practice in the U.S. (multi-state licensure a plus)</li>
      <li>3. Experience in chronic disease management and telemedicine</li>
      <li>4. Familiarity with CCM & RPM billing and CMS reimbursement guidelines</li>
      <li>5. Strong understanding of EHRs, digital health platforms, and AI-driven healthcare analytics</li>
      <li>6. Passion for technology-driven healthcare solutions</li>
    </ul><BR>

    <div><b>Why Join Patientory?</b></div><BR>
    <ul>
      <li>1. Be at the forefront of AI and blockchain in healthcare</li>
      <li>2. Impact patient outcomes through remote monitoring and proactive care</li>
      <li>3. Work with an innovative, forward-thinking team</li>
      <li>4. Competitive compensation, flexible remote work, and professional growth opportunities</li>
    </ul><BR><BR>

    <div>Apply Now and be part of the revolution in digital health and AI-driven patient care!</div>

  `,
  src: 'https://bulma.io/images/placeholders/128x128.png',
  author: 'Patientory'
},
{
  id: 5,
  slug: 'vp-business-development',
  date: 'Press Release • 29.01.2020',
  title: 'Vice President (VP), Business Development ',
  description: '',
  content: `

    <div><b>Company Overview</b></div><BR>
    Patientory is empowering people to take charge of their own health. We’re revolutionizing the way doctors and patients interact and gain access to information, cutting out all layers and processes that currently are stumbling blocks in care coordination. We connect doctors, care providers, and consumers all within a single, secure platform – creating a care team that works together to provide the best care.<BR><BR>

    Patientory is creating a cutting edge healthcare technology company to enable specific cybersecurity digital blockchain distributed technology software services for availability across healthcare stakeholders.<BR><BR>

    <div><b>Position Overview</b></div><BR>
    Patientory, Inc is currently seeking for a Vice President (VP), Business Development to lead our business development, commercial project origination, and opportunity qualification activities. The VP, Business Development is a highly collaborative, influential, and experienced senior leader who is responsible for initiating and closing sales opportunities that  significantly accelerate Patientory’s  growth and profitability and help fulfill the company’s vision to transform the healthcare experience. This position achieves these goals by developing and implementing the company’s business development strategy and tactics. <BR><BR>

    <div><b>Position Description</b></div><BR>

    <ul>
      <li>1. Develop and execute company sales and marketing plans, including implementing new ideas and tools for the company.</li>
      <li>2. Lead company’s planning and execution of strategies to increase sales and company growth.</li>
      <li>3. Identify and vet potential partnership deals and new business opportunities.</li>
      <li>4. Leads sales, marketing, customer service, and client relationship management teams.</li>
      <li>5. Perform competitor and SWOT analysis</li>
      <li>6. Manage business development pipeline</li>
      <li>7. Work with Marketing and Sales departments on key initiatives.</li>
      <li>8. Create, administer, and implement the business development strategies and tactics for the company.</li>
    </ul><BR>

    <div><b>General Support</b></div><BR>
    Work with the Patientory team to add support in other areas and assist with other company projects and initiatives, as needed and support the execution of the Patientory Operating Plan to meet overall business goals and objectives.<BR><BR>

    <div><b>Position Requirements:</b></div><BR>
    <div><b>Education & Experience</b></div><BR>
    <ul>
      <li>1. Minimum – Bachelor’s degree in sales related fields of study, including at least 10 years in client relationship management, professional services, business development, team leadership, Human Resources and B2B2C sales</li>
      <li>2. Experience  leading sales teams</li>
      <li>3. 3-5 years supervisory or management experience</li>
      <li>4. 5-10 years sales or marketing experience</li>
      <li>5. Experience utilizing CRM systems, developing metrics and dashboards, and managing sales teams through the use of CRM tools and methods.</li>
    </ul><BR>

    <div><b>Knowledge, Skills and Abilities</b></div><BR>
    <ul>
      <li>1. Ability to work independently and collaboratively as a team member.</li>
      <li>2. Capable of recommending vendor products, services, and solutions to impact cost reductions and resource maximization.</li>
      <li>3. A strong passion for getting things done, solving real problems, and learning new things.</li>
      <li>4. Strong research, analytical, and problem solving skills</li>
      <li>5. Strong leadership capability </li>
      <li>6. Flexible and able to work in a fast-paced, dynamic environment. </li>
      <li>7. Exceptional relationship management skills and the ability to build and grow connections with people of all types and backgrounds.</li>
      <li>8. Exceptional verbal and written communication skills.</li>
      <li>9. Highly organized and detail oriented, with the ability to keep multiple projects and client engagements active at once.</li>
      <li>10. Financial and business acumen.</li>
      <li>11. Ability to communicate accessibly and concisely about product or service to outsiders, including prospective users and clients, partners , vendors and press.</li>
    </ul>

  `,
  src: 'https://bulma.io/images/placeholders/128x128.png',
  author: 'Patientory'
},
{
  id: 4,
  slug: 'marketing-growth-specialist',
  date: 'Press Release • 29.01.2020',
  title: 'Marketing - Growth Specialist',
  description: '',
  content: `

    <div><b>Company Overview</b></div><BR>
    Patientory is empowering people to take charge of their own health. We’re revolutionizing the way doctors and patients interact and gain access to information, cutting out all layers and processes that currently are stumbling blocks in care coordination. We connect doctors, care providers, and consumers all within a single, secure platform – creating a care team that works together to provide the best care.<BR><BR>

    Patientory is creating a cutting edge healthcare technology company to enable specific cybersecurity digital blockchain distributed technology software services for availability across healthcare stakeholders.<BR><BR>

    <div><b>Position Overview</b></div><BR>
    Patientory Inc. is currently looking for talented and enthusiastic Marketing-Growth Specialists to join our team and help us in our overall marketing efforts. As a Marketing- Growth Specialist, you will help to develop, execute, and monitor marketing programs across a variety of channels. You'll play a key role in the creation and execution of marketing programs to achieve goals ranging from brand awareness to product promotion.<BR><BR>

    <div><b>Key Roles and Responsibilities</b></div><BR>

    <ul>
      <li>1. Conduct market research to learn about customer patterns, competitive products, and demographic details and analyze them to identify new marketing opportunities</li>
      <li>2. Create innovative marketing campaigns and investigate the performance of a company through evaluating key performance metrics and present the recommendations to management.</li>
      <li>3. Establish goals and objectives in order to reach our customers through appropriate marketing channels.</li>
      <li>4. Building and maintaining relationships with new and existing customers through networking and prospecting. </li>
      <li>5. Create objectives and goals in order to approach customers through the most appropriate marketing channels.</li>
      <li>6. Collaborate with other internal teams to develop and monitor strategic marketing initiatives</li>
    </ul><BR>

    <div><b>Qualifications</b></div><BR>
    <ul>
      <li>1. At least Bachelor’s degree in marketing, communications, business administration or a related field.</li>
      <li>2. +2 years of experience in marketing or sales</li>
      <li>3. Solid computer skills and knowledge of HTML, CSS, Google Analytics, Mailchimp, Hootsuite or other social media management systems. </li>
      <li>4. Through understanding of marketing elements including traditional and digital marketing such as SEO, social media and market research methods.</li>
      <li>5. Excellent analytical and project management skills</li>
      <li>6. Outstanding organizational and leadership skills with excellent interpersonal and public speaking skills</li>
      <li>7. Critical thinking and problem-solving skills</li>
      <li>8. Time management and multitasking skills with the ability to prioritize tasks</li>
      <li>9. Ability to work under pressure and motivate to succeed in a competitive environment</li>
      <li>10. Ability to write, proofread and edit creative and technical content across multiple platforms</li>
    </ul>

  `,
  src: 'https://bulma.io/images/placeholders/128x128.png',
  author: 'Patientory'
},
{
  id: 1,
  slug: 'chief-operating-officer',
  date: 'Press Release • 29.01.2020',
  title: 'Chief Operating Officer',
  description: '',
  content: `

    <div><b>Company Overview</b></div><BR>
    Patientory is empowering people to take charge of their own health. We’re revolutionizing the way doctors and patients interact and gain access to information, cutting out all layers and processes that currently are stumbling blocks in care coordination. We connect doctors, care providers, and consumers all within a single, secure platform – creating a care team that works together to provide the best care.<BR><BR>

    Patientory is creating a cutting edge healthcare technology company to enable specific cybersecurity digital blockchain distributed technology software services for availability across healthcare stakeholders.<BR><BR>

    <div><b>Position Overview</b></div><BR>
    Patientory Inc. is currently seeking a Chief Operating Officer  to oversee our organization’s ongoing operations and procedures. As a member of the Executive Team, the Chief Operations Officer is responsible for providing leadership, management, and vision to the organization, as well as ensuring that adequate operational controls, administrative and reporting procedures, personnel, and systems are in place to ensure the company's effective performance. The COO is responsible for the efficiency of the business, overseeing the company’s ongoing operations and procedures, designing and implementing diverse business operations and establishing policies that promote the company’s vision.<BR><BR>

    <div><b>Key Roles and Responsibilities</b></div><BR>

    <ul>
      <li>1. Designing and implementing business strategies, plans and procedures</li>
      <li>2. Collaborate with CEO and other executives to set and drive company vision, operational strategy, hiring needs, and financial reports</li>
      <li>3. Establishing policies that promote company culture and vision</li>
      <li>4. Overseeing daily operations of the company and the work of executives (IT, Marketing, Sales, Finance etc.)</li>
      <li>5. Evaluate performance by analyzing and interpreting data and metrics</li>
      <li>6. Set comprehensive goals for performance and growth</li>
      <li>7. Assist CEO in fundraising ventures and manage relationships with partners/vendors</li>
    </ul><BR>

    <div><b>Qualifications</b></div><BR>
    <ul>
      <li>1. BSc/BA in Business Administration or relevant field; MSc/MBA is a plus</li>
      <li>2. 8-10 plus years experience in senior management or executive positions in various businesses and industries</li>
      <li>3. Excellent judgment and creative problem solving skills including negotiation and conflict resolution skills</li>
      <li>4. In-depth understanding of the industry including risk management, compliance, and regulatory requirements</li>
      <li>5. Working knowledge of data analysis, performance/operation metrics, IT/ Business infrastructure, and MS Office</li>
      <li>6. Outstanding organizational and leadership skills with excellent interpersonal and public speaking skills</li>
    </ul>

  `,
  src: 'https://bulma.io/images/placeholders/128x128.png',
  author: 'Patientory'
},
{
  id: 2,
  slug: 'vice-president',
  date: 'Press Release • 29.01.2020',
  title: 'Vice President (VP), Business Development',
  description: '',
  content: `

    <div><b>Position Summary:</b></div><BR>
    The VP, Business Development is a highly collaborative, influential, and experienced senior leader who is responsible for initiating and closing sales opportunities that  significantly accelerate Patientory’s  growth and profitability and help fulfill the company’s vision to transform the healthcare experience. This position achieves these goals by developing and implementing the company’s business development strategy and tactics.<BR><BR>

    <div><b>About Patientory</b></div><BR>
    Patientory is empowering people to take charge of their own health. We’re revolutionizing the way doctors and patients interact and gain access to information, cutting out all layers and processes that currently are stumbling blocks in care coordination. We connect doctors, care providers, and consumers all within a single, secure platform – creating a care team that works together to provide the best care.<BR><BR>

    Patientory is creating a cutting edge healthcare technology company to enablespecific cybersecurity digital blockchain distributed technology software services for availability across healthcare stakeholders.<BR><BR>
    
    <div><b>Position Description</b></div><BR>

    <ul>
      <li>1. Identify and vet potential partnership deals and opportunities</li>
      <li>2. Ensure the product roadmap aligns with Patientory’s overall objectives</li>
      <li>3. Build and maintain systems in a way that ensures compliance with certification, regulatory standards, and FDA guidelines</li>
      <li>4. Become an expert in the company’s products and where they sit within the larger ecosystem</li>
      <li>5. Establish relationships and close big partnership deals which can even include M&As and other acquisitions</li>
      <li>6. Travel to business development meetings, industry conferences, trade shows, etc.</li>
      <li>7. Perform competitor and SWOT analysis</li>
      <li>8. Manage business development pipeline</li>
      <li>9. Work with Marketing and Sales departments on key initiative</li>
      <li>10. Create, administer, and implement the business development strategies and tactics for the company</li>
    </ul><BR>

    <div><b>General Support:</b></div><BR>
    Work with the Patientory team to add support in other areas and assist with other company projects and initiatives, as needed and support the execution of the Patientory Operating Plan to meet overall business goals and objectives.<BR><BR>
    
    <div><b>Position Requirements:</b></div><BR>
    <div><b>Education & Experience</b></div><BR>
    <ul>
      <li>1. Minimum – Bachelor’s Degree in Computer Science, Information Systems, Engineering,  or related field. Master’s Degree preferred.</li>
      <li>2. 10+ years of healthcare domain expertise</li>
      <li>3. 10+ years of new software development experience (coding and design) preferably in .net.</li>
      <li>4. 5+ years of experience in managing internal and external Software Developers.</li>
      <li>5. 7+ years of experience in developing large-scale, distributed data-centric solutions</li>
    </ul><BR>

    <div><b>Knowledge, Skills and Abilities</b></div><BR>
    <ul>
      <li>1. Knowledge or working experience of Data Processing Algorithms and Design Patterns</li>
      <li>2. Significant experience developing software using a modern language/framework (SQL, Angular, Node, React, etc.)</li>
      <li>3. Experience with big data platforms preferred, with Machine learning/Deep learning platform a plus</li>
      <li>4. Ability to mobilize and lead technical teams to achieve company goals and long-term IT objectives.</li>
      <li>5. Ability to work independently and collaboratively as a team member.</li>
      <li>6. Capable of recommending vendor products, services, and solutions to impact cost reductions and resource maximization</li>
      <li>7. A strong passion for getting things done, solving real problems, and learning new things</li>
      <li>8. Knowledge of FDA compliance</li>
      <li>9. Ability to mobilize and lead technical teams to achieve company goals and long-term IT objectives.</li>
      <li>10. Strong leadership capability</li>
      <li>11. Strong relationship management skills</li>
      <li>12. Flexible and able to work in a fast-paced, dynamic environment.</li>
    </ul>

  `,
  src: 'https://bulma.io/images/placeholders/128x128.png',
  author: 'Patientory'
},
{
  id: 3,
  slug: 'full-stack-developer',
  date: 'Press Release • 29.01.2020',
  title: 'Full Stack Engineering Developer',
  description: '',
  content: `

    <div><b>Job Description</b></div><BR>
    Do you play around in Node.js for fun? Do you get jazzed when considering the power of blockchain? Can you define business logic with your eyes closed? If so, then we need to talk immediately! We’re looking for an experienced Full Stack Engineering Developer to help us build Patientory, the cybersecurity blockchain-based distributed electronic medical network. By building our core technology and flagship app, you’ll have a chance to have an immediate impact on the future of healthcare.<BR><BR>

    <div><b>About Company</b></div><BR>
    Patientory is an exciting startup that is set to transform healthcare with its cybersecurity blockchain-based distributed electronic medical record network. We are committed to empowering consumers to organize and take control of their health history, thereby improving their overall quality of life.<BR><BR>
    
    <div><b>Our ideal candidate has:</b></div><BR>

    <ul>
      <li>1. Experience building products across the stack and a firm understanding of web frameworks, APIs, databases, and multiple back end languages.</li>
      <li>2. Deep knowledge of and experience with Node.js, C/C++, Java, Python, or Go</li>
      <li>3. Proven experience as a Full Stack Developer or similar role</li>
      <li>4. Experience with distributed algorithms, machine learning, artificial intelligence, complexity science</li>
      <li>5. Familiarity with all layers in computer software development</li>
      <li>6. Vast knowledge about Blockchain and cryptocurrency, and Provable contributions to projects in decentralization or cryptocurrency</li>
      <li>7. Min. Bachelor’s degree in computer science or related field, Master’s is preferred</li>
    </ul><BR>

    <div><b>Requirements:</b></div><BR>
    <ul>
      <li>1. Experience at a fast-growing startup or fast-moving top-tier institution is a plus.</li>
      <li>2. Exceptional learning capacity</li>
      <li>3. High-level project management skills  and have ability to get things done</li>
      <li>4. Outstanding attention to detail</li>
      <li>5. Strong leadership and communication skills</li>
      <li>6. Knows how to ask questions, solicit and relish feedback, iterate quickly, and implement solutions</li>
      <li>7. Good communication skills</li>
    </ul><BR>

    <div><b>Roles and Responsibilities:</b></div><BR>
    <ul>
      <li>1. Meeting with the software development team to define the scope and scale of software projects</li>
      <li>2. Designing and implementing scalable web services, applications, and APIs</li>
      <li>3. Troubleshooting and bug fixing</li>
    </ul>

  `,
  src: 'https://bulma.io/images/placeholders/128x128.png',
  author: 'Patientory'
}]

export default function useCareerPost(): [Item] {
  const router = useRouter();
  const [item, setItem] = React.useState<Item | undefined>();

  // useEffect(() => {
  //   if (!router.query.id)
  //     return;
      
  //   getPost(router.query.id)
  //   .then(({post: item}) => {
  //     console.log(item);
  //     setItem(
  //       {
  //         id: item.slug,
  //         date: item.date,
  //         title: item.title,
  //         description: item.excerpt,
  //         content: item.content,
  //         src: item.featuredImage.node.mediaItemUrl,
  //         author: item.author.node.name
  //       }
  //     )
  //   })
  //   .catch(e => {
  //     setItem(mock);
  //   });
  // }, [router.query.id]);

  const [items] = React.useState<Item[]>(mock);
  console.log(router.query.id);


  for(var i=0; i < items.length; i++) {
    console.log(typeof(items[i]));
      //return [items[i]];

      if(items[i].slug == router.query.id)
      {
        // setItem(
        //   {
        //     id: items[i].id,
        //     slug: items[i].slug,
        //     date: items[i].date,
        //     title: items[i].title,
        //     description: items[i].description,
        //     content: items[i].content,
        //     src: items[i].src,
        //     author: items[i].author
        //   }
        // )

        return [items[i]];
      }
        
  }

  // var post: any;
  // items.forEach(item => {
  //          //This does ifre
  //          console.log(item.slug);
  //        if(item.slug === router.query.id)
  //           post = item;
  //         console.log(post);
  //     })

  return [items[0]];
}

interface Props {
  children: (item: Item, idx?: number) => JSX.Element
}

export const CareerPost = (props: Props): JSX.Element => {
  const [item] = useCareerPost();
  return (
    <React.Fragment>
      {item && props.children(item)}
    </React.Fragment>
  );
}
        