
"use client"
import { Link } from 'next-view-transitions';
import { barlow_condensed } from '../fonts';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Vote () {
  const router = useRouter();
  const firstCatId = '1';

  const startVoting = () => {
    router.push(`vote/${firstCatId}`)
  }

  return (
    <section className="hero-section flex">
    <div className="hero-card flex">
      <h1 className={barlow_condensed.className}>
        JOIN IN THE BUZZ <br />
        VOTE NOW
      </h1>
      <p>
      Lorem ipsum dolor sit amet stet. Ea consectetuer ipsum nonumy rebum autem consequat sit erat gubergren facilisis sit nibh magna.
      </p>
      <Button onClick={startVoting}>
          Vote Now
      </Button>
    </div>
  </section>
  )
};