import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <h1>Banner Configuration</h1>
      <form className="banner-form" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="eventName" 
            name="eventName" 
            value={formData.eventName} 
            onChange={handleChange} 
            required 
            placeholder="Event Name" 
          />
          <label htmlFor="eventName">Event Name</label>
          {errors.eventName && <span className="error">{errors.eventName}</span>}
        </div>

        <div className="date-time-container">
          <div className="form-floating mb-3 form-date-time">
            <input 
              type="date" 
              className="form-control" 
              id="eventDate" 
              name="eventDate" 
              value={formData.eventDate} 
              onChange={handleChange} 
              required 
              placeholder="Event Date" 
            />
            <label htmlFor="eventDate">Event Date</label>
            {errors.eventDate && <span className="error">{errors.eventDate}</span>}
          </div>
          <div className="form-floating mb-3 form-date-time">
            <input 
              type="time" 
              className="form-control" 
              id="eventTime" 
              name="eventTime" 
              value={formData.eventTime} 
              onChange={handleChange} 
              required 
              placeholder="Event Time" 
            />
            <label htmlFor="eventTime">Event Time</label>
            {errors.eventTime && <span className="error">{errors.eventTime}</span>}
          </div>
        </div>

        <div className="form-floating mb-3">
          <input 
            type="url" 
            className="form-control" 
            id="purchaseUrl" 
            name="purchaseUrl" 
            value={formData.purchaseUrl} 
            onChange={handleChange} 
            required 
            placeholder="Purchase URL" 
          />
          <label htmlFor="purchaseUrl">Purchase URL</label>
          {errors.purchaseUrl && <span className="error">{errors.purchaseUrl}</span>}
        </div>

        <div className="image-fields-container">
          <div className="mb-3">
            <label htmlFor="imageDesktop" className="form-label">Desktop Image:</label>
            <input 
              className="form-control" 
              type="file" 
              id="imageDesktop" 
              name="imageDesktop" 
              accept="image/*" 
              onChange={handleChange} 
              required 
            />
            {errors.imageDesktop && <span className="error">{errors.imageDesktop}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="imageTablet" className="form-label">Tablet Image:</label>
            <input 
              className="form-control" 
              type="file" 
              id="imageTablet" 
              name="imageTablet" 
              accept="image/*" 
              onChange={handleChange} 
              required 
            />
            {errors.imageTablet && <span className="error">{errors.imageTablet}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="imageMobile" className="form-label">Mobile Image:</label>
            <input 
              className="form-control" 
              type="file" 
              id="imageMobile" 
              name="imageMobile" 
              accept="image/*" 
              onChange={handleChange} 
              required 
            />
            {errors.imageMobile && <span className="error">{errors.imageMobile}</span>}
          </div>
        </div>

        <div className="button-container">
          <button type="submit" className="banner-form-button">Add Banner</button>
        </div>
      </form>
    </div>
  );
}

export default BannerForm;
