"use client"
import { useEffect, useState } from 'react';
import AllEventsCard from '@/components/eventcards/allevents';
import MainCard from '@/components/eventcards/maincard';
import fetchEvents from '../helpers/fetchEvents';
import { formatDate } from '../helpers/convertDate';
import { barlow_condensed } from '../fonts';


export default function Events () {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const featured = await fetchEvents('filters[isFeatured][$eq]=true');
        const nonFeatured = await fetchEvents('filters[isFeatured][$eq]=false');
        
        setFeaturedEvents(featured);
        setEvents(nonFeatured);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getData();
  }, [])

  const nonFeaturedTop = events.slice(0, 2);

  return (
    <>
    <section>
     <div className="flex flex-col gap-4 sm:gap-8 items-center">
      <h2>
       Events.
      </h2>
      <h1 className={barlow_condensed.className} >
       FOLLOW THE BUZZ
      </h1>
      <p>
      Lorem ipsum dolor sit amet eos commodo labore dolores.
      </p>
     </div>
    </section>
    <section>
    <div className="grid grid-rows-4 h-[90%] text-left sm:grid-rows-2 grid-flow-col gap-2 h-[400px]">
          <div className="row-span-2">
            {featuredEvents.map(featuredEvent => (
              <MainCard
              key={featuredEvent.id}
              tag={featuredEvent.attributes.tags}
              title={featuredEvent.attributes.title}
              location={featuredEvent.attributes.location}
              thumbnail={`${featuredEvent.attributes.coverimage.data.attributes.url}`}
              link={`events/${featuredEvent.attributes.slug}`}
              date={'19 June 2024, 1pm'}
              />
            ))}
            </div>
          {nonFeaturedTop.map((event, index) => (
            <MainCard
            key={index}
            tag={event.attributes.tags}
            title={event.attributes.title}
            location={event.attributes.location}
            thumbnail={`${event.attributes.coverimage.data.attributes.url}`}
            link={`events/${event.attributes.slug}`}
            date={'19 June 2024, 1pm'}
            />
          ))}
        </div>
    </section>
    <section>
     <div className='flex flex-col gap-8'>
       <h2>
         All Events.
       </h2>
       <div className="grid grid-rows-8 gap-4 h-[90%] sm:grid-cols-4 grid-flow-row text-left">
          {events.map(event => (
            <AllEventsCard 
            key={event.id}
            name={event.attributes.title}
            thumbnail={`${event.attributes.coverimage.data.attributes.url}`}
            location={event.attributes.location}
            date={formatDate(event.attributes.date)}
            tag={event.attributes.tags}
            link={`events/${event.attributes.slug}`}
            />
          ))}
        </div>
     </div>
    </section>
    </>
  )
};