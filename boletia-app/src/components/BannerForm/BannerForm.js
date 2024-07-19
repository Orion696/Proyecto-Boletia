import React, { useState } from "react";
import styles from "./BannerForm.module.css";

function BannerForm({ onAddBanner }) {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    purchaseUrl: "",
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
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "i"
    );

    if (!formData.eventName) errors.eventName = "Event name is required";
    if (!formData.eventDate) errors.eventDate = "Event date is required";
    if (!formData.eventTime) errors.eventTime = "Event time is required";
    if (!formData.purchaseUrl || !urlPattern.test(formData.purchaseUrl))
      errors.purchaseUrl = "Valid URL is required";
    if (formData.imageDesktop && formData.imageDesktop.size / 1024 > 800)
      errors.imageDesktop = "Desktop image size should not exceed 800KB";
    if (formData.imageTablet && formData.imageTablet.size / 1024 > 800)
      errors.imageTablet = "Tablet image size should not exceed 800KB";
    if (formData.imageMobile && formData.imageMobile.size / 1024 > 800)
      errors.imageMobile = "Mobile image size should not exceed 800KB";

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
      eventName: "",
      eventDate: "",
      eventTime: "",
      purchaseUrl: "",
      imageDesktop: null,
      imageTablet: null,
      imageMobile: null,
    });
    setErrors({});
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label className={styles.label}>Event Name:</label>
      <input
        type="text"
        name="eventName"
        className={styles.input}
        value={formData.eventName}
        onChange={handleChange}
        required
      />
      {errors.eventName && <span>{errors.eventName}</span>}
      <label className={styles.label}>Event Date:</label>
      <input
        type="date"
        name="eventDate"
        className={styles.input}
        value={formData.eventDate}
        onChange={handleChange}
        required
      />
      {errors.eventDate && <span>{errors.eventDate}</span>}

      <label className={styles.label}>Event Time:</label>
      <input
        type="time"
        name="eventTime"
        className={styles.input}
        value={formData.eventTime}
        onChange={handleChange}
        required
      />
      {errors.eventTime && <span>{errors.eventTime}</span>}

      <label className={styles.label}>Purchase URL:</label>
      <input
        type="url"
        name="purchaseUrl"
        className={styles.input}
        value={formData.purchaseUrl}
        onChange={handleChange}
        required
      />
      {errors.purchaseUrl && <span>{errors.purchaseUrl}</span>}

      <label className={styles.label}>Desktop Image:</label>
      <input
        type="file"
        name="imageDesktop"
        className={styles.input}
        accept="image/*"
        onChange={handleChange}
        required
      />
      {errors.imageDesktop && (
        <span className={styles.error}>{errors.imageDesktop}</span>
      )}

      <label className={styles.label}>Tablet Image:</label>
      <input
        type="file"
        name="imageTablet"
        className={styles.input}
        accept="image/*"
        onChange={handleChange}
        required
      />
      {errors.imageTablet && (
        <span className={styles.error}>{errors.imageTablet}</span>
      )}

      <label className={styles.label}>Mobile Image:</label>
      <input
        type="file"
        name="imageMobile"
        className={styles.input}
        accept="image/*"
        onChange={handleChange}
        required
      />
      {errors.imageMobile && (
        <span className={styles.error}>{errors.imageMobile}</span>
      )}

      <div className="flex justify-center">
        <button className={styles.button} type="submit">
          Add Banner
        </button>
      </div>
    </form>
  );
}

export default BannerForm;
