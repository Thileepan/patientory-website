import React from "react";
import PressContent from "../../../components/press-detail/content";
import Hero from "../../../components/press-detail/hero";
import { PressPost } from "../../../helpers/press/usePressPost";

export default function Blog() {
  return (
    <PressPost>
      {(post) => {
        const {
          content,
          ...rest
        } = post;

        return (
          <React.Fragment>
            <Hero {...rest}/>
            <PressContent
              content={post.content}
            />
          </React.Fragment>
        )
      }}
    </PressPost>
  )
}