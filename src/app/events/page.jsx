"use client"
import { useEffect, useState } from 'react';
import AllEventsCard from '@/components/eventcards/allevents';
import MainCard from '@/components/eventcards/maincard';
import fetchEvents from '../helpers/fetchEvents';


export default function Events () {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
    .then(setEvents)
  }, [])


  return (
    <>
    <section>
     <div className="flex flex-col gap-8 items-center">
      <h2>
       Events.
      </h2>
      <h1>
       FOLLOW THE BUZZ
      </h1>
      <p>
      Lorem ipsum dolor sit amet eos commodo labore dolores.
      </p>
     </div>
    </section>
    <section>
    <div className="grid grid-rows-2 grid-flow-col gap-2 h-[400px] text-left">
          <div className="row-span-2">
            <MainCard
            tag={'The Finals'}
            title={'The Finals'}
            location={'JNICC, Dar-es-Salaam'}
            date={'19 June 2024, 1pm'}
            />
          </div>
          <div>
          <MainCard
            tag={'The Finals'}
            title={'The Finals'}
            location={'JNICC, Dar-es-Salaam'}
            date={'19 June 2024, 1pm'}
            />
          </div>
          <div>
          <MainCard
            tag={'The Finals'}
            title={'The Finals'}
            location={'JNICC, Dar-es-Salaam'}
            date={'19 June 2024, 1pm'}
            />
            </div> 
        </div>
    </section>
    <section>
     <div className='flex flex-col gap-8'>
       <h2>
         All Events.
       </h2>
       <div className="grid grid-cols-4 grid-flow-row gap-2 text-left h-[400px]">
          {events.map(event => (
            <AllEventsCard 
            key={event.id}
            name={event.attributes.title}
            thumbnail={`http://localhost:1337${event.attributes.coverimage.data.attributes.url}`}
            location={event.attributes.location}
            date={event.attributes.date}
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