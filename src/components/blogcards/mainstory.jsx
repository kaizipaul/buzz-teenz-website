// components/Card.js
import Image from 'next/image';
import Link from 'next/link';

const MainStory = ({ title, author, date, thumbnail, tag, link, avatar }) => {

 const backgroundImage = { 
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${thumbnail})`,
  backgroundSize: 'cover',
    backgroundPosition: 'center',
 }

 const styles = {
  card: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    // backgroundImage: `url(${coverPhoto})`
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
    width: 'fit-content'
  },
  readTime: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '10px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
    objectFit: 'cover',
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
          <Image src={avatar} alt="author" style={styles.avatar} width={40} height={40} className='ring-offset-2 ring ring-[#1789FC]' />
          <div style={styles.authorInfo}>
            <div style={styles.authorName}>{author}</div>
            <div style={styles.date}>{date}</div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};



// You can now use the 'styles' object to access the CSS properties for different classes


export default MainStory;
