import React from 'react'
import PodcastContent from '../components/PodcastContent'

const Podcast = () => {
  return (
    <div className='podcast-page' data-aos='fade-out'>
        <h2>Podcast Episodes</h2>
        <div className='podcast-underline'></div>
        <div className='podcast-container'>
            <div className='podcast-content'>
              <PodcastContent image='/images/podcast.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 1 - Health</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
              </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/figs.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 2 - Nutrition</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/granola.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 3 - Nutrition</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/ancient.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 4 - Supplements</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/magic-mind.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 5 - Bloodwork</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
            </div>
            </div>
            <div className='podcast-content'>
            <PodcastContent image='/images/podcast.jpg' info='Podcast 1'/>
              <div className='podcast-content-text'>
                <h4>Episode 6 - Health</h4>
                <p>This is a short description of the guest and episode... In this episode we talked to Megan about her website.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Podcast