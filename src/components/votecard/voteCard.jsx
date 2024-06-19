import Image from 'next/image';
import styles from './VoteCard.module.css';
import { useState } from 'react';

const VoteCard = ({title, subtitle, avatar, onVote}) => {

 const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
      {imageError ? (
          <div className={styles.placeholder}></div>
        ) : (
          <Image 
            src={avatar} 
            alt="Flowers - Miley Cyrus" 
            width={100} 
            height={100} 
            layout="responsive"
            className={styles.image}
            onError={handleImageError}
          />
        )}
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.artist}>{subtitle}</p>
      </div>
      <button className={styles.voteButton} onClick={onVote}>VOTE</button>
    </div>
  );
};

export default VoteCard;
