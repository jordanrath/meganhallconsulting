import React from 'react'
// import { useNavigate } from 'react-router-dom'

const ProductContent = ({ image, info, link }) => {
    // const navigate = useNavigate();
    const onClick = () => {
        window.open(link, '_blank');
        // navigate(link, {replace: true})
    }
    return (
        <>
            <img src={image} alt={info} onClick={(e) => onClick(e)}></img>
        </>
      )
}

export default ProductContent