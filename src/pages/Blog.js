import React from 'react';
import BlogContent from '../components/BlogContent';

const Blog = () => {
  return (
      <div className='blog-page' data-aos='fade-out'>
        <h2>Blog</h2>
        <div className='blog-underline'></div>
        <div className='blog-container' data-aos='fade-out'>
            <div className='blog-content'>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Blog - Health</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Blog - Nutrition</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Blog - Nutrition</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Blog - Supplements</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Blog - Bloodwork</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/podcast.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Blog - Health</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Blog