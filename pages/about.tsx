import React from "react";
import Belief from "../components/about/belief";
import Board from "../components/about/board";
import Careers from "../components/about/careers";
import Culture from "../components/about/culture";
import Hero from "../components/about/hero";
import Memberships from "../components/about/memberships";
import Recognitions from "../components/about/recognitions";
import Partners from "../components/about/partners";
import Team from "../components/about/team";
import Route from "../layouts/route";

export default function About() {
  return (
    <Route title="About">
      <Hero/>
      <Belief/>
      <Culture/>
      {/*<Team/>
      <Board/>*/}
      <Partners/>
      <Memberships/>
      <Recognitions/>
      <Careers/>
      
    </Route>
  )
}
