import React, { useEffect } from 'react'
import { getAllPosts } from '../../lib/posts';

interface Item {
  id: string | number
  title: string
  description: string
}

const mock: Item[] = [{
  id: 0,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Vestibulum at nisl felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra ante sit amet massa pulvinar, ut congue tellus mollis.',
},{
  id: 0,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Vestibulum at nisl felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra ante sit amet massa pulvinar, ut congue tellus mollis.',
},{
  id: 0,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Vestibulum at nisl felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra ante sit amet massa pulvinar, ut congue tellus mollis.',
},{
  id: 0,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Vestibulum at nisl felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra ante sit amet massa pulvinar, ut congue tellus mollis.',
},{
  id: 0,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Vestibulum at nisl felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra ante sit amet massa pulvinar, ut congue tellus mollis.',
},{
  id: 0,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Vestibulum at nisl felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur viverra ante sit amet massa pulvinar, ut congue tellus mollis.',
}]

export default function useCareerContent(): [Item[]] {
  const [items, setItems] = React.useState<Item[]>();

  useEffect(() => {
    getAllPosts('Career')
    .then(data => {
      setItems(
        data.map(
          ({ node: item }) => ({
            id: item.slug,
            date: item.date,
            title: item.title,
            description: item.excerpt,
            content: '',
            src: item.featuredImage.node.mediaItemUrl
          })
        )
      )
    })
    .catch(e => {
      setItems([]);
    });
  }, [!items]);

  return [items ?? []];
}

interface Props {
  children: (item: Item, idx?: number) => JSX.Element
}

export const CareerContentItems = (props: Props): JSX.Element => {
  const [items] = useCareerContent();
  return (
    <React.Fragment>
      {items.map(props.children)}
    </React.Fragment>
  );
}
