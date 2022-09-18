import React from 'react';
import BlogContent from '../components/BlogContent';

const Blog = () => {
  return (
      <div className='blog-page' data-aos='fade-out'>
        <h2>Blog</h2>
        <div className='blog-container' data-aos='fade-out'>
            <div className='blog-content'>
              <div className='blog-content-text'>
                <h4>Episode 1 - Health</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
            </div>
            <div className='blog-content'>
              <div className='blog-content-text'>
                <h4>Episode 2 - Nutrition</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
            </div>
            <div className='blog-content'>
              <div className='blog-content-text'>
                <h4>Episode 3 - Nutrition</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
            </div>
            <div className='blog-content'>
              <div className='blog-content-text'>
                <h4>Episode 4 - Supplements</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
            </div>
            <div className='blog-content'>
              <div className='blog-content-text'>
                <h4>Episode 5 - Bloodwork</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
            </div>
            <div className='blog-content'>
              <div className='blog-content-text'>
                <h4>Episode 6 - Health</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
            </div>
        </div>
      </div>
  )
}

export default Blog