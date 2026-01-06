import React, { useEffect } from 'react'
import useApi from '../api/useApi';

interface Item {
  id: string | number
  title: string
  description: string
  src: string
}

export default function usePressContent(): [Item[]] {
  const [items, setItems] = React.useState<Item[]>();

  useEffect(() => {
    const path = '/wp-json/wp/v2/posts?categories=55&_embed';
    useApi({ path })
    .then(data => {
      console.log(data)
      setItems(
        data.map(
          item => ({
            id: item.id,
            date: item.date,
            title: item.title.rendered,
            description: item.excerpt.rendered,
            content: item.content.rendered,
            src: item._embedded["wp:featuredmedia"][0].source_url
          })
        )
      )
    });
  }, [!items])
  
  return [items ?? []];
}

interface Props {
  children: (item: Item, idx?: number) => JSX.Element
}

export const PressContentItems = (props: Props): JSX.Element => {
  const [items] = usePressContent();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
