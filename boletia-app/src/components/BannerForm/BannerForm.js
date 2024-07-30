import React, { useState } from 'react';
import './BannerForm.css';

function BannerForm({ onAddBanner }) {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    purchaseUrl: '',
    imageDesktop: null,
    imageTablet: null,
    imageMobile: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const errors = {};
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');

    if (!formData.eventName) errors.eventName = 'Event name is required';
    if (!formData.eventDate) errors.eventDate = 'Event date is required';
    if (!formData.eventTime) errors.eventTime = 'Event time is required';
    if (!formData.purchaseUrl || !urlPattern.test(formData.purchaseUrl)) errors.purchaseUrl = 'Valid URL is required';
    if (formData.imageDesktop && formData.imageDesktop.size / 1024 > 80) errors.imageDesktop = 'Desktop image size should not exceed 80KB';
    if (formData.imageTablet && formData.imageTablet.size / 1024 > 80) errors.imageTablet = 'Tablet image size should not exceed 80KB';
    if (formData.imageMobile && formData.imageMobile.size / 1024 > 80) errors.imageMobile = 'Mobile image size should not exceed 80KB';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onAddBanner(formData);
    setFormData({
      eventName: '',
      eventDate: '',
      eventTime: '',
      purchaseUrl: '',
      imageDesktop: null,
      imageTablet: null,
      imageMobile: null,
    });
    setErrors({});
  };

  return (
    <div className="banner-form-container">
      <form className="banner-form" onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input 
            type="text" 
            name="eventName" 
            value={formData.eventName} 
            onChange={handleChange} 
            required 
            placeholder="Enter the event name" 
          />
          {errors.eventName && <span className="error">{errors.eventName}</span>}
        </label>

        <div className="date-time-container">
          <label>
            Event Date:
            <input 
              type="date" 
              name="eventDate" 
              value={formData.eventDate} 
              onChange={handleChange} 
              required 
              placeholder="Select the event date" 
            />
            {errors.eventDate && <span className="error">{errors.eventDate}</span>}
          </label>
          <label>
            Event Time:
            <input 
              type="time" 
              name="eventTime" 
              value={formData.eventTime} 
              onChange={handleChange} 
              required 
              placeholder="Select the event time" 
            />
            {errors.eventTime && <span className="error">{errors.eventTime}</span>}
          </label>
        </div>

        <label>
          Purchase URL:
          <input 
            type="url" 
            name="purchaseUrl" 
            value={formData.purchaseUrl} 
            onChange={handleChange} 
            required 
            placeholder="Enter the purchase URL" 
          />
          {errors.purchaseUrl && <span className="error">{errors.purchaseUrl}</span>}
        </label>

        <div className="image-fields-container">
          <label>
            Desktop Image:
            <input 
              type="file" 
              name="imageDesktop" 
              accept="image/*" 
              onChange={handleChange} 
              required 
            />
            {errors.imageDesktop && <span className="error">{errors.imageDesktop}</span>}
          </label>
          <label>
            Tablet Image:
            <input 
              type="file" 
              name="imageTablet" 
              accept="image/*" 
              onChange={handleChange} 
              required 
            />
            {errors.imageTablet && <span className="error">{errors.imageTablet}</span>}
          </label>
          <label>
            Mobile Image:
            <input 
              type="file" 
              name="imageMobile" 
              accept="image/*" 
              onChange={handleChange} 
              required 
            />
            {errors.imageMobile && <span className="error">{errors.imageMobile}</span>}
          </label>
        </div>

        <div className="button-container">
          <button type="submit" className="banner-form-button">Add Banner</button>
        </div>
      </form>
    </div>
  );
}

export default BannerForm;
