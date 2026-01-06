import React from 'react'

interface Item {
  title: string
  description: string
  src: string
  hasButton?: boolean
  action?: string
}

const mock: Item[] = [{
  title: 'Enterprise features',
  description: 'Sign up to start using our Neith Enterprise Solution for improving the clinical and financial state of your healthcare organization.',
  src: '/img/neith/features.webp'
},{
  title: 'HospitalNet',
  description: 'HospitalNet is part of the PTOYMatrix Blockchain Network that connects over 10,000 hospitals.',
  src: '/img/neith/hospitalnet.svg',
  action: "Download one pager",
  hasButton: true
},{
  title: 'Predictive Analytics',
  description: 'Understand the past, present, and future for value based reporting. Receive actionable insights on future patient outcomes through our machine learning algorithms.',
  src: '/img/neith/predictive.svg'
}]

export default function useFeatures(): [Item[]] {
  const [items,] = React.useState<Item[]>(mock);
  return [items];
}

type NeithFeaturesProps = (item: Item) => JSX.Element

export const useNeithFeatures = (props: NeithFeaturesProps): JSX.Element | JSX.Element[] => {
  const [items] = useFeatures();
  return items.map(props);
}
