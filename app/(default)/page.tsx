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

const DATA = [{ image: "/images/Asset 1.png" },
{ image: "/images/BACK-01.png" },
]

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
      <Countdown />
      <Timeline />
      <Testimonials />
      <Sponsor/>
      <ImageList/>
    </div>
  )
}
