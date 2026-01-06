import React from 'react'

interface Item {
  title: string
  src: string
}

const mock: Item[] = [
{
  title: 'Google for Startups',
  src: '/img/partners/googleforstartups.png'
},
{
  title: 'Fuel Accelerator',
  src: '/img/partners/fuel.png'
},
{
  title: 'Google Fitbit',
  src: '/img/partners/fitbit.png'
},
{
  title: 'Project Healthcare Nashville',
  src: '/img/partners/nashville.webp'
},
{
  title: 'Metro Atlanta Chamber',
  src: '/img/partners/mac.webp'
},
{
  title: 'Matter',
  src: '/img/partners/matter.png'
},
{
  title: 'Rising Star StartUs Insights',
  src: '/img/partners/rising-star-startus-insights-bagde.webp'
},
{
  title: 'DappRadar',
  src: '/img/partners/dappradar.webp'
},
{
  title: 'Startup Health',
  src: '/img/partners/startuphealth.webp'
},{
  title: 'Boomtown',
  src: '/img/partners/boomtown.webp'
},{
  title: 'Irisguard',
  src: '/img/partners/irisguard.webp'
},{
  title: 'Georgia state university',
  src: '/img/partners/georgiastateuni.webp'
},{
  title: 'Oregon enterprise blockchain venture studio',
  src: '/img/partners/oregonebv.webp'
},{
  title: 'Georgia usa',
  src: '/img/partners/georgia.webp'
},
// {
//   title: 'Trialscope',
//   src: '/img/partners/trialscope.webp'
// },
{
  title: 'United networks of america',
  src: '/img/partners/una.webp'
},{
  title: 'National Minority Supplier Development Council',
  src: '/img/partners/nmsdc-logo.webp'
},{
  title: 'World Economic Forum',
  src: '/img/partners/wef.webp'
},{
  title: 'Mass Challenge',
  src: '/img/partners/masschallenge.webp'
},{
  title: 'American Heart Association',
  src: '/img/partners/americanheartassociation.webp'
},{
  title: 'Re/Wire Health Studio from GSK NEXT',
  src: '/img/partners/rewire.webp'
},{
  title: 'Expert Dojo',
  src: '/img/partners/expertdojo.webp'
},{
  title: 'MedTech Innovator',
  src: '/img/partners/medtech.webp'
},
// {
//   title: 'ID.me',
//   src: '/img/partners/idme.webp'
// },

{
  title: 'Entrepreneurs Access Network',
  src: '/img/partners/entrepreneursaccessnetwork.webp'
},
{
  title: 'Gener8tor',
  src: '/img/partners/gener8tor-logo.png'
},
{
  title: 'MBX',
  src: '/img/partners/MBX-logo.png'
},
{
  title: 'PharmStars',
  src: '/img/partners/pharmstars-logo.png'
}]

export default function usePartners(): [Item[]] {
  const [items,] = React.useState<Item[]>(mock);
  return [items];
}

interface Props {
  children: (item: Item) => JSX.Element
}

export const PartnersMembers = (props: Props): JSX.Element => {
  const [items] = usePartners();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
