import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className='announcement-bar'>
      <p className='announcement-bar__text'>
        🎉 To celebrate Spense's launch, we will be waiving all fees for the
        entire month of April.{' '}
        <span className='underline'>
          You will be receiving 100% of the earnings.
        </span>{' '}
        🎉
      </p>
    </div>
  );
};

export default AnnouncementBar;
