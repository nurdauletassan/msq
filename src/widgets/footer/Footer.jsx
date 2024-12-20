import React from 'react'
import './Footer.css'
import vklogo from '../../shared/images/vklogo.svg'
import tglogo from '../../shared/images/tglogo.svg'
import youtubelogo from '../../shared/images/youtubelogo.svg'


function Footer() {
  return (
    <footer >
      <div className='footer-links'>
        <div className='footer-customer'>
          <span>For Customers</span>
          <div className='footer-nav-links'>
          <a href="">Promotions</a>
          <a href="">Delivery</a>
          <a href="">Payment</a>
          <a href="">Exchange and Returns</a>
          <a href="">Pick up in-Store</a>
          <a href="">Sizes</a>
          <a href="">Gift Card</a>
          <a href="">FAQ</a>
          <a href="">Clothing Care</a>
          </div>
        </div>

        <div className='footer-club-program'>
          <span>Club Program</span>
          <div className='footer-nav-links'>
            <a href="">Frequent Questions</a>
            <a href="">Participation Rules</a>
            <a href="">Become a Member</a>
            <a href="">Card Types</a>
          </div>
        </div>

        <div className='footer-about'>
          <span>About the Company</span>
          <div className='footer-nav-links'>
            <a href="">News</a>
            <a href="">Store Locations</a>
            <a href="">Public Offer</a>
            <a href="">User Agreement</a>
            <a href="">Privacy Policy</a>
            <a href="">O'STIN Logos</a>
          </div>
        </div>

        <div className='footer-careers'>
          <span >Careers at O'STIN</span>
          <div className='footer-nav-links'>
            <a href="">Store Vacancies</a>
            <a href="">Office Vacancies</a>
            <a href="">Fill Out an Application</a>
          </div>
        </div>





      </div>
      
      <div className='footer-ourcompany'>
        <div className='logo-more' >
          <p className='logo'>MSQ</p>
          <p className='about-msq'>O'STIN offers a comfortable online shopping experience and over 630 retail stores. For 21 years, we have been creating casual-style clothing for any situation, season, and weather, helping customers craft their unique and individual looks.</p>
        </div>
        <div>
          <div className='callphone-time'>
            <a href="tel:+78007774999" className='callphone'>8 707 777 49 99</a> 
            <div className='time'>9:00 – 22:00 AST</div>
          </div>
          <a href="tel:+78007774999" className='support-msq'>support@msq.kz</a>
        </div>
        <div>
          <div className="bottom-menu-social">
            <a href="https://vk.com/"  >
            <img src={vklogo} alt="" />
            </a>
            <a href="https://t.me/" >
            <img src={tglogo} alt="" />
            </a> 
            <a href="https://www.youtube.com/" >
              <img src={youtubelogo} alt="" />
            </a>
            </div>
        </div>
        <div>
          <div>Download our apps</div>
          
        </div>

      </div>
      <div>

      </div>
  </footer>
  )
}

export default Footer