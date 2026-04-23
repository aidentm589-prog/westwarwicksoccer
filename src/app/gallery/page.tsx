"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Trophy, Camera } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Gallery images from the original website
const galleryImages = [
  { src: "https://static.wixstatic.com/media/ac703c_4c6c2d2104ef428a8f374d7c50f665df~mv2.jpg/v1/fit/w_960,h_640,q_90/ac703c_4c6c2d2104ef428a8f374d7c50f665df~mv2.jpg", alt: "Soccer team photo" },
  { src: "https://static.wixstatic.com/media/ac703c_a5b2e1f505bb4a9e8b6b7de28d513cf4~mv2.jpg/v1/fit/w_1440,h_682,q_90/ac703c_a5b2e1f505bb4a9e8b6b7de28d513cf4~mv2.jpg", alt: "Team celebration" },
  { src: "https://static.wixstatic.com/media/5391e4_8cb7449fbfb3474a984d4c82d9724d78~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_8cb7449fbfb3474a984d4c82d9724d78~mv2.jpg", alt: "Game action" },
  { src: "https://static.wixstatic.com/media/5391e4_dfe3a1d1f4284aa2bd4b62c6ce8284dd~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_dfe3a1d1f4284aa2bd4b62c6ce8284dd~mv2.jpg", alt: "Players on field" },
  { src: "https://static.wixstatic.com/media/5391e4_49fbd1e35e214eb8833e93e7c8e09d44~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_49fbd1e35e214eb8833e93e7c8e09d44~mv2.jpg", alt: "Soccer match" },
  { src: "https://static.wixstatic.com/media/5391e4_71b1297a6cbf4c2497f84d8b6cace90f~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_71b1297a6cbf4c2497f84d8b6cace90f~mv2.jpg", alt: "Team huddle" },
  { src: "https://static.wixstatic.com/media/5391e4_6619281a43564cf5a8a4459231fe9a85~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_6619281a43564cf5a8a4459231fe9a85~mv2.jpg", alt: "Youth players" },
  { src: "https://static.wixstatic.com/media/5391e4_7722390da0a241bf8d5dd8b5a15ae2f5~mv2.jpg/v1/fit/w_960,h_555,q_90/5391e4_7722390da0a241bf8d5dd8b5a15ae2f5~mv2.jpg", alt: "Practice session" },
  { src: "https://static.wixstatic.com/media/5391e4_0cee495b647a4da7bca3dd0549f19ad1~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_0cee495b647a4da7bca3dd0549f19ad1~mv2.jpg", alt: "Game day" },
  { src: "https://static.wixstatic.com/media/5391e4_ed2b3156f69f4a92a07cd20a44f49ed6~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_ed2b3156f69f4a92a07cd20a44f49ed6~mv2.jpg", alt: "Team photo" },
  { src: "https://static.wixstatic.com/media/5391e4_70642cc5ca3e49ef96298b93743a9865~mv2.jpg/v1/fit/w_959,h_601,q_90/5391e4_70642cc5ca3e49ef96298b93743a9865~mv2.jpg", alt: "Soccer game" },
  { src: "https://static.wixstatic.com/media/5391e4_030517068d1a4267b47f2eba4076ecd0~mv2.jpg/v1/fit/w_960,h_529,q_90/5391e4_030517068d1a4267b47f2eba4076ecd0~mv2.jpg", alt: "Players in action" },
  { src: "https://static.wixstatic.com/media/5391e4_b49956e2ff6b42c18f6d140eade97d1a~mv2.jpg/v1/fit/w_960,h_540,q_90/5391e4_b49956e2ff6b42c18f6d140eade97d1a~mv2.jpg", alt: "Youth soccer" },
  { src: "https://static.wixstatic.com/media/5391e4_ba4443784a4348679c65f5521fb2b7a3~mv2.jpg/v1/fit/w_960,h_493,q_90/5391e4_ba4443784a4348679c65f5521fb2b7a3~mv2.jpg", alt: "Championship moment" },
  { src: "https://static.wixstatic.com/media/5391e4_5e377b2b9612467b9517ed4edfa43ce5~mv2.jpg/v1/fit/w_960,h_550,q_90/5391e4_5e377b2b9612467b9517ed4edfa43ce5~mv2.jpg", alt: "Team celebration" },
]

const championPhotos = [
  { 
    src: "https://static.wixstatic.com/media/ac703c_a7790674eac04aa3b7d5ff8ea3a625f2~mv2.jpg/v1/fit/w_827,h_755,q_90/ac703c_a7790674eac04aa3b7d5ff8ea3a625f2~mv2.jpg", 
    title: "U12A Girls WS1 Champions",
    year: "2024"
  },
  { 
    src: "https://static.wixstatic.com/media/ac703c_ff47b3e9aadc45d6b7ed7b8d1e77fc26~mv2.jpg/v1/fit/w_769,h_826,q_90/ac703c_ff47b3e9aadc45d6b7ed7b8d1e77fc26~mv2.jpg", 
    title: "U12B Girls WS1 Champions",
    year: "2024"
  },
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = [...championPhotos.map(p => ({ src: p.src, alt: p.title })), ...galleryImages]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Photo Gallery
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Celebrating our players, teams, and memorable moments from West Warwick Soccer. From game days to championship celebrations, see our community in action.
              </p>
            </div>
          </div>
        </section>

        {/* Champions Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Champions</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {championPhotos.map((photo, index) => (
                <Card 
                  key={index} 
                  className="group cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <CardContent className="p-0 relative">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-background translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="font-semibold">{photo.title}</p>
                      <p className="text-sm text-background/80">{photo.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Season Highlights</h2>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-lg bg-muted aspect-[4/3] relative"
                  onClick={() => openLightbox(index + championPhotos.length)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <SectionHeader
              title="Want to Be Part of the Action?"
              subtitle="Join West Warwick Soccer and create your own memorable moments on the field."
            />
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="https://system.gotsport.com/programs/265J58760" target="_blank" rel="noopener noreferrer">
                  Register for Spring 2026
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full mx-4">
            <Image
              src={allImages[currentImageIndex].src}
              alt={allImages[currentImageIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {currentImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  )
}
