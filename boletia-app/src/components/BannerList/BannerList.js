import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './BannerList.css';
import PaymentButton from '../PaymentForm/PaymentButton';

function BannerList({ banners, onDeleteBanner }) {
  return (
    <div className={`banner-list ${banners.length > 0 ? 'with-banners' : ''}`}>
      {banners.map((banner, index) => (
        <div key={index} className="banner-item">
          <div className="banner-details">
            <h2>{banner.eventName}</h2>
            <p>{banner.eventDate} at {banner.eventTime}</p>
            <div className="banner-links">
              <a href={banner.purchaseUrl} target="_blank" rel="noopener noreferrer" className="btn btn-warning">Buy Tickets</a>
              <button type="button" className="btn btn-danger" onClick={() => onDeleteBanner(index)}>Delete</button>
            </div>
            <PaymentButton amount={10000} description="Pago de ejemplo" className="payment-button"/>
          </div>
          <div id={`carouselExampleControls${index}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={URL.createObjectURL(banner.imageDesktop)} className="desktop" alt="Desktop" />
              </div>
              <div className="carousel-item">
                <img src={URL.createObjectURL(banner.imageTablet)} className="tablet" alt="Tablet" />
              </div>
              <div className="carousel-item">
                <img src={URL.createObjectURL(banner.imageMobile)} className="mobile" alt="Mobile" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerList;
