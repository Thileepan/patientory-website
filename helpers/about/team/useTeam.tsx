import React from 'react'

interface Item {
  title: string
  description: string
  src: string
  link: string
}

const mock: Item[] = [{
  title: 'Chrissa McFarlane',
  description: 'Founder/CEO',
  src: '/img/team/chrissa.webp',
  link: 'https://www.linkedin.com/in/chrissamcfarlane/'
},{
  title: 'Thileepan Sivanandham',
  description: 'Technical Lead',
  src: '/img/team/thileepan.webp',
  link: 'https://www.linkedin.com/in/thileepans/'
},{
  title: 'Xueling Wang',
  description: 'Business Development Associate',
  src: '/img/team/xueling.webp',
  link: 'https://www.linkedin.com/in/xueling-wang-76356616b/'
},{
  title: 'Ashmita Thapa',
  description: 'Operations Analyst',
  src: '/img/team/ashmita.webp',
  link: 'http://linkedin.com/in/ashmita-thapa-20186217b'
}]

export default function useTeamMembers(): [Item[]] {
  const [items,] = React.useState<Item[]>(mock);
  return [items];
}

interface Props {
  children: (item: Item) => JSX.Element
}

export const TeamMembers = (props: Props): JSX.Element => {
  const [items] = useTeamMembers();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
