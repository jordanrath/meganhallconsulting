import React, { useEffect, useState } from 'react';
import PodcastContent from './PodcastContent';

const FilterItems = ({ data = {}, description = '', header = '' }) => {
    const [filterActive, setFilterActive] = useState(false);
    const [filter, setFilter] = useState('all');
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
        setDisplayed(data);
        console.log(data)
    }, [data]);

    useEffect(() => {

        setDisplayed([]);

        const filtered = data.map(item => ({ 
            ...item, 
            filtered: item.category.includes(filter) 
        }));
    
        setDisplayed(filtered);

        }, [filter, data]);
        
    const handleFilterClick = () => {
        setFilterActive(current => !current);
    };

  return (
    // <div className='filter-items-container'>
    <>
    <button type='button' className={filterActive ? 'collapsible-btn' : ''}>Filter</button>
        <div className='filter-content'>
            <button onClick={() => setFilter('all')}>Show All</button>
            <button onClick={() => setFilter('Wellness')}>Wellness</button>
            <button onClick={() => setFilter('Nutrition')}>Nutrition</button>
            <button onClick={() => setFilter('Fitness')}>Fitness</button>
            <button onClick={() => setFilter('Supplementation')}>Supplementation</button>
            <button onClick={() => setFilter('Testing')}>Testing</button>
            <button onClick={() => setFilter('Other')}>Other</button>
        </div>
        <div className='podcast-filtered-items'>
            <div className='podcast-container'> 
            {displayed.map(item =>
                item.filtered === true ?
                    <div className='podcast-content'>
                        <span key={item.title}>
                            <PodcastContent image={item.image}/>
                            <div className='podcast-content-text'>
                                <h4>{item.header}</h4>
                                <p>{item.description}</p>
                                <div>
                                    <button href='#' target='_blank' rel='norefferrer'>Listen</button>
                                </div>
                            </div>
                        </span>
                    </div> 
                    : ''
                )}
                    
                </div>
        </div>
    </>
    // </div>
  )
}

export default FilterItems