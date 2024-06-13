// components/Ticket.js

import React from 'react';
import styles from './Ticket.module.css';
import { FaLocationDot, FaClock } from "react-icons/fa6";

const Ticket = ({ eventName, eventDate, eventLocation }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.content}>
        <h2 className={styles.eventName}>{eventName}</h2>
        <p className={styles.eventDate}>
         <FaClock />
         {eventDate}
         </p>
        <p className={styles.eventLocation}>
         <FaLocationDot />
         {eventLocation}
         </p>
      </div>
    </div>
  );
};

export default Ticket;
