import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Route from '../layouts/route';

export interface DetailedHTMLProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  name?: String
}

const CareLabs = () => {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        if (!markdown) {
            fetch('/docs/privacy.md')
                .then(res => res.text())
                .then(text => setMarkdown(text))
        }
    }, [markdown])

    return (
        <Route title="Fitbit">
            <iframe width="100%" height="1000px" src="https://cms.patientory.com/landing-pages/carelabs/index.html"></iframe>
        </Route>
    )
}

export default CareLabs;