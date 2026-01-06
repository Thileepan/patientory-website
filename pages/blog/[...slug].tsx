import React from "react";
import BlogContent from "../../components/blog-detail/content";
import Hero from "../../components/blog-detail/hero";
import { BlogPost } from "../../helpers/blog/useBlogPost";

export default function Blog() {
  return (
    <BlogPost>
      {(post) => {
        const {
          content,
          ...rest
        } = post;

        return (
          <React.Fragment>
            <Hero {...rest}/>
            <BlogContent
              content={post.content}
            />
          </React.Fragment>
        )
      }}
    </BlogPost>
  )
}