import React from 'react';
import './InfoBanner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InfoBanner(props) {
    const { heading, title, body, image, link } = props;
  
    return (
      <div className="infoBanner">
        <div className="infoBanner-container">
          <div className="image-container">
            <img src={image} alt={`Image of ${title}`} />
            <div className="text-container">
              <div className="text-wrapper">
                <h2 className="heading">{heading}</h2>
                <h3 className="title">{title}</h3>
                <p className="body">{body}</p>
              </div>
              <div className="card-footer">
                <a href={link}>
                    <button className="learn-more-button-infobanner">Learn more</button>
                </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function InfoBannerSlide() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10000,
      cssEase: 'linear',
      arrows: true,
    };
  
    return (
      <div >
        <div className="infoBanner-slider-container">
          <Slider {...settings}>
            <div className="slider-image">
              <InfoBanner 
                heading="Premium Credit Card"
                title="Enjoy premium benefits with our credit card"
                body="Get access to exclusive rewards, higher credit limits, and a variety of perks that make your spending worthwhile."
                image="/images/infoBanner_alignright1.jpg"
                
              />
            </div>
            <div className="slider-image">
              <InfoBanner 
                heading="Debit Card with No Monthly Fees"
                title="Stay in control of your finances with our debit card"
                body="Say goodbye to monthly maintenance fees and enjoy easy access to your funds with our no-fee debit card."
                image="/images/infoBanner_alignright2.jpg"
          
              />
            </div>
            <div className="slider-image">
              <InfoBanner 
                heading="Prepaid Card "
                title="Manage your expenses with ease"
                body="With no overdraft fees or interest charges, it's the perfect solution for managing your day-to-day expenses."
                image="/images/infoBanner_alignright3.jpg"
            
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
  

export default InfoBannerSlide;