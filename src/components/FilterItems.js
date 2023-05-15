import React, { useEffect, useMemo, useState } from 'react';
import PodcastContent from './PodcastContent';

const FilterItems = ({ data = {}, description = '', header = '' }) => {
    const [filterActive, setFilterActive] = useState(false);
    const [filter, setFilter] = useState('all');
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
        setDisplayed(data);
    }, [data]);

    useEffect(() => {

        setDisplayed([]);

        const filtered = data.map(item => ({ 
            ...item, 
            filtered: item.category.includes(filter) 
        }));
    
        setDisplayed(filtered);

        }, [filter, data]);

        //useMemo hook to optimize the map function for filtered items
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
        setFilterActive(current => !current);
//{filterActive ? 'collapsible-btn filter-active' : 'collapsible-btn'}
        return (
            <div className='filter-container'>
                <div className='filter-button-content'>
                    <div className='filter-content'>
                        <DisplayBtns />
                        {/* { filterActive ? <DisplayBtns /> : null} */}
                    </div>
                    <button type='button' className='collapsible-btn filter-active' onClick={HandleFilterClick}>
                        <span className="material-symbols-outlined">
                            filter_alt
                        </span>
                    </button>
                </div>
            </div>
        )

        // handleSetFilter();
    };

    const DisplayBtns = () => (
            <div id='filter-buttons' className={filter === '' ? 'filter-content' : 'filter-buttons-active'}>
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'filter-button-active' : ''}>Show All</button>
                <button onClick={() => setFilter('Wellness')} className={filter === 'Wellness' ? 'filter-button-active' : ''}>Wellness</button>
                <button onClick={() => setFilter('Nutrition')} className={filter === 'Nutrition' ? 'filter-button-active' : ''}>Nutrition</button>
                <button onClick={() => setFilter('Fitness')} className={filter === 'Fitness' ? 'filter-button-active' : ''}>Fitness</button>
                <button onClick={() => setFilter('Supplementation')} className={filter === 'Supplementation' ? 'filter-button-active' : ''}>Supplementation</button>
                <button onClick={() => setFilter('Testing')} className={filter === 'Testing' ? 'filter-button-active' : ''}>Testing</button>
                <button onClick={() => setFilter('Other')} className={filter === 'Other' ? 'filter-button-active' : ''}>Other</button>
            </div>
    )

    const handleSetFilter = () => {
        return displayed.map(item => 
            item.filtered === true ?
            setFilter(item.category)
            : setFilter('')
        )
    };

  return (
    // <div className='filter-items-container'>
    //{filterActive ? 'collapsible-btn' : ''}
    <>
        <HandleFilterClick />
        <div className='podcast-filtered-items'>
            <div className='podcast-container'> 
                {filteredItems}        
            </div>
        </div>
    </>
    // </div>
  )
}

export default FilterItems