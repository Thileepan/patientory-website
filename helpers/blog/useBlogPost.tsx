import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { getPost } from '../../lib/posts';
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

export default function useBlogPost(): [Item] {
  const router = useRouter();
  const [item, setItem] = React.useState<Item>();

  useEffect(() => {
    if (router.asPath.includes('slug'))
      return;

    const linkComponents = router.asPath.split('/');
    const path = `/wp-json/wp/v2/posts?slug=${linkComponents[linkComponents.length - 1]}?&_embed`;
    useApi({ path })
    .then(data => {
      let item = data[0][0]
      console.log(item);
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
  }, [router.asPath]);
  return [item];
}

interface Props {
  children: (item: Item, idx?: number) => JSX.Element
}

export const BlogPost = (props: Props): JSX.Element => {
  const [item] = useBlogPost();
  return (
    <React.Fragment>
      {item && props.children(item)}
    </React.Fragment>
  );
}
        