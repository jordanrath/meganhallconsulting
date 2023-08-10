import React from 'react';
import useScript from '../components/controls/Script';

export const Schedule = () => {

    useScript('https://embed.acuityscheduling.com/js/embed.js');
    // https://acuitymeganhallconsulting.as.me/complimentary
    // https://acuitymeganhallconsulting.as.me/

  return (
    <>
      <div className='schedule-container'>
      <iframe src="https://app.acuityscheduling.com/schedule.php?owner=22267278" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
      {/* <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script> */}
      {/* <img src='/images/example-schedule.png' alt='Megan and Cooper' className='schedule-img'/> */}
      {/* <iframe title="schedule" src="https://example.acuityscheduling.com" width="100%" height="800" frameBorder="0"></iframe> */}
      {/* <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script> */}
      </div>
    </>
  )
}

export default Schedule;
