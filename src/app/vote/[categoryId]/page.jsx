// app/[categoryId]/page.js

"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import VoteCard from '@/components/votecard/voteCard';
import { barlow_condensed } from '@/app/fonts';
import Vote from '../page';

const categories = [
  { id: '1', name: 'Best Movie', nominees: ['Nominee 1', 'Nominee 2', 'Nominee 3'] },
  { id: '2', name: 'Best Actor', nominees: ['Nominee A', 'Nominee B', 'Nominee C'] },
];

const VotingPage = ({ params }) => {
  const router = useRouter();
  const { categoryId } = params;
  const [selectedNominee, setSelectedNominee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedVote = localStorage.getItem(`vote_${categoryId}`);
    if (savedVote) {
      setSelectedNominee(savedVote);
    }
  }, [categoryId]);

  const handleVote = async (nomineeId) => {
    localStorage.setItem(`vote_${categoryId}`, nomineeId);
    setSelectedNominee(nomineeId);

    try {
      setLoading(true);
      setError(null);

      // const response = await fetch('/api/vote', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ categoryId, nomineeId }),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to submit vote');
      // }

      const nextCategoryIndex = categories.findIndex((cat) => cat.id === categoryId) + 1;
      if (nextCategoryIndex < categories.length) {
        router.push(`/vote/${categories[nextCategoryIndex].id}`);
      } else {
        router.push('/thank-you');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return <p>Loading...</p>;

  return (
    <section>
      <h1 className={barlow_condensed.className}>{category.name}</h1>
      <ul className='flex flex-col gap-4 items-center p-4'>
        {category.nominees.map((nominee, index) => (
          <li key={index}>
            <VoteCard
            title={nominee}
            subtitle={'artist'}
            onVote={() => handleVote(nominee)}
            disabled={selectedNominee === nominee || loading}
            />
          </li>
        ))}
      </ul>
      {loading && <p>Submitting your vote...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </section>
  );
};

export default VotingPage;
