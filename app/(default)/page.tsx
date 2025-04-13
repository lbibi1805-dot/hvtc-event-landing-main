export const metadata = {
  title: 'CUỘC THI RACE OF FINANCE',
  description: 'RACE OF FINANCE 2024',
  icons: {
    icon: [
      {
        url: '/images/logo mark-01.png',
        href: '/images/logo mark-01.png',
      }
    ],
  },
}

import Hero from '@/components/hero'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Countdown from '@/components/countdown'
import Timeline from '@/components/timeline'
import Sponsor from '@/components/sponsor'
import ImageList from '@/components/ImageList'
import Rules from '@/components/Rules'

const DATA = [
    { image: "/images/Asset 1.png" },
    { image: "/images/BACK-01.png" },
]
const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Zigzag Section */}
      <div className="mt-10 sm:mt-16 mb-20 sm:mb-80">
        <Zigzag />
      </div>

      {/* Countdown Section */}
      <Countdown />

      {/* Rules Section */}
      <div className="mt-10 sm:mt-16">
        <Rules />
      </div>

      {/* Timeline Section */}
      <div className="mt-10 sm:mt-16 px-4 sm:px-10 mb-40">
        <Timeline />
      </div>

      {/* Sponsor Section */}
      <div className="mt-40 sm:mt-16 px-4 sm:px-10">
        <Sponsor />
      </div>

      {/* Testimonials Section */}
      <div className="mt-10 sm:mt-16 px-4 sm:px-10">
        <Testimonials />
      </div>

      {/* Image List Section */}
      <div className="mt-10 sm:mt-16 px-4 sm:px-15">
        <ImageList />
      </div>
    </div>
  );
}
