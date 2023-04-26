import React from 'react';
import Slider from 'react-slick';
import './SlickSlider.css';

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="container">
      <div className="partners">
        <h1>Partners</h1>
      </div>

      <div className="slickslider-container">
        <div>
          <Slider {...settings}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/visa.svg`}
                alt="Visa"
                className="slickslider-image"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/mastercard.svg`}
                alt="Mastercard"
                className="slickslider-image"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/paypal.svg`}
                alt="PayPal"
                className="slickslider-image"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/stripe.svg`}
                alt="Stripe"
                className="slickslider-image"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/AmEx.svg`}
                alt="American Express"
                className="slickslider-image"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
