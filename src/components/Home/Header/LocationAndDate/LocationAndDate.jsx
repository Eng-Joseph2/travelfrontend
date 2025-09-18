import React from 'react'
import LocationImage from '../../../../Assets/pin.png'
import GuestsImage  from '../../../../Assets/cake.png'
import Calender  from '../../../../Assets/calendar.png'
import LocationStyle from './LocationAndDate.module.css';



const LocationAndDate = () => {
  return (
    <div className={LocationStyle.container}>
        <div className={LocationStyle.Description}>
            <div className={LocationStyle.HeadDescription}>
                <img src={LocationImage} alt=""  width={'27px'} height={'27px'}/>
                <h4>Location</h4>
            </div>
            <p>Search For A Destination</p>
        </div>
        <div className={LocationStyle.Description}>
            <div className={LocationStyle.HeadDescription}>
                <img src={GuestsImage} alt=""  width={'27px'} height={'27px'}/>
                <h4>How many Guests?</h4>
            </div>
            <p>Search For A Destination</p>
        </div>
        <div className={LocationStyle.Description}>
            <div className={LocationStyle.HeadDescription}>
                <img src={Calender} alt=""  width={'27px'} height={'27px'}/>
                <h4>Date</h4>
            </div>
            <p>Pig a Date</p>
        </div>
        
        <button>Search</button>
    </div>
  )
}

export default LocationAndDate