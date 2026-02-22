import { useEffect } from "react";
import AOS from "aos";
import SakuraCanvas from "./components/SakuraCanvas";
import TimelineSection from "./components/TimelineSection";
import HallOfFameCarousel from "./components/HallOfFameCarousel";
import { allImages } from "./assets/images";
import "./App.css";

export default function App() {
  // Init AOS on mount
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Carousel items
  const carouselItems = [
    { img: allImages[6], title: "Title 1", caption: "Caption 1" },
    { img: allImages[9], title: "Title 2", caption: "Caption 2" },
    { img: allImages[11], title: "Title 3", caption: "Caption 3" },
    { img: allImages[13], title: "Title 4", caption: "Caption 4" },
    { img: allImages[14], title: "Title 5", caption: "Caption 5" },
    { img: allImages[16], title: "Title 6", caption: "Caption 6" },
    { img: allImages[18], title: "Title 6", caption: "Caption 6" },
    { img: allImages[19], title: "Title 6", caption: "Caption 6" },
    { img: allImages[21], title: "Title 8", caption: "Caption 8" },
    { img: allImages[22], title: "Title 9", caption: "Caption 9" },
    { img: allImages[23], title: "Title 10", caption: "Caption 10" },
    { img: allImages[25], title: "Title 9", caption: "Caption 9" },
    { img: allImages[26], title: "Title 10", caption: "Caption 10" },
    { img: allImages[27], title: "Title 11", caption: "Caption 11" },
    { img: allImages[28], title: "Title 12", caption: "Caption 12" },
    { img: allImages[29], title: "Title 13", caption: "Caption 13" },
    { img: allImages[30], title: "Title 14", caption: "Caption 14" },
    { img: allImages[31], title: "Title 15", caption: "Caption 15" },
    { img: allImages[32], title: "Title 16", caption: "Caption 16" },
    { img: allImages[33], title: "Title 17", caption: "Caption 17" },
    { img: allImages[34], title: "Title 18", caption: "Caption 18" },
  ];

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
            Happy Birthday to my preciousest, cutest, prettiest, smartest lil princess 🎂
          </h1>
          <div className="mt-6 text-2xl font-semibold tracking-widest leading-relaxed">
            i love you so fucking much!
            <br />
            <span className="text-sm">(did you really think I'd forget?)</span>
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
            Happy Birthday Ishi!
          </h2>
          <div className="text-left text-lg leading-relaxed space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <p>My Dearest Jaan,</p>
            <p>
              A very Happy Birthday to you. I hope your day was filled with
              laughter, love, and all the things that make you smile. You
              deserve the world and more. Thank you for being the amazing person
              you are and for making me smile always.
            </p>
            <p className="text-right mt-8">With love, your lil baby</p>
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
              title: "Holy Moly!!",
              body: "I remember looking at this and saying Whoaa.. what a babe!!",
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
            {
              title: "Delicious 🤤",
              body: "Baby.. we're definitely making out in this",
              imgSrc:
                allImages[20] || "https://placehold.co/800x1066?text=Photo+20",
            },
          ]}
        />

        {/* Hall of Fame (Embla carousel with autoplay) */}
        <HallOfFameCarousel items={carouselItems} />
        <section
          className="my-16 md:my-24 max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-center text-4xl md:text-5xl font-anime text-sakura mb-8 drop-shadow-sm">
            A Special Message For You
          </h2>
          <div className="text-left text-lg leading-relaxed space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <p>Meri Pukkuuu,</p>
            <p>
              I may not always act that way but I am so so grateful to have you
              in my life. I think about you all the time and look forward to our
              conversations everyday. I love it when you annoy me and call me
              yours. 
              <br />
              <br />
              You're too precious to me Ishi and I will cherish you as
              long as I have you. 
              <br />
              <br />
              I never imagined I'd meet someone as loving
              and caring and gentle as you. Never change meri jaan.. May you
              find all the success and joy you deserve and more.. I'll always be
              here cheering my baby on!
            </p>
            <p className="text-right mt-8">I'll always be your lil baby</p>
          </div>
        </section>
      </main>

      {/* <footer className="bg-navy text-white p-8 text-center">
      </footer> */}
    </div>
  );
}
