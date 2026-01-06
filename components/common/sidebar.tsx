import React, { useCallback, useEffect, useState } from 'react'

interface Props {
  items: {title: string, id: string}[];
  light?: boolean;
}

export default function Sidebar(props: Props) {
  const [selected, setSelected] = useState();
  const listener = useCallback((e) => {
    const { detail } = e;
    setSelected(detail);
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener('section_in_view', listener);
    }
    return () => {
      window.removeEventListener('section_in_view', listener);
    }
  }, [listener])

  return (
    <section className={"sidebar is-hidden-touch " + (props.light && 'light')}>
      {
        props.items.map((item, idx) => (
          <a href={`#${item.id}`}>
            <p key={idx + '_sidebar_item'} className={(item.id === selected || (!selected && idx === 0)) && 'active'}>{item.title}</p>
          </a>
        ))
      }
    </section>
  )
}
