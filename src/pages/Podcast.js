import React, { useCallback } from 'react'
import FilterItems from '../components/FilterItems'
import SearchBar from '../components/SearchBar'
import manifest from '../data/manifest'

const Podcast = () => {
  const { podcasts=[] } = manifest;
  const { header, description } = podcasts; 
  const podcastRenderer = useCallback((matches, searchText) => {
    if (matches.length === 0) {
      return searchText ? [(<li key='NMF'>No matches found</li>)] : [];
    } else {
      return matches.map((match) => {
        const { episodeId = '', title = '', topic = '', date = ''  } = match;
        return (<li key={episodeId}>{`Episode ${episodeId}: ${title}\t-\t${topic}\t-\t${date}`}</li>)
      })
    }
  }, [])

  const podcastSearch = useCallback((data, searchText) => {
    if (data.length === 0 || !searchText) {
      return [];
    } else {
      return data.filter((item) => {
        const { episodeId = '', title = '', topic = '', date = ''  } = item;
        const text = `Episode ${episodeId}: ${title}\t-\t${topic}\t-\t${date}`;
        return (
          text.includes(searchText)
        )
      })
    }
  }, [])

  return (
      <div className='podcast-page' data-aos='fade-out'>
        <div className='podcast-header'>
          <h2>Podcast Episodes</h2>
          <div className='podcast-underline'></div>
            <SearchBar searchFunc={podcastSearch} renderFunc={podcastRenderer} data={podcasts} id='podcast-search' resultsId='podcast-search-results' placeholder='Search for an episode...'/>
        </div>
        <FilterItems data={podcasts} header={header} desription={description} />
      </div>
  )
}

export default Podcast;
