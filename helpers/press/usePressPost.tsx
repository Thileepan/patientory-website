import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import useApi from '../api/useApi';

interface Item {
  id: string | number
  title: string
  description: string
  content: string
  author: string
  date: string
  src: string
}

export default function usePressPost(): [Item] {
  const router = useRouter();
  const [item, setItem] = React.useState<Item>();

  useEffect(() => {
    if (!router.query.id)
      return;
      
    const path = `/wp-json/wp/v2/posts/${router.query.id}?&_embed`;
    useApi({ path })
    .then(data => {
      let item = data[0]
      setItem(
        {
          id: item.id,
          date: item.date,
          author: item._embedded.author[0].name,
          title: item.title.rendered,
          description: item.excerpt.rendered,
          content: item.content.rendered,
          src: item._embedded["wp:featuredmedia"][0].source_url
        }
      )
    });
  }, [router.query.id]);
  return [item];
}

interface Props {
  children: (item: Item, idx?: number) => JSX.Element
}

export const PressPost = (props: Props): JSX.Element => {
  const [item] = usePressPost();
  return (
    <React.Fragment>
      {item && props.children(item)}
    </React.Fragment>
  );
}
        