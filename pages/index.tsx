import React from "react";
import Covid from "../components/patientory/covid";
import Features from "../components/patientory/features";
import Hero from "../components/patientory/hero";
import How from "../components/patientory/how";
import Showcase from "../components/patientory/showcase";
import Testimonials from "../components/patientory/testimonials";
import Card from "../components/patientory/card";
import Sidebar from "../components/common/sidebar";
import Route from "../layouts/route";
import Trials from "../components/patientory/trials";

export default function Home() {
  const items = [{
    id: 'wallet',
    title: 'Wallet'
  },{
    id: 'features',
    title: 'Features'
  },{
    id: 'health-data-marketplace',
    title: 'Care Health Data Marketplace'
  },
  // {
  //   id: 'card',
  //   title: 'Savings'
  // },
  // {
  //   id: 'pandemic',
  //   title: 'Pandemic'
  // },
  {
    id: 'how',
    title: 'How It Works'
  }]

  return (
    <Route title="Wallet">
      <Sidebar items={items} />
      <Hero/>
      <Showcase/>
      <Features/>
      <Trials/>
      {/*<Covid/>*/}
      <How/>
      {/*<Card/>*/}
      {/*<Testimonials/>*/}
    </Route>
  )
}
