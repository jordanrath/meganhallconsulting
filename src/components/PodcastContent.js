import React from 'react'

const PodcastContent = ({image, info}) => {

  return (
    <>
        <img src={image} alt={info}></img>
    </>
  )
}

export default PodcastContent;
