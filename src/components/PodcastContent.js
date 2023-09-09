import React from 'react'
import imageUtil from '../utils/imageUtil';

const PodcastContent = ({image, info}) => {

  return (
    <>
        <img 
          src={imageUtil(image)} 
          alt={info}>
        </img>
    </>
  )
}

export default PodcastContent;
