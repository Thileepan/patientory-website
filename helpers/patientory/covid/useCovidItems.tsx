import React from 'react'

export interface CovidItem {
  title: string
  src: string
}

const mock: CovidItem[] = [{
  title: 'Important and useful information about Pandemic right in your app',
  src: '/img/patientory/alert.svg'
},{
  title: 'Storing personal data about vaccinations and receive a reminder for the next vaccination',
  src: '/img/patientory/real-time.svg'
},{
  title: 'Add photos of your vaccination record card, taking your data everywhere you go!',
  src: '/img/patientory/quiz.svg'
}]

export default function useCovidItems(): [CovidItem[]] {
  const [items, getItems] = React.useState<CovidItem[]>(mock);
  return [items]
}

interface CovidItemsProps {
  children: (items: CovidItem) => JSX.Element | JSX.Element[]
}

export function CovidItems(props: CovidItemsProps) {
  const [items] = useCovidItems();
  return (
    <React.Fragment>
      {items.map(item => props.children(item))}
    </React.Fragment>
  )
}