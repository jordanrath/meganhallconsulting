import React from 'react';
import useScript from '../components/controls/Script';

export const Schedule = () => {

  useScript('https://embed.acuityscheduling.com/js/embed.js');

  return (
    <div className='schedule-container' data-aos='zoom-in'>
      <iframe 
        src="https://app.acuityscheduling.com/schedule.php?owner=22267278" 
        title="Schedule Appointment" 
        width="100%" 
        height="800" 
        loading="lazy" 
        frameBorder="0"
      >
      </iframe>
    </div>
  )
}

export default Schedule;
