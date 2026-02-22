import { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import SakuraCanvas from "./components/SakuraCanvas";
import CenteredImage from "./components/CenteredImage";
import TimelineSection from "./components/TimelineSection";
import { allImages } from "./assets/images";
import "./App.css";

function useAgeCounter(birthIso: string) {
  const birthDate = useMemo(() => new Date(birthIso), [birthIso]);
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = useMemo(() => {
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
    return { years, months, days, hours, minutes, seconds };
  }, [now, birthDate]);
  return diff;
}

export default function App() {
  // Init AOS on mount
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  // Live age counter like the demo (adjust date as needed)
  const age = useAgeCounter("2000-01-01T00:00:00");

  // Horizontal scroller controls
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>(".snap-center");
    if (!card) return;
    const gap = parseInt(getComputedStyle(scroller).gap || "16", 10);
    const offset = card.offsetWidth + gap;
    scroller.scrollBy({ left: dir * offset, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen text-[#2c3e50]">
      {/* Sakura overlay */}
      <SakuraCanvas />

      {/* Hero */}
      <header className="h-screen relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2c3e50]/80 to-[#000]/70" />
        {/* Replace with a video background if desired */}
        <div
          className="text-center z-10 p-4"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl md:text-7xl font-anime drop-shadow-lg">
            Happy Birthday to my preciousest, cutest, prettiest lil princess
          </h1>
          <div className="mt-6 text-2xl font-semibold tracking-widest leading-relaxed">
            i love you so fucking much!
            {/* {age.years}y {age.months}m {age.days}d
            <br />
            {age.hours}h {age.minutes}m {age.seconds}s
          */}
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 md:p-12">
        {/* Letter */}
        <section
          className="my-16 md:my-24 max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-anime text-sakura mb-8 drop-shadow-sm">
            A Special Message For You
          </h2>
          <div className="text-left text-lg leading-relaxed space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <p>My Dearest Jaan,</p>
            <p>
              A very Happy Birthday to you. May your day be filled with
              laughter, love, and all the things that make you smile. You
              deserve the world and more. Thank you for being the amazing person
              you are and for making me smile always.
              <br />
              <br />I may not always act that way but I am so so grateful to
              have you in my life. I think about you all the time and look
              forward to you annoying me all the time.. hehe. I love it when you
              annoy me and call me yours. Never change meri jaan.. May you find
              all the success and joy you deserve and more.. I'll always be here
              cheering my baby on!
            </p>
            <p className="text-right mt-8">With love, Saif</p>
          </div>
        </section>

        {/* Timeline (alternating layout) */}
        <TimelineSection
          items={[
            {
              title: "The first time I saw you",
              body: "I was awestruck... itni pyaari ladkiya bhi hoti hai kahi?",
              imgSrc:
                allImages[0] || "https://placehold.co/800x1066?text=Photo+1",
            },
            {
              title: "Holy Moly!! Are you for real??",
              body: "I've lost count of how many times I've seen this one",
              imgSrc:
                allImages[1] || "https://placehold.co/800x1066?text=Photo+2",
            },
            {
              title: "This suit.. ufff 🤌",
              body: "Traditional >>>",
              imgSrc:
                allImages[2] || "https://placehold.co/800x1066?text=Photo+3",
            },
            {
              title: "Party time!!",
              body: "Just look at that smile!!",
              imgSrc:
                allImages[3] || "https://placehold.co/800x1066?text=Photo+4",
            },
            {
              title: "You wear glasses?!",
              body: "Glasses never looked this good on anyone",
              imgSrc:
                allImages[24] || "https://placehold.co/800x1066?text=Photo+24",
            },
            {
              title: "I felt so shy looking at you here",
              body: "Red really is your color",
              imgSrc:
                allImages[4] || "https://placehold.co/800x1066?text=Photo+4",
            },
             {
              title: "That dimple",
              body: "Excuse me.. can I bite your cheeks?",
              imgSrc:
                allImages[5] || "https://placehold.co/800x1066?text=Photo+5",
            },
            {
              title: "Gorgeous",
              body: "Yahan pe mujhe pyaar hogya tha tumse..",
              imgSrc:
                allImages[7] || "https://placehold.co/800x1066?text=Photo+7",
            },
            {
              title: "Hehehe.. my favourite",
              body: "Do I really need to say anything??",
              imgSrc:
                allImages[8] || "https://placehold.co/800x1066?text=Photo+8",
            },
            {
              title: "THIS black sweater..",
              body: "You need to click more in this pls",
              imgSrc:
                allImages[10] || "https://placehold.co/800x1066?text=Photo+10",
            },
            {
              title: "So so pretty",
              body: "I love this dress",
              imgSrc:
                allImages[12] || "https://placehold.co/800x1066?text=Photo+12",
            },
            {
              title: "Hot hot hot!!",
              body: "I can't tell the thoughts I had when I saw this picture for the first time..",
              imgSrc:
                allImages[17] || "https://placehold.co/800x1066?text=Photo+17",
              rotate: 270,
            },
          ]}
        />

        {/* Hall of Fame (horizontal cards) */}
        <section className="my-16 md:my-24">
          <h2
            className="text-4xl md:text-5xl font-anime text-center mb-12"
            data-aos="fade-up"
          >
            Hall of Fame
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollBy(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity opacity-0 md:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sakura"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity opacity-0 md:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sakura"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div
              ref={scrollerRef}
              className="scrollbar-hide overflow-x-auto snap-x snap-mandatory flex gap-6 px-8"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/4"
                  data-aos="fade-up"
                  style={{ transitionDelay: `${i}00ms` }}
                >
                  <div className="group bg-white p-6 rounded-lg shadow-lg text-center h-full">
                    <CenteredImage
                      src={`https://placehold.co/800x1066?text=Photo+${i}`}
                      alt={`Photo ${i}`}
                      ratio="9 / 16"
                      fit="cover"
                      className="mb-4 border-4 border-white bg-white shadow-sm transform-gpu transition-transform group-hover:scale-105"
                    />
                    <h3 className="text-2xl font-anime text-sakura">
                      Photo {i}
                    </h3>
                    <p className="mt-2">Caption {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-navy text-white p-8 text-center">
        <p>Enjoy your day to the fullest.</p>
        <p className="text-sm opacity-70 mt-2">Hope you liked it...</p>
      </footer>
    </div>
  );
}
