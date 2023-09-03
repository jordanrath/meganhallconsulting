import React, { useEffect, useMemo, useState } from 'react';
import PodcastContent from './PodcastContent';

const FilterItems = ({ data = {}, key = '', description = '', header = '' }) => {
    const [filter, setFilter] = useState('all');
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
        setDisplayed(data);
    }, [data]);

    useEffect(() => {

        setDisplayed([]);

        const filtered = data.map(item => ({ 
            key: key,
            ...item, 
            filtered: item.category.includes(filter) 
        }));
    
        setDisplayed(filtered);

        }, [filter, data, key]);

        const filteredItems = useMemo(() => {
            return displayed.map(item =>
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
                )
            }, [displayed]);   
        
    const HandleFilterClick = () => {
        return (
            <div className='filter-container'>
                <div className='filter-button-content'>
                    <div className='filter-content'>
                        <DisplayBtns />
                    </div>
                    <button type='button' className='collapsible-btn filter-active' onClick={HandleFilterClick}>
                        <span className="material-symbols-outlined">
                            filter_alt
                        </span>
                    </button>
                </div>
            </div>
        )
    };

    const DisplayBtns = () => (
        <div id='filter-buttons' className={filter === '' ? 'filter-content' : 'filter-buttons-active'}>
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'filter-button-active' : 'filter-btn'}>Show All</button>
            <button onClick={() => setFilter('Wellness')} className={filter === 'Wellness' ? 'filter-button-active' : 'filter-btn'}>Wellness</button>
            <button onClick={() => setFilter('Nutrition')} className={filter === 'Nutrition' ? 'filter-button-active' : 'filter-btn'}>Nutrition</button>
            <button onClick={() => setFilter('Fitness')} className={filter === 'Fitness' ? 'filter-button-active' : 'filter-btn'}>Fitness</button>
            <button onClick={() => setFilter('Supplementation')} className={filter === 'Supplementation' ? 'filter-button-active' : 'filter-btn'}>Supplementation</button>
            <button onClick={() => setFilter('Testing')} className={filter === 'Testing' ? 'filter-button-active' : 'filter-btn'}>Testing</button>
            <button onClick={() => setFilter('Other')} className={filter === 'Other' ? 'filter-button-active' : 'filter-btn'}>Other</button>
        </div>
    )

  return (
    <>
        <div className='podcast-filtered-items'>
            <div className='podcast-container'> 
                {filteredItems}        
            </div>
        </div>
    </>
  )
}

export default FilterItems;