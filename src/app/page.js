'use client'
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventsSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import { fetchEvents } from "./helpers/requests";
import { formatDate } from "./helpers/convertDate";
import { barlow_condensed } from "./fonts";

export default function Home() {
  const [featuredHome, setFeaturedHome] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const featured = await fetchEvents('filters[isFeatured][$eq]=true')
        const nonFeatured = await fetchEvents('filters[isFeatured][$eq]=false')
        setFeaturedHome(featured)
        setEvents(nonFeatured)
      } catch (error) {
        console.error('error fetching data', error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [])

  const nonFeaturedTop = events.slice(0, 2);

  return (
    <>
      <HeroSection barlow_condensed={barlow_condensed} />
      <AboutSection />
      <EventsSection
        isLoading={isLoading}
        featuredHome={featuredHome}
        nonFeaturedTop={nonFeaturedTop}
        formatDate={formatDate}
      />
      <SponsorsSection />
    </>
  );
}
