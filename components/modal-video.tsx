'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section>
          
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
        <h2 className="h2" style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}>HƯỚNG DẪN TẠO TÀI KHOẢN THAM GIA VÒNG 1</h2>
      </div>
      
      {/* Video thumbnail */}
      <div>
        <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <iframe className ="border-4 bg-black border-blue-800 rounded-xl " width="800" height="600" src="https://www.youtube.com/embed/z7RQPBqkYmQ?si=GBT3j3gdAdMVWuOb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      {/* End: Video thumbnail */}
      <div className="flex justify-center items-center text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <a
            className="btn text-white bg-[#2F6095] hover:bg-white hover:text-[#2F6095] w-full mb-4 sm:w-auto sm:mb-0 rounded-2xl inline-block drop-shadow-lg font-bold text-xl"
            href="https://bom.so/EK5o9z" target="_blank"
          >
            HƯỚNG DẪN ĐĂNG KÝ THAM GIA VÒNG 1 TRÊN MÁY TÍNH
          </a>
        </div>

    </section>
  )
}