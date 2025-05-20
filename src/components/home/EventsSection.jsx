import SkeletonCard from "./SkeletonCard";
import MainCard from "@/components/eventcards/maincard";

export default function EventsSection({
  isLoading,
  featuredHome,
  nonFeaturedTop,
  formatDate,
}) {
  return (
    <section className="events-section flex">
      <div className="flex flex-col gap-[50px] justify-center">
        <h2>
          See what we&apos;ve been cookin up,
          <br />
          and what&apos;s to come.
        </h2>
        <div className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-2 h-[400px] text-left">
          {isLoading ? (
            <>
              <div className="row-span-2">
                <SkeletonCard />
              </div>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <div className="row-span-2">
                {featuredHome.length > 0 && (
                  <MainCard
                    key={featuredHome[0].id}
                    tag={featuredHome[0].attributes.tags}
                    title={featuredHome[0].attributes.title}
                    location={featuredHome[0].attributes.location}
                    thumbnail={`${process.env.NEXT_PUBLIC_STRAPI_URL}${featuredHome[0].attributes.coverimage.data.attributes.url}`}
                    link={`events/${featuredHome[0].attributes.slug}`}
                    date={formatDate(featuredHome[0].attributes.date)}
                  />
                )}
              </div>
              {nonFeaturedTop.slice(0, 2).map((event) => (
                <MainCard
                  key={event.id}
                  tag={event.attributes.tags}
                  title={event.attributes.title}
                  location={event.attributes.location}
                  thumbnail={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.attributes.coverimage.data.attributes.url}`}
                  link={`events/${event.attributes.slug}`}
                  date={formatDate(event.attributes.date)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
