import React from 'react'
import ProductContent from '../ProductContent'
import imageUtil from '../utils/imageUtil';

const Products = () => {
  return (
    <div className='product-page' data-aos='fade-out'>
      <h2>Recommended Products</h2>
      <div className='product-underline'></div>
      <div className='product-container' data-aos='fade-out'>
            <div className='product'>
              <ProductContent image={imageUtil('/images/nutrition.jpg')} info='Nutrition' link='https://www.shopper.com/c/Nutrition/6BZ8'/>
              <div className='product-content'>
                <h4>
                  <a href='https://www.shopper.com/c/Nutrition/6BZ8' target='_blank' rel='noreferrer'>
                    Nutrition
                  </a>
                </h4>
              </div>
            </div>
            <div className='product'>
              <ProductContent image={imageUtil('/images/supplements.jpg')} info='Supplements' link='https://www.shopper.com/c/Supplements/fLC3'/>
              <div className='product-content'>   
                <h4>
                  <a href='https://www.shopper.com/c/Supplements/fLC3' target='_blank' rel='noreferrer'>
                    Supplements
                  </a>
                </h4>
              </div>
            </div>
            <div className='product'>
              <ProductContent image={imageUtil('/images/lifestyle.jpg')} info='Healthy Living' link='https://www.shopper.com/c/Healthy-Living/0w7J'/>
              <div className='product-content'>
                <h4>
                  <a href='https://www.shopper.com/c/Healthy-Living/0w7J' target='_blank' rel='noreferrer'>
                    Healthy Living
                  </a>
                </h4>
              </div>
            </div>
            <div className='product'>
                <ProductContent image={imageUtil('/images/fitness.jpg')} info='Fitness' link='https://www.shopper.com/c/Fitness/gvC2'/>
              <div className='product-content'>
                <h4>
                  <a href='https://www.shopper.com/c/Fitness/gvC2' target='_blank' rel='noreferrer'>
                    Fitness
                  </a>
                </h4>
              </div> 
            </div>  
        </div>
    </div>
  )
}

export default Products;
