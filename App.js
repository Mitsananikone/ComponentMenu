import React from 'react';
import './App.css';
import SlickSlider from './Components/SlickSlider/SlickSlider';
import SectionNav from './Components/SectionNav/SectionNav';
import ProductServiceCard from './Components/ProductServices/ProductService';
import './Components/ProductServices/ProductService.css'
// import SeparationLine from './Components/SeperationLine/SeperationLine';
import InfoBannerSlide from './Components/InfoBanner/InfoBanner';





function App() {


  return (
     <div className="App">
      <div className="App-container">
      
      <section id="InfoBannerSlide-container" className="fade-in-section">
        <InfoBannerSlide/>
      </section>

        <section id="SectionNav-container" className="fade-in-section">
          <SectionNav />
        </section>

        <section id="ProdServ-container" className="fade-in-section">
          <div className="product-service-header">
            <h3>Presenting products and services that are right for you</h3>
          </div>

          <div className="product-service-container">
               <div className="prodserv-card-container">
                <ProductServiceCard
                icon="/images/prodserv_onlinebusiness.png"
                title="Online Business"
                body="Online businesses have lower overhead costs and wider reach, making them an attractive option for entrepreneurs."
                link="https://www.squarespace.com/small-business-website/"
                />
              </div>

              <div className="prodserv-card-container">
                <ProductServiceCard
                icon="/images/prodserv_businessplan.png"
                title="Business Plan"
                body="A well-crafted business plan is essential for securing funding and building a successful business."
                link="https://wisebusinessplans.com/bank-business-plan/"
                />
              </div>

              <div className="prodserv-card-container">
                <ProductServiceCard
                icon="/images/prodserv_mobilebank.png"
                title="Mobile Bank"
                body="Mobile banks offer convenient banking services on-the-go with lower fees and higher interest rates than traditional banks."
                link="https://www.forbes.com/advisor/banking/best-mobile-banking-apps/"
                />
              </div>

              <div className="prodserv-card-container">
                <ProductServiceCard
                icon="/images/prodserv_onlinedeposit.png"
                title="Online Deposit"
                body="Online deposit is a convenient and efficient way to manage finances with immediate access to funds."
                link="https://www.forbes.com/advisor/banking/complete-guide-to-mobile-check-deposit/"
                />
              </div>
          </div>
          </section>
      </div>

      <SlickSlider /> 

    </div>
  );
}

export default App;
