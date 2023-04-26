import React from 'react';
import './App.css';
import SlickSlider from './Components/SlickSlider/SlickSlider';
import SectionNav from './Components/SectionNav/SectionNav';
import ProductServiceCard from './Components/ProductServices/ProductService';

// import { ReactComponent as BriefcaseIcon } from '@fortawesome/free-solid-svg-icons/faBriefcase';




function App() {
  return (
     <div className="App">
      <header className="App-header">

        <SectionNav />
        <SlickSlider /> 

          <div className="prodserv-container">
          <div className="product-service-header">
            <h3>Presenting products and services that are right for you</h3>
          </div>

          <div className="product-service-container">
            <div className="prodserv-card-container">
              <ProductServiceCard
              icon="/images/prodserv_onlinebusiness.png"
              title="Online Business"
              body=" Online businesses often have lower overhead costs, wider reach and access to a larger customer base, making them an attractive option for entrepreneurs looking to start their own business."
              link="https://www.squarespace.com/small-business-website/"
              />
            </div>

            <div className="prodserv-card-container">
              <ProductServiceCard
              icon="/images/prodserv_businessplan.png"
              title="Business Plan"
              body="A business plan includes details on the company's target market, marketing and sales plans, financial projections, and organizational structure. A well-crafted business plan is essential for securing funding and building a successful business."
              link="https://wisebusinessplans.com/bank-business-plan/"
              />
            </div>

            <div className="prodserv-card-container">
              <ProductServiceCard
              icon="/images/prodserv_mobilebank.png"
              title="Mobile Bank"
              body="Mobile banks typically offer a range of financial services, including checking and savings accounts, loans, and investment options. They offer the convenience of banking on-the-go and often have lower fees and higher interest rates than traditional banks."
              link="https://www.forbes.com/advisor/banking/best-mobile-banking-apps/"
              />
            </div>

            <div className="prodserv-card-container">
              <ProductServiceCard
              icon="/images/prodserv_onlinedeposit.png"
              title="Online Deposit"
              body="Online deposit is a convenient and efficient way to manage finances without the need for physical checks or visits to a bank branch. It also enables immediate access to funds, making it a popular option for businesses and individuals alike."
              link="https://www.forbes.com/advisor/banking/complete-guide-to-mobile-check-deposit/"
              />
            </div>
        </div>
        </div>
      </header>
      </div>
  );
}

export default App;
