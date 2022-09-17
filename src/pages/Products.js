import React from 'react'

const Products = () => {
  return (
    <div className='products-container' data-aos='fade-out'>
        <h2>Products</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src='/images/granola.jpg' alt='Granola' className='products-img'/>
        <img src='/images/magic-mind.jpg' alt='Magic Mind' className='products-img'/>
        <img src='/images/ancient.jpg' alt='Ancient Nutrition' className='products-img'/>
    </div>
  )
}

export default Products