import React, { useState } from 'react';
import BannerForm from '../../components/BannerForm/BannerForm';
import BannerList from '../../components/BannerList/BannerList';
import './Home.css';

function Home() {
  const [banners, setBanners] = useState([]);

  const addBanner = (newBanner) => {
    setBanners((prevBanners) => [...prevBanners, newBanner]);
  };

  const deleteBanner = (index) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      setBanners((prevBanners) => prevBanners.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="home">
      <BannerForm onAddBanner={addBanner} />
      <BannerList banners={banners} onDeleteBanner={deleteBanner} />
    </div>
  );
}

export default Home;
