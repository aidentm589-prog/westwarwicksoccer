"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const champions = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U10%20Anchor%20Winners%202022-dnrEa5aRxAz85LJ5MbXYkIYsWnhiVk.jpg",
    title: "U10 Anchor Winners",
    year: "2022",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U10%20Girls%202022%20Winners-gxD0g7A2r8jFmA5AUqYWMMQD7whtzf.jpg",
    title: "U10 Girls Winners",
    year: "2022",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U16%20Winners-eOL7rpCQFMdHoRGZ3QdKF59RpY5rZy.jpg",
    title: "U16 Winners",
    year: "2023",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U08%202023-XdxOF3CUeKLz8xDCHjlAynqnHKUuut.jpg",
    title: "U08 Champions",
    year: "2023",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U10%20Tournament%20Champs%202022-CbwwJS7gPyFdpJo3euZ2fyhINR8hpe.jpg",
    title: "U10 Tournament Champs",
    year: "2022",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U08%20Tournament%20Champs%202022-0K73HLzwbUxiRM8H4bomynKpoJAmrw.jpg",
    title: "U08 Tournament Champs",
    year: "2022",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U11%20Classic%20Champions-mqBcKAY5mGom0wxtqlefDEkowOXok0.jpg",
    title: "U11 Classic Champions",
    year: "2023",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U08%20Girls%202022%201st%20Place-V7LVj6HAHrZyH1HuvaYVnH2ujMJM3S.jpg",
    title: "U08 Girls 1st Place",
    year: "2022",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U10%20Indoor%20Champs%20Again%202022_23-MkgMLTNjZWfdwtvDyaoq25cBY0GUIU.jpg",
    title: "U10 Indoor Champs",
    year: "2022/23",
  },
]

export function ChampionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % champions.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="relative mx-auto w-full max-w-[1040px]">
      <div className="relative overflow-hidden rounded-[14px] bg-secondary">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {champions.map((champion, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative aspect-[16/10]"
            >
              <Image
                src={champion.src}
                alt={`${champion.title} ${champion.year}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-oswald)] text-[34px] font-bold text-white md:text-[36px]">
                  {champion.title}
                </h3>
                <p className="mt-1 text-[20px] font-semibold text-primary">
                  {champion.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-[9px]">
        {champions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[10px] rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-[34px] bg-primary"
                : "w-[10px] bg-muted-foreground/45 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-5 flex gap-[8px] overflow-x-auto pb-2 scrollbar-hide">
        {champions.map((champion, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-[66px] w-[84px] flex-shrink-0 overflow-hidden rounded-[5px] transition-all duration-300 md:h-[70px] md:w-[92px] ${
              index === currentIndex
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={champion.src}
              alt={champion.title}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
