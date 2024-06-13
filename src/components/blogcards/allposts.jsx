// components/Card.js
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { Button } from '../ui/button';
import { FiArrowRight } from "react-icons/fi";

const AllPosts = ({ thumbnail, title, author, date, tag, link, avatar }) => {
  return (
    <div style={styles.card}>
      <div style={styles.coverPhotoContainer}>
        {thumbnail ? (
          <Image src={thumbnail} alt="cover" style={styles.coverPhoto} width={300} height={200} />
        ) : (
          <div style={styles.coverPhotoPlaceholder} />
        )}
      </div>
      <div style={styles.content}>
        <div style={styles.tag}>{tag}</div>
        <div style={styles.title}>{title}</div>
        <div style={styles.authorSection}>
          <Image src={avatar} alt="author" style={styles.avatar} width={40} height={40} className='ring-offset-2 ring ring-[#1789FC]' />
          <div style={styles.authorInfo}>
            <div style={styles.authorName}>{author}</div>
            <div style={styles.date}>{date}</div>
          </div>
        </div>
        <Button asChild className="bg-[#AB0758]/50 rounded-lg mt-4">
         <Link href={`${link}`}>
         Read More
         <FiArrowRight className='ml-2' />
         </Link>
      </Button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    backgroundColor: 'rgba(171, 7, 88, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },
  coverPhotoContainer: {
    width: '100%',
    height: '200px',
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#000',
    fontWeight: '700',
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
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
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
