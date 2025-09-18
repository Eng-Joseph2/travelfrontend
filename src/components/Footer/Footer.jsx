import React from 'react'
import FooterStyle from './Footer.module.css';
import image1 from '../../Assets/Cards/AmericanExpress.png';
import image2 from '../../Assets/Cards/ApplePay.png';
import image3 from '../../Assets/Cards/bitpy.png';
import image4 from '../../Assets/Cards/Discover.png';
import image5 from '../../Assets/Cards/GPAY.png';
import image6 from '../../Assets/Cards/MasteCard.png';
import image7 from '../../Assets/Cards/Mastero.png';
import image8 from '../../Assets/Cards/PayPAl.png';
import image9 from '../../Assets/Cards/Sofert.png';
import image10 from '../../Assets/Cards/Visa.png';


const Footer = () => {
  return (
    <>
        <div className={FooterStyle.FooterContainer}>

            <div className={FooterStyle.FooterSections}>
                <div className={FooterStyle.FooterSection1}>
                    <div className={FooterStyle.Language}>
                        {/* <label htmlFor=""></label> */}
                        <datalist id='Magaalooyin'>
                            <option value="xamar"/>
                            <option value="baydhabo"/>
                            <option value="afgooye"/>
                            <option value="gaalkacayo"/>
                        </datalist>

                        <label> Language </label>
                        <input type="text" list='Magaalooyin' placeholder='English '/>
                    </div>
                    <div className={FooterStyle.Language}>
                        <label> Currency </label>
                        <input type="text" />
                    </div>
                </div>
                <div className={FooterStyle.FooterSection1}>
                    <div className={FooterStyle.Company}>

                        <ul>
                            <h1>Company</h1>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Press Room</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div className={FooterStyle.FooterSection1}>
                    <div className={FooterStyle.Help}>
                        <ul>
                            <h1>Help</h1>
                            <li>Contact Us Us</li>
                            <li>FAQs</li>
                            <li>Team And Conditions</li>
                            <li>Privacy Policy</li>
                            <li> Sitemap </li>
                        </ul>
                    </div>
                </div>
                <div className={FooterStyle.FooterSection1}>
                    <div className={FooterStyle.Payment}>
                        <h1>Payment methods possible</h1>
                        <div className={FooterStyle.PaymentImages}>
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                            <img src={image3} alt="" />
                            <img src={image4} alt="" />
                            <img src={image5} alt="" />
                            <img src={image6} alt="" />
                            <img src={image7} alt="" />
                            <img src={image8} alt="" />
                            <img src={image9} alt="" />
                            <img src={image10} alt="" />
                        </div>
                        <h1>Company</h1>
                        <p>Become To Our guide for Us</p>
                    </div>

                </div>
            </div>
            
        </div>
        <div className={FooterStyle.CopyRight}>
                
        </div>
    </>
  )
}

export default Footer