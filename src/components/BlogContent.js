import React from 'react'
import imageUtil from '../utils/imageUtil';
import { useInView } from 'react-intersection-observer';

const BlogContent = ({ image, info }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div ref={ref}>
      {inView ?
        <img 
          src={imageUtil({image})} 
          alt={info}
        >
        </img>
      :
        null
      }
    </div>
  )
}

export default BlogContent;
