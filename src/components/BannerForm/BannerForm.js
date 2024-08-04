import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import './BannerForm.css';
import { DatePicker, Stack } from 'rsuite';
import { FaCalendar, FaClock } from 'react-icons/fa';

function BannerForm({ onAddBanner }) {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: null,
    eventTime: null,
    purchaseUrl: '',
    imageDesktop: null,
    imageTablet: null,
    imageMobile: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    onAddBanner({
      ...formData,
      eventDate: formData.eventDate ? formData.eventDate.toISOString().split('T')[0] : '',
      eventTime: formData.eventTime ? formData.eventTime.toISOString().split('T')[1].substring(0, 5) : '',
    });
    setFormData({
      eventName: '',
      eventDate: null,
      eventTime: null,
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
            onChange={(e) => handleChange('eventName', e.target.value)} 
            required 
            placeholder="Event Name" 
          />
          <label htmlFor="eventName">Event Name</label>
          {errors.eventName && <span className="error">{errors.eventName}</span>}
        </div>

        <div className="date-time-container">
          <div className="form-floating mb-3 form-date-time">
            <DatePicker 
              caretAs={FaCalendar} 
              placeholder="Event Date" 
              value={formData.eventDate}
              onChange={(value) => handleChange('eventDate', value)}
              block 
            />
            {errors.eventDate && <span className="error">{errors.eventDate}</span>}
          </div>
          <div className="form-floating mb-3 form-date-time">
            <DatePicker 
              caretAs={FaClock} 
              placeholder="Event Time" 
              format="HH:mm" 
              value={formData.eventTime}
              onChange={(value) => handleChange('eventTime', value)}
              block 
            />
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
            onChange={(e) => handleChange('purchaseUrl', e.target.value)} 
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
              onChange={(e) => handleChange('imageDesktop', e.target.files[0])} 
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
              onChange={(e) => handleChange('imageTablet', e.target.files[0])} 
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
              onChange={(e) => handleChange('imageMobile', e.target.files[0])} 
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
