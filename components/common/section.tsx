import classNames from 'classnames';
import React, { PropsWithChildren, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface Props extends PropsWithChildren<any> {
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section(props: Props) {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: [0.1, 0.5] });

  useEffect(() => {
    if (props.id && inView) {
      const e = new CustomEvent('section_in_view', { detail: props.id });
      window.dispatchEvent(e);
    }

    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const {
    id,
    className,
    containerClassName,
    children,
    ...rest
  } = props;

  return (
    <motion.section 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 70 }
      }}
      transition={{
        duration: 0.3,
        ease: 'linear'
      }}
      id={id}
      className={
        classNames({
          [className]: className,
          'section': true,
          'themed-section': true
        })
      }
      {...rest}
    >
      <div 
        className={
          classNames({
            [containerClassName]: containerClassName,
            'container': true
          })
        }
      >
        {children}
      </div>
    </motion.section>
  )
}