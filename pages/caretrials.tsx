import React, { useEffect, useState } from 'react';
import Heading from '../components/trials/heading';
import CTA from '../components/trials/cta';
import TrialList from '../components/trials/trials';
import CompletedTrialsHeading from '../components/trials/completed-trials-heading';
import CompletedTrialList from '../components/trials/completed-trials';
import Route from '../layouts/route';

const Trials = () => {
    return (
        <Route title="Terms of Use">
            <Heading/>
            <TrialList/>
            {/*<CTA/>*/}
            <CompletedTrialsHeading/>
            <CompletedTrialList/>
        </Route>
    )
}

export default Trials;