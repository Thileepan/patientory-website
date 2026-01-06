import React from 'react'

interface Item {
  title: string
  src: string
}

const mock: Item[] = [{
  title: 'Himss',
  src: '/img/memberships/himss.webp'
},{
  title: 'Atlanta innovation forum',
  src: '/img/memberships/atlanta.webp'
},{
  title: 'Patientory Association',
  src: '/img/memberships/patentory.webp'
}]

export default function useMemberships(): [Item[]] {
  const [items,] = React.useState<Item[]>(mock);
  return [items];
}

interface Props {
  children: (item: Item) => JSX.Element
}

export const MembershipsMembers = (props: Props): JSX.Element => {
  const [items] = useMemberships();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
