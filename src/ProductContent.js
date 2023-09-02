import React from 'react'

const ProductContent = ({ image, info, link }) => {

    const onClick = () => {
        window.open(link, '_blank');
    }
    return (
        <>
            <img src={image} alt={info} onClick={(e) => onClick(e)}></img>
        </>
      )
}

export default ProductContent;
