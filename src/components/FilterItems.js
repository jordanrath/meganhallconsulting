import React, { useEffect, useMemo, useState } from 'react';
import PodcastContent from './PodcastContent';

const FilterItems = ({ data = {}, key = '' }) => {
    const [displayed, setDisplayed] = useState([]);
    const filter = 'all';

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

        }, [filter, data, key]);

        const filteredItems = useMemo(() => {
            return displayed.map(item =>
                item.filtered === true ?
                    <div key={item.title} className='blog-content'>
                        <span>
                            <PodcastContent image={item.image}/>
                            <div className='blog-content-text'>
                                <h4>{item.header}</h4>
                                <p>{item.description}</p>
                                <div>
                                    <button href='#' target='_blank' rel='norefferrer'>Read</button>
                                </div>
                            </div>
                        </span>
                    </div> 
                    : ''
                )
            }, [displayed]);   

  return (
    <>
        <div className='blog-filtered-items'>
            <div className='blog-container'> 
                {filteredItems}        
            </div>
        </div>
    </>
  )
}

export default FilterItems;