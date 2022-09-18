import React from 'react'

const BlogContent = ({ image, info }) => {
  return (
    <>
        <img src={image} alt={info}></img>
    </>
  )
}

export default BlogContent