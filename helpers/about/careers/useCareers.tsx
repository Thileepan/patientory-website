import React, { useEffect } from 'react'
import { getAllPosts } from '../../../lib/posts';

interface Item {
  id: string | number
  slug: string
  title: string
  description: string
}

const mock: Item[] = [
{
  id: 6,
  slug: 'ccm-rpm-physician',
  title: 'CCM & RPM Physician',
  description: 'As a CCM & RPM Physician, you will oversee chronic disease management and remote patient monitoring, leveraging cutting-edge AI and blockchain technology to improve patient outcomes. You will work closely with care teams, provide virtual patient consultations ...'
}
// {
//   id: 5,
//   slug: 'vp-business-development',
//   title: 'Vice President (VP), Business Development ',
//   description: 'Patientory, Inc is currently seeking for a Vice President (VP), Business Development to lead our business development, commercial project origination, and opportunity qualification activities. The VP, Business Development is a highly collaborative, influential, and experienced senior leader...'
// },
// {
//   id: 4,
//   slug: 'marketing-growth-specialist',
//   title: 'Marketing - Growth Specialist',
//   description: 'Patientory Inc. is currently looking for talented and enthusiastic Marketing-Growth Specialists to join our team and help us in our overall marketing efforts. As a Marketing- Growth Specialist, you will help to develop, execute, and monitor marketing programs across a variety of channels...'
// },
// {
//   id: 1,
//   slug: 'chief-operating-officer',
//   title: 'Chief Operating Officer',
//   description: 'Patientory Inc. is currently seeking a Chief Operating Officer  to oversee our organization’s ongoing operations and procedures. As a member of the Executive Team, the Chief Operations Officer is responsible for providing leadership, management ...'
// },
// {
//   id: 2,
//   slug: 'vice-president',
//   title: 'Vice President (VP), Business Development',
//   description: 'The VP, Business Development is a highly collaborative, influential, and experienced senior leader who is responsible for initiating and closing sales opportunities that  significantly accelerate Patientory’s  growth and profitability and help fulfill...'
// },
// {
//   id: 3,
//   slug: 'full-stack-developer',
//   title: 'Full Stack Engineering Developer',
//   description: 'Do you play around in Node.js for fun? Do you get jazzed when considering the power of blockchain? Can you define business logic with your eyes closed? If so, then we need to talk immediately! We’re looking for an experienced Full Stack Engineering Developer...'
// }
]

export default function useCareerContent(): [Item[]] {
  // const [items, setItems] = React.useState<Item[]>();

  const [items, getItems] = React.useState<Item[]>(mock);

  // useEffect(() => {
  //   getAllPosts('Career')
  //   .then(data => {
  //     setItems(
  //       data.map(
  //         ({ node: item }) => ({
  //           id: item.slug,
  //           date: item.date,
  //           title: item.title,
  //           description: item.excerpt,
  //           content: '',
  //           src: item.featuredImage.node.mediaItemUrl
  //         })
  //       )
  //     )
  //   })
  //   .catch(e => {
  //     setItems([]);
  //   });
  // }, [!items]);

  return [items ?? []];
}

interface Props {
  children: (item: Item) => JSX.Element
}

export const CareersList = (props: Props): JSX.Element => {
  const [items] = useCareerContent();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
