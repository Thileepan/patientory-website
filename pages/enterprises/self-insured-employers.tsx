import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Route from '../../layouts/route';

export interface DetailedHTMLProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  name?: String
}

const SelfInsuredEmployers = () => {


    return (
        <Route title="SelfInsuredEmployers Overview">
            <iframe width="100%" height="1000px" src="https://cms.patientory.com/landing-pages/self-insured-employers.html"></iframe>
        </Route>
    )
}

export default SelfInsuredEmployers;