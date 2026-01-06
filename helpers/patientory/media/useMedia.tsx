import classNames from 'classnames';
import React from 'react'
import styles from '../../../styles/components/patientory/showcaseItem.module.scss';

interface Item {
  title: string
  src: string
  url: string
}

const mock: Item[] = [{
  title: 'Health care it news',
  src: '/img/patientory/healthcareitnews.webp',
  url: 'https://www.healthcareitnews.com/video/harnessing-power-blockchain-give-patients-control-their-data'
},{
  title: 'International business times',
  src: '/img/patientory/international-business-times.webp',
  url: 'https://www.ibtimes.com/how-blockchain-could-rebuild-healthcare-industry-2537230'
},{
  title: 'business insider',
  src: '/img/patientory/business-insider.webp',
  url: 'https://www.businessinsider.com/how-consumer-health-app-founder-patientory-raised-funding-rejected-500-vcs'
},{
  title: 'Forbes',
  src: '/img/patientory/forbes.webp',
  url: 'https://www.forbes.com/sites/forbestechcouncil/2021/10/25/the-future-of-blockchain-in-healthcare'
},{
  title: 'The telegraph',
  src: '/img/patientory/telegraph.webp',
  url: 'https://techtelegraph.co.uk/chrissa-mcfarlane-founder-and-ceo-of-patientory-inc-interview-series/'
}]

export default function useMedia(): [() => JSX.Element, Item[]] {
  const [items, getItems] = React.useState<Item[]>(mock);
  const render = React.useCallback(() => {
    return (
      <div
        className={
          classNames({
            [styles.showcase_items]: true
          })
        }
      >
        {
          items.map(item => {
            return (
              <div
                className={
                  classNames({
                    [styles.showcase_item]: true
                  })
                }
              >
                <a href={item.url} target="_blank"><img src={item.src} alt={item.title}/></a>
              </div>
            )
          })
        }
      </div>
    )
  }, [items]);

  return [
    render,
    items
  ]
}
