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
  description: 'Patientory understands that involving the patient in data management improves patient satisfaction, healthcare workflow, patient outcomes, and overall health of the organization.',
  src: '/img/neith/features.webp'
},{
  title: 'HospitalNet',
  description: 'Store and view healthcare data from over 10,000 hospital verified electronic medical records via the PTOYMatrix Network.',
  src: '/img/neith/hospitalnet.svg',
  action: "Download one pager",
  hasButton: true
},{
  title: 'Predictive Analytics',
  description: 'Understand the past, present, and future of patient outcomes for value based reporting and goal-oriented care plan creation. Receive actionable insights on future patient outcomes through our machine learning algorithms.',
  src: '/img/neith/analytics.svg'
},{
  title: 'Care Plan Generation',
  description: 'Combine electronic medical records with lifestyle data and predictive analytics to generate holistic care plans that take more patient information into account than ever before. Understand how a multitude of factors impact patient health in real time.',
  src: '/img/neith/care-plan.webp'
},{
  title: 'Data Marketplace',
  description: 'Eliminate barriers to enhanced patient autonomy and data interoperability. Further involve patients in decision-making by securely storing, accessing and transferring healthcare data using the PTOYMatrix blockchain enabled Health Information Exchange and Storage Network.',
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
