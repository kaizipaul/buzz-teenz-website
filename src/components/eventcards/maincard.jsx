// components/Card.js
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot, FaClock } from "react-icons/fa6";

const MainCard = ({ title, location, date, thumbnail, tag, link }) => {
  const backgroundImage = { 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   }

   const styles = {
    card: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    },
    overlay: {
      // backgroundColor: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '20px'
    },
    tag: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      color: '#000',
      fontWeight: '700',
      padding: '5px 10px',
      borderRadius: '15px',
      display: 'inline-block',
      fontSize: '12px',
      marginBottom: '10px',
      width: 'fit-content',
    },
    readTime: {
      fontSize: '12px',
      color: '#999',
      marginBottom: '10px'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px'
    },
    authorSection: {
      display: 'flex',
      alignItems: 'center'
    },
    authorInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    authorName: {
      fontSize: '14px',
      fontWeight: 'bold',
      display: 'inline-flex',
      gap: '4px',
      alignItems: 'center'
    },
    date: {
      fontSize: '12px',
      color: '#999',
      display: 'inline-flex',
      gap: '4px',
      alignItems: 'center',
    }
   };

   const combined = {
    ...styles.card,
    ...backgroundImage,
   }


  return (
    <Link href={`${link}`}>
    <div style={combined}>
      <div style={styles.overlay}>
        <div style={styles.tag}>{tag}</div>
        <div style={styles.title}>{title}</div>
        <div style={styles.authorSection}>
          <div style={styles.authorInfo}>
            <div style={styles.authorName}>
            <FaLocationDot />
              {location}
              </div>
            <div style={styles.date}>
            <FaClock />
              {date}
              </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};





export default MainCard;
