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

const PreventionSexualHealth = () => {


    return (
        <Route title="PreventionSexualHealth Overview">
            <iframe width="100%" height="1000px" src="https://cms.patientory.com/landing-pages/prevention-sexual-health.html"></iframe>
        </Route>
    )
}

export default PreventionSexualHealth;