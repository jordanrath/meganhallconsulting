import React, { useCallback } from 'react'
import FilterItems from '../components/FilterItems'
import PodcastContent from '../components/PodcastContent'
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

//use JS Joda zoned date time date formatter
//debouncing npmdebounce
//throttling

  const podcastSearch = useCallback((data, searchText) => {
    if (data.length === 0 || !searchText) {
      return [];
    } else {
      return data.filter((item) => {
        const { episodeId = '', title = '', topic = '', date = ''  } = item;
        const text = `Episode ${episodeId}: ${title}\t-\t${topic}\t-\t${date}`;
        return (
          text.includes(searchText)
          // Number.toString(episodeId).includes(searchText)
          // || title.includes(searchText)
          // || topic.includes(searchText)
          // || date.includes(searchText)
        )
      })
    }
  }, [])

  // const displayPodcast = podcasts.map((podcast) => {
  //   return <PodcastContent title={podcast.title} image={podcast.image}/>
  // })
  // console.log(displayPodcast)

  return (
    <div className='podcast-page' data-aos='fade-out'>
      <div className='podcast-header'>
        <h2>Podcast Episodes</h2>
        <div className='podcast-underline'></div>
        <div className='search-filter-container'>
          <SearchBar searchFunc={podcastSearch} renderFunc={podcastRenderer} data={podcasts} id='podcast-search' resultsId='podcast-search-results' placeholder='Search for an episode...'/>
          
        </div>
      </div>
      <FilterItems data={podcasts} header={header} desription={description} />
        <div className='podcast-container'>
            <div className='podcast-content'>
              <PodcastContent image='/images/podcast.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 1 - First Podcast - Metabolism - September 1, 2022</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                </div>
              </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/figs.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 2 - Second Podcast - Metabolism - September 9, 2022</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                </div>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/granola.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 3 - Third Podcast - Nutrition - September 11, 2022</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                </div>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/ancient.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 4 - Fourth Podcast - Nutrition - September 15, 2022</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                </div>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/magic-mind.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 5 - Fifth Podcast - Blood Chemistry - September 20, 2022</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                </div>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/podcast.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 6 - Sixth Podcast - Health - September 22, 2022</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
                <div>
                  <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Podcast