import React, { useCallback } from 'react';
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
        </div>
        <FilterItems data={blogs} />
      </div>
  )
}

export default Blog