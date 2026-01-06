import React from 'react'

interface Item {
  title: string
  src: string
}

const mock: Item[] = [
{
  title: 'Digital Health Global 100',
  src: '/img/recognitions/digital-health-global-100.webp'
},
{
  title: 'Digital Healthcare Solution Providers 2018',
  src: '/img/recognitions/digital-healthcare.webp'
},
{
  title: 'Globe Award 2018',
  src: '/img/recognitions/globe-award-2018.webp'
},
{
  title: 'Globe Award 2020',
  src: '/img/recognitions/globe-award-2020.webp'
},
{
  title: 'Medtech Insight Awards',
  src: '/img/recognitions/medtech-awards.webp'
},
{title: 'Iberian Business Awards 2018',
  src: '/img/recognitions/iberian-awards.webp'
},
{
  title: 'Web3 & Blockchain World',
  src: '/img/recognitions/web3-blockchain-world.webp'
},
{
  title: 'Prix Galien USA Nominee 2021',
  src: '/img/recognitions/prix-galien-usa-2021.webp'
},
{
  title: 'Women who Tech',
  src: '/img/recognitions/women-who-tech.webp'
},
{
  title: 'US Chamber of Commerce Foundation',
  src: '/img/recognitions/us-chamber-commerce.webp'
},
{
  title: 'Startup of the Year',
  src: '/img/recognitions/startup-of-the-year.webp'
},
{
  title: 'World Economic Forum',
  src: '/img/recognitions/world-economic-forum.webp'
},
{
  title: 'Titan 100',
  src: '/img/recognitions/titan-100.webp'
}]

export default function useRecognitions(): [Item[]] {
  const [items,] = React.useState<Item[]>(mock);
  return [items];
}

interface Props {
  children: (item: Item) => JSX.Element
}

export const RecognitionsMembers = (props: Props): JSX.Element => {
  const [items] = useRecognitions();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
