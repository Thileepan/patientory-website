import React from "react";
import CreateAccount from "../components/neith/create-account";
import Features from "../components/neith/features";
import Hero from "../components/neith/hero";
import Route from "../layouts/route";
import Sidebar from "../components/common/sidebar";
import Industries from "../components/neith/industries";

export default function Neith() {
  const items = [{
    id: 'intro',
    title: 'Intro'
  },{
    id: 'industries',
    title: 'Industries'
  },{
    id: 'features',
    title: 'HospitalNet'
  },{
    id: 'signup',
    title: 'Sign Up'
  }]
  
  return (
    <Route title="Enterprise">
      <Sidebar light items={items} />
      <Hero/>
      <Industries/>
      <Features/>
      <CreateAccount/>
    </Route>
  )
}
