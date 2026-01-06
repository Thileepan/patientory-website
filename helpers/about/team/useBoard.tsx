import React from 'react'

interface Item {
  title: string
  description: string
  src: string
  link: string
}

const mock: Item[] = [{
  title: 'Dr. Alonzo Sexton',
  description: 'Clinical Strategy',
  src: '/img/team/alonzo.webp',
  link: 'https://www.linkedin.com/in/alonzo-sextonmd/'
},{
  title: 'Shawn Wilkinson',
  description: 'Blockchain Strategy',
  src: '/img/team/shawn.webp',
  link: 'https://www.linkedin.com/in/shawn-wilkinson-4b2899b1/'
},{
  title: 'Rick Brounstein',
  description: 'Finance',
  src: '/img/team/rick.webp',
  link: 'https://www.linkedin.com/in/rickbrounstein/'
},{
  title: 'Rodney Sampson',
  description: 'Growth Hacking',
  src: '/img/team/rodney.webp',
  link: 'https://www.linkedin.com/in/rodneysampson/'
},{
  title: 'Richard diMonda',
  description: 'Comercialization',
  src: '/img/team/richard.webp',
  link: 'https://www.linkedin.com/in/richard-dimonda-bb432b9/'
},{
  title: 'Geetha Rao',
  description: 'Regulatory & Product Strategy',
  src: '/img/team/geetha.webp',
  link: 'https://www.linkedin.com/in/geetha-rao/'
},{
  title: 'Mariya Filipova',
  description: 'Innovation Catalyst',
  src: '/img/team/mariya.webp',
  link: 'https://www.linkedin.com/in/mfilipova/'
}]

export default function useTeamMembers(): [Item[]] {
  const [items,] = React.useState<Item[]>(mock);
  return [items];
}

interface Props {
  children: (item: Item) => JSX.Element
}

export const BoardMembers = (props: Props): JSX.Element => {
  const [items] = useTeamMembers();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
