import React, { useCallback } from 'react';
import BlogContent from '../components/BlogContent';
import FilterItems from '../components/FilterItems';
import SearchBar from '../components/SearchBar';
import manifest from '../data/manifest';

const Blog = () => {
  const { blogs=[] } = manifest;
  
  const blogArticleRenderer = useCallback((matches, searchText) => {
    if (matches.length === 0) {
      return searchText ? [(<li key='NMF'>No matches found</li>)] : [];
    } else {
      return matches.map((match) => {
        const { articleId = '', title = '', topic = '', date = '' } = match;
        return (<li key={articleId}>{`Article ${articleId}: ${title}\t-\t${topic}\t-\t${date}`}</li>)
      })
    }
  }, [])

  const blogSearch = useCallback((data, searchText) => {
    if (data.length === 0 || !searchText) {
      return [];
    } else {
      return data.filter((item) => {
        const { articleId = '', title = '', topic = '', date = '' } = item;
        const text = `Article ${articleId}: ${title}\t-\t${topic}\t-\t${date}`;
        return text.includes(searchText)
      })
    }
  }, [])
  
  return (
      <div className='blog-page' data-aos='fade-out'>
        <div className='blog-header'>
          <h2>The Blog</h2>
          <div className='blog-underline'></div>
          <SearchBar searchFunc={blogSearch} renderFunc={blogArticleRenderer} data={blogs} id='blog-search' resultsId='blog-search-results' placeholder='Search for an article...'/>
          <FilterItems data={blogs}/>
        </div>
        <div className='blog-container' data-aos='fade-out'>
            <div className='blog-content'>
              <BlogContent image='/images/cup.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Article 1 - First Blog - Nurtition - September 1, 2022</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/tea.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Article 2 - Second Blog - Metabolism - September 12, 2022</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/spices.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Article 3 - Third Blog - Health - September 15, 2022</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/rack.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Article 4 - Fourth Blog - Coffee - September 19, 2022</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/nature.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Article 5 - Fifth Blog - Fitness - September 21, 2022</h4>
                <p>This is a short description of the topic and info... In this blog post we cover a variety of topics ranging from a to z.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog-content'>
              <BlogContent image='/images/coffee-and-books.jpg' info='Blog 1'/>
              <div className='blog-content-text'>
                <h4>Article 6 - Sixth Blog - Wellness - September 29, 2022</h4>
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