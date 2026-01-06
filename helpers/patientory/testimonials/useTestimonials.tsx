import React from 'react'

interface Item {
  author: string
  message: string
  src: string
}

const mock: Item[] = [{
  author: 'Michael Cummings',
  message: 'This app will be your guide in helping you become a healthier version of yourself.',
  src: '/img/testimonials/michael.webp'
},{
  author: 'Kaushik Biswas',
  message: 'Very useful app with intuitive and easy to use features to store and get health recommendations in a secure manner.',
  src: '/img/testimonials/kaushik.webp'
},{
  author: 'Andres Wong',
  message: 'Very intuitive and easy to use. Allows you to set your goals easily and have control on different health/wellness areas you would like to improve.',
  src: '/img/testimonials/andres.webp'
},{
  author: 'Shorif Ahmed',
  message: 'Everything is ok. Nice App otp code instant receive.',
  src: '/img/testimonials/shorif.webp'
}]

export default function useTestimonials(): [Item[]] {
  const [items, getItems] = React.useState<Item[]>(mock);
  return [
    items
  ]
}

interface TestimonialItemsProps {
  children: (items: Item) => JSX.Element
}

export function TestimonialItems(props: TestimonialItemsProps): any {
  const [items] = useTestimonials();
  const renderedItems: JSX.Element[] = items.map(item => props.children(item));
  return renderedItems
}

export function useTestimonialItems(render: (items: Item) => JSX.Element): any {
  const [items] = useTestimonials();
  const renderedItems: JSX.Element[] = items.map(item => render(item));
  return [renderedItems]
}