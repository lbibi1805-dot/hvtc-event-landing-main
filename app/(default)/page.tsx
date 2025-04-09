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
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ModalVideo from '@/components/modal-video'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import Countdown from '@/components/countdown'
import Timeline from '@/components/timeline'
import Sponsor from '@/components/sponsor'
import ImageList from '@/components/ImageList'
// import ImageList from '@/components/ImageList'

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
      <Hero />
      {/* <Features /> */}
      <div className='mt-0.05'>
        <Zigzag />
      </div>
      {/*<Countdown />*/}
      <Timeline />
      <Testimonials />
      {/*<Sponsor/>*/}
      <ImageList/>
    </div>
  )
}
