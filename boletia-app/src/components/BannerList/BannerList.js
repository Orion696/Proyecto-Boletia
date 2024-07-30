import React from 'react';
import './BannerList.css';

function BannerList({ banners, onDeleteBanner }) {
  return (
    <div className="banner-list">
      {banners.map((banner, index) => (
        <div key={index} className="banner-item">
          <div className="banner-details">
            <h2>{banner.eventName}</h2>
            <p>{banner.eventDate} at {banner.eventTime}</p>
            <div className="banner-links">
              <a href={banner.purchaseUrl} target="_blank" rel="noopener noreferrer">Buy Tickets</a>
              <button onClick={() => onDeleteBanner(index)}>Delete</button>
            </div>
          </div>
          <div className="banner-images">
            <img src={URL.createObjectURL(banner.imageDesktop)} alt="Desktop" className="image-desktop" />
            <img src={URL.createObjectURL(banner.imageTablet)} alt="Tablet" className="image-tablet" />
            <img src={URL.createObjectURL(banner.imageMobile)} alt="Mobile" className="image-mobile" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerList;
