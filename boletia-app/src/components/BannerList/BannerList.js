import React from "react";
import styles from "./BannerList.module.css";

function BannerList({ banners, onDeleteBanner }) {
  return (
    <div className="bg-blue-200 border-t-4 pt-5">
      {banners.map((banner, index) => (
        <div className={styles.container} key={index}>
          <h2 className={styles.title}>{banner.eventName}</h2>
          <p className={styles.subtitle}>
            {banner.eventDate} at {banner.eventTime}
          </p>
          <div className={styles["container-button"]}>
            <a
              href={banner.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Buy Tickets
            </a>
            <button
              className={styles.delete}
              onClick={() => onDeleteBanner(index)}
            >
              Delete
            </button>
          </div>

          <div>
            <img
              className={styles.desktop}
              src={URL.createObjectURL(banner.imageDesktop)}
              alt="Desktop"
            />
            <img
              className={styles.tablet}
              src={URL.createObjectURL(banner.imageTablet)}
              alt="Tablet"
            />
            <img
              className={styles.mobile}
              src={URL.createObjectURL(banner.imageMobile)}
              alt="Mobile"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerList;
