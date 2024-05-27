// components/Card.js
import Image from 'next/image';

const MainCard = ({ title, location, date, coverPhoto, tag }) => {
  return (
    <div style={styles.card}>
      <div style={styles.overlay}>
        <div style={styles.tag}>{tag}</div>
        <div style={styles.title}>{title}</div>
        <div style={styles.authorSection}>
          {/* <Image src={avatar} alt="author" className={styles.avatar} width={40} height={40} /> */}
          <div style={styles.authorInfo}>
            <div style={styles.authorName}>{location}</div>
            <div style={styles.date}>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
 card: {
   width: '100%',
   height: '100%',
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   borderRadius: '10px',
   overflow: 'hidden',
   position: 'relative',
   backgroundImage: 'url("../assets/hero.jpg")',
   // backgroundImage: `url(${coverPhoto})`
 },
 overlay: {
   backgroundColor: 'rgba(255, 255, 255, 0.3)',
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-end',
   padding: '20px'
 },
 tag: {
   backgroundColor: '#000',
   color: '#fff',
   padding: '5px 10px',
   borderRadius: '15px',
   display: 'inline-block',
   fontSize: '12px',
   marginBottom: '10px',
   width: '80px',
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
 avatar: {
   width: '40px',
   height: '40px',
   borderRadius: '50%',
   marginRight: '10px'
 },
 authorInfo: {
   display: 'flex',
   flexDirection: 'column'
 },
 authorName: {
   fontSize: '14px',
   fontWeight: 'bold'
 },
 date: {
   fontSize: '12px',
   color: '#999'
 }
};



export default MainCard;
