import React, { useEffect } from 'react'
import useApi from '../api/useApi';

interface Item {
  id: string | number
  title: string
  description: string,
  content: string,
  src: string
  link: string
  externalLink: string
}

export default function useBlogContent(page: number, type?: string): [Item[], boolean, number] {
  const [state, setState] = React.useState<
    { items: Item[], loading: boolean, maxPages: number }
  >({
    items: [],
    loading: true,
    maxPages: 2
  });

  const updateState = (newState: Partial<typeof state>) => {
    setState({ ...state, ...newState });
  }

  useEffect(() => {
    updateState({ loading: true })
    const path = `/wp-json/wp/v2/${type || 'posts'}?&_embed&page=${page}`;
    useApi({ path })
    .then(([data, maxPages]) => {
      updateState({
        loading: false,
        items: data.map(
          item => {
            const media = item._embedded["wp:featuredmedia"] ?? []
            let link = (item.link as string).replace('//', '');
            let linkComponents = link.split('/').filter( x => x.length > 0 && !x.includes("http") )
            return ({
              id: item.id,
              date: item.date,
              title: item.title.rendered,
              description: item.excerpt && item.excerpt.rendered,
              content: item.content.rendered,
              src: (media[0] && media[0].source_url) || '',
              link: "/blog/" + linkComponents.join('/'),
              externalLink: item.acf && item.acf.external_link
            })
          }
        ),
        maxPages: parseInt(maxPages)
      })
    });
  }, [page]);

  return [state.items, state.loading, state.maxPages];
}

interface Props {
  children: (item: Item, idx?: number, loading?: boolean, maxPages?: number) => JSX.Element
  page: number
  type: string
}

export const BlogContentItems = (props: Props): JSX.Element => {
  const [items, loading, maxPages] = useBlogContent(props.page, props.type);
  const elements = items.map((element, idx) => props.children(element, idx, loading, maxPages));
  return (
    <React.Fragment>
      {elements}
    </React.Fragment>
  );
}
