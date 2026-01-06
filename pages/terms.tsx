import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Route from '../layouts/route';

const Privacy = () => {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        if (!markdown) {
            fetch('/docs/terms.md')
                .then(res => res.text())
                .then(text => setMarkdown(text))
        }
    }, [markdown])

    return (
        <Route title="Terms of Use">
            <section className="section terms">
                <div className="container has-text-centered content">
                    <h1>
                        Terms of Use
                    </h1>
                    <ReactMarkdown className="has-text-left md-content">
                        {markdown}
                    </ReactMarkdown>
                </div>
            </section>
        </Route>
    )
}

export default Privacy;