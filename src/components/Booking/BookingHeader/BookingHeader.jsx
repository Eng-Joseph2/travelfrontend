import React from 'react'
import BookingHeaderStyle from './BookingHeader.module.css';

const BookingHeader = () => {
  return (
    <>
        <div className={BookingHeaderStyle.Header}>
          <div className={BookingHeaderStyle.headerSection1}>
            <i class="fa-solid fa-circle-info"></i>
            <p>Information</p>
          </div>
          <div className={BookingHeaderStyle.headerSection}>
            <i class="fa-solid fa-calendar"></i>
            <p>Tour Plan</p>
          </div>
          <div className={BookingHeaderStyle.headerSection}>
            <i class="fa-solid fa-location-dot"></i>
            <p>Location</p>
          </div>
          <div className={BookingHeaderStyle.headerSection}>
            <i class="fa-regular fa-images"></i>
            <p>Gallery</p>
          </div>
        </div>
    </>
  )
}

export default BookingHeader