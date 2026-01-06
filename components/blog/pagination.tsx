import React, { useState } from 'react'
import styles from '../../styles/components/common/pagination.module.scss';
import Section from '../common/section';

export default function BlogPagination(props: { onPageChange: (number) => void, maxPages?: number }) {
    const [page, setPage] = useState(1);
    return (
        <Section>
            <div className={styles.root}>
                <span></span>
                <div>

                    <a
                        className="button is-rounded social-icon"
                        onClick={() => {
                            const newPage = 1
                            setPage(newPage)
                            props.onPageChange(newPage)
                            window.scrollTo(0, 0)
                        }}
                    >
                        <span className="icon is-small">
                            <i className="fas fa-fast-backward"></i>
                        </span>
                    </a>
                    <a
                        className="button is-rounded social-icon ml-1"
                        onClick={() => {
                            const newPage = Math.max(0, page - 1)
                            setPage(newPage)
                            props.onPageChange(newPage)
                            window.scrollTo(0, 0)
                        }}
                    >
                        <span className="icon is-small">
                            <i className="fas fa-chevron-left"></i>
                        </span>
                    </a>
                    <div><p>{page || 1} / {props.maxPages}</p></div>
                    <a
                        className="button is-rounded social-icon"
                        onClick={() => {
                            const newPage = Math.min(props.maxPages || 0, page+1)
                            setPage(newPage)
                            props.onPageChange(newPage)
                            window.scrollTo(0, 0)
                        }}
                    >
                        <span className="icon is-small">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </a>
                    <a
                        className="button is-rounded social-icon ml-1"
                        onClick={() => {
                            const newPage = props.maxPages
                            setPage(newPage)
                            props.onPageChange(newPage)
                            window.scrollTo(0, 0)
                        }}
                    >
                        <span className="icon is-small">
                            <i className="fas fa-forward"></i>
                        </span>
                    </a>
                </div>
            </div>
        </Section>
    )
}
