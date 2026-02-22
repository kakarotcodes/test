import { useEffect, useMemo, useRef, useState } from 'react'
import AOS from 'aos'
import lightGallery from 'lightgallery'
import SakuraCanvas from './components/SakuraCanvas'
import CenteredImage from './components/CenteredImage'
import TimelineSection from './components/TimelineSection'
import { galleryImages as gallerySrcs, timelineImages as timelineSrcs } from './assets/images'
import './App.css'

function useAgeCounter(birthIso: string) {
  const birthDate = useMemo(() => new Date(birthIso), [birthIso])
  const [now, setNow] = useState<Date>(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = useMemo(() => {
    let years = now.getFullYear() - birthDate.getFullYear()
    let months = now.getMonth() - birthDate.getMonth()
    let days = now.getDate() - birthDate.getDate()
    let hours = now.getHours() - birthDate.getHours()
    let minutes = now.getMinutes() - birthDate.getMinutes()
    let seconds = now.getSeconds() - birthDate.getSeconds()

    if (seconds < 0) { seconds += 60; minutes-- }
    if (minutes < 0) { minutes += 60; hours-- }
    if (hours < 0) { hours += 24; days-- }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
      days += prevMonth.getDate()
      months--
    }
    if (months < 0) { months += 12; years-- }
    return { years, months, days, hours, minutes, seconds }
  }, [now, birthDate])
  return diff
}

export default function App() {
  // Init AOS on mount
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Setup LightGallery on a grid container
  const galleryRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!galleryRef.current) return
    const lg = lightGallery(galleryRef.current, { speed: 500, download: false })
    return () => { lg.destroy(true) }
  }, [])

  // Live age counter like the demo (adjust date as needed)
  const age = useAgeCounter('2000-01-01T00:00:00')

  // Horizontal scroller controls
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const scrollBy = (dir: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector<HTMLElement>('.snap-center')
    if (!card) return
    const gap = parseInt(getComputedStyle(scroller).gap || '16', 10)
    const offset = card.offsetWidth + gap
    scroller.scrollBy({ left: dir * offset, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen text-[#2c3e50]">
      {/* Sakura overlay */}
      <SakuraCanvas />

      {/* Hero */}
      <header className="h-screen relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2c3e50]/80 to-[#000]/70" />
        {/* Replace with a video background if desired */}
        <div className="text-center z-10 p-4" data-aos="fade-in" data-aos-duration="1500">
          <h1 className="text-5xl md:text-7xl font-anime drop-shadow-lg">Happy Birthday</h1>
          <div className="mt-6 text-2xl font-semibold tracking-widest leading-relaxed">
            {age.years}y {age.months}m {age.days}d
            <br />
            {age.hours}h {age.minutes}m {age.seconds}s
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 md:p-12">
        {/* Letter */}
        <section className="my-16 md:my-24 max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-anime text-sakura mb-8 drop-shadow-sm">A Special Message For You</h2>
          <div className="text-left text-lg leading-relaxed space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <p>Hey there,</p>
            <p>This is a sample message area styled like the demo. Replace with your own heartfelt text.</p>
            <p className="text-right mt-8">With love</p>
          </div>
        </section>

        {/* Timeline (alternating layout) */}
        <TimelineSection
          items={(timelineSrcs.length ? timelineSrcs : [
            'https://placehold.co/800x1066?text=Photo+1',
            'https://placehold.co/800x1066?text=Photo+2',
            'https://placehold.co/800x1066?text=Photo+3',
            'https://placehold.co/800x1066?text=Photo+4',
          ]).map((src, i) => ({
            title: ['Our First Meeting', 'Part 2', 'Part 3', 'Part 4'][i] || `Part ${i+1}`,
            body: [
              'Write your story here — where it began, first impressions, and the moment that stuck.',
              'A fun memory or milestone — the little things that became big memories.',
              'Another chapter — adventures, challenges, and shared wins.',
              'Looking ahead — what you wish for them in the days to come.',
            ][i] || 'Your story goes here.',
            imgSrc: src,
          }))}
        />

        {/* Hall of Fame (horizontal cards) */}
        <section className="my-16 md:my-24">
          <h2 className="text-4xl md:text-5xl font-anime text-center mb-12" data-aos="fade-up">Hall of Fame</h2>
          <div className="relative">
            <button onClick={() => scrollBy(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity opacity-0 md:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sakura" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scrollBy(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity opacity-0 md:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sakura" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div ref={scrollerRef} className="scrollbar-hide overflow-x-auto snap-x snap-mandatory flex gap-6 px-8">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="snap-center flex-shrink-0 w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/4" data-aos="fade-up" style={{ transitionDelay: `${i}00ms` }}>
                  <div className="group bg-white p-6 rounded-lg shadow-lg text-center h-full">
                    <CenteredImage
                      src={`https://placehold.co/800x1066?text=Photo+${i}`}
                      alt={`Photo ${i}`}
                      ratio="9 / 16"
                      fit="cover"
                      className="mb-4 border-4 border-white bg-white shadow-sm transform-gpu transition-transform group-hover:scale-105"
                    />
                    <h3 className="text-2xl font-anime text-sakura">Photo {i}</h3>
                    <p className="mt-2">Caption {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery with LightGallery */}
        <section className="my-16 md:my-24">
          <h2 className="text-4xl md:text-5xl font-anime text-center mb-12" data-aos="fade-up">The Collection</h2>
          <div ref={galleryRef} id="lightgallery" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(gallerySrcs.length ? gallerySrcs : Array.from({ length: 8 }).map((_, i) => `https://placehold.co/1200x800?text=Memory+${i+1}`)).map((href, idx) => {
              const thumb = href
              return (
                <a key={idx} href={href} data-aos="zoom-in" className="group block w-full">
                  <CenteredImage
                    src={thumb}
                    alt={`Memory ${idx + 1}`}
                    ratio="9 / 16"
                    fit="cover"
                    className="rounded-lg shadow-lg border-4 border-white bg-white transform-gpu transition-transform group-hover:scale-105"
                  />
                </a>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white p-8 text-center">
        <p>Enjoy your day to the fullest.</p>
        <p className="text-sm opacity-70 mt-2">Hope you liked it...</p>
      </footer>
    </div>
  )
}
