import React, { useState } from "react";
import BlogContent from "../../components/blog/content";
import Hero from "../../components/press/hero";
import BlogPagination from "../../components/blog/pagination";

export default function Press() {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState<number>(null);
  return (
    <React.Fragment>
      <Hero/>
      <BlogContent type={"press"} page={page} onMaxPagesRecieved={setMaxPages}/>
      { maxPages && <BlogPagination onPageChange={setPage} maxPages={maxPages}/>}
    </React.Fragment>
  )
}