// app/vote/[categoryId]/page.js
'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { barlow_condensed } from '@/app/fonts';
import SuggestionForm from '@/components/suggestionForm/suggestionForm';

const VotingPage = ({ params }) => {
  const { categoryId } = params;
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('*');

        if (categoriesError) {
          throw categoriesError;
        }

        setCategories(categoriesData);
        const categoryData = categoriesData.find((cat) => cat.id === parseInt(categoryId));
        setCategory(categoryData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, [categoryId]);


  if (!category) return <p>Loading...</p>;

  return (
    <div className='flex flex-col items-center p-4 h-[700px]'>
      <div className='flex flex-col gap-4 bg-slate-100 text-black p-8 h-[90%] w-full rounded-xl'>
      <h1 className='font-bold text-[1.5rem]'>{category.name}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <SuggestionForm categoryId={categoryId} categories={categories} />
      </div>
    </div>
  );
};

export default VotingPage;
