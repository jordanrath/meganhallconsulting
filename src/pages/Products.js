import React from 'react'
import ProductContent from '../ProductContent'

const Products = () => {
  return (
    <div className='product-page' data-aos='fade-out'>
      <h2>Products</h2>
      <div className='product-container' data-aos='fade-out'>
            <div className='product-content'>
              <div className='product-content-text'>
                <h4>Nutrition</h4>
                <p>This is a short description of the collection.</p>
              </div>
              <ProductContent image='/images/nutrition.jpg' info='Nutrition' link='https://www.shopper.com/c/Nutrition/6BZ8'/>
            </div>
            <div className='product-content'>
              <div className='product-content-text'>
                <h4>Supplements</h4>
                <p>This is a short description of the collection.</p>
              </div>
              <ProductContent image='/images/supplements.jpg' info='Supplements' link='https://www.shopper.com/c/Supplements/fLC3'/>
            </div>
            <div className='product-content'>
              <div className='product-content-text'>
                <h4>Fitness</h4>
                <p>This is a short description of the collection.</p>
              </div>
              <ProductContent image='/images/fitness.jpg' info='Fitness' link='https://www.shopper.com/c/Fitness/gvC2'/>
            </div>
            <div className='product-content'>
              <div className='product-content-text'>
                <h4>Healthy Living</h4>
                <p>This is a short description of the collection.</p>
              </div>
              <ProductContent image='/images/lifestyle.jpg' info='Healthy Living' link='https://www.shopper.com/c/Healthy-Living/0w7J'/>
            </div>
        </div>
    </div>
  )
}

export default Products