"use client"
import { useEffect, useState, useCallback } from 'react';
import AllEventsCard from '@/components/eventcards/allevents';
import MainCard from '@/components/eventcards/maincard';
import { fetchEvents } from '../helpers/requests';
import { formatDate } from '../helpers/convertDate';
import { barlow_condensed } from '../fonts';
import { Button } from "@/components/ui/button";
import { Toaster, toast } from 'react-hot-toast';

const EVENTS_PER_PAGE = 4;

// Skeleton loader for main cards
const MainCardSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-full w-full rounded-lg"></div>
);

// Skeleton loader for smaller event cards
const EventCardSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-64 w-full rounded-lg"></div>
);

export default function Events() {
  const [eventData, setEventData] = useState({ featured: [], nonFeatured: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const [featured, nonFeatured] = await Promise.all([
          fetchEvents('filters[isFeatured][$eq]=true'),
          fetchEvents('filters[isFeatured][$eq]=false')
        ]);
        setEventData({ featured, nonFeatured });
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch events. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const renderEvent = useCallback((event, isFeatured = false) => {
    const Component = isFeatured ? MainCard : AllEventsCard;
    const { attributes } = event;
    return (
      <Component
        key={event.id}
        tag={attributes.tags}
        title={attributes.title}
        location={attributes.location}
        thumbnail={`http://localhost:1337${attributes.coverimage.data.attributes.url}`}
        link={`events/${attributes.slug}`}
        date={formatDate(attributes.date)}
        name={attributes.title}
      />
    );
  }, []);

  const { featured, nonFeatured } = eventData;
  const pageCount = Math.ceil(nonFeatured.length / EVENTS_PER_PAGE);
  const paginatedEvents = nonFeatured.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="flex flex-col gap-4 sm:gap-8 items-center">
        <h2>Events</h2>
        <h1 className={barlow_condensed.className}>FOLLOW THE BUZZ</h1>
        <p>Lorem ipsum dolor sit amet eos commodo labore dolores.</p>
      </section>
      <section>
        <div className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-2 h-[400px] text-left">
          <div className="row-span-2">
            {isLoading ? <MainCardSkeleton /> : featured.map(event => renderEvent(event, true))}
          </div>
          {isLoading 
            ? Array(2).fill().map((_, index) => <MainCardSkeleton key={index} />)
            : nonFeatured.slice(0, 2).map(event => renderEvent(event, true))}
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2>All Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {isLoading
            ? Array(EVENTS_PER_PAGE).fill().map((_, index) => <EventCardSkeleton key={index} />)
            : paginatedEvents.map(event => renderEvent(event))}
        </div>
        {!isLoading && (
          <PaginationControls
            currentPage={currentPage}
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </>
  );
}

const PaginationControls = ({ currentPage, pageCount, setCurrentPage }) => (
  <div className="flex justify-center gap-2 mt-4">
    <Button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <span className="self-center">
      Page {currentPage} of {pageCount}
    </span>
    <Button
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
      disabled={currentPage === pageCount}
    >
      Next
    </Button>
  </div>
);