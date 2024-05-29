// components/Card.js
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const AllPosts = ({ thumbnail, title, author, date, tag, link }) => {
  return (
    <div style={styles.card}>
      <div style={styles.coverPhotoContainer}>
        {thumbnail ? (
          <Image src={thumbnail} alt="cover" style={styles.coverPhoto} width={300} height={150} />
        ) : (
          <div style={styles.coverPhotoPlaceholder} />
        )}
      </div>
      <div style={styles.content}>
        <div style={styles.tag}>{tag}</div>
        <div style={styles.title}>{title}</div>
        <div style={styles.authorSection}>
          {/* <Image src={avatar} alt="author" style={styles.avatar} width={40} height={40} /> */}
          <div style={styles.authorInfo}>
            <div style={styles.authorName}>{author}</div>
            <div style={styles.date}>{date}</div>
          </div>
        </div>
        <Button className="relative bottom-[-10px]">
         <Link href={`${link}`}>
         Read More
         </Link>
      </Button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },
  coverPhotoContainer: {
    width: '100%',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverPhotoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  tag: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '15px',
    display: 'inline-block',
    fontSize: '12px',
    marginBottom: '10px',
  },
  readTime: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '10px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  authorName: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '12px',
    color: '#999',
  },
};

export default AllPosts;
