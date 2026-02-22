import CenteredImage from "./CenteredImage";

type CarouselItem = {
  img: string;
  title?: string;
  caption?: string;
};

type Props = {
  items: CarouselItem[];
};

export default function HallOfFameCarousel({ items }: Props) {
  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <section className="my-16 md:my-24 overflow-hidden">
      <h2
        className="text-4xl md:text-5xl font-anime text-center mb-4"
        data-aos="fade-up"
      >
        I am OBSESSED!
      </h2>
        <p className="font-anime text-bold text-sm mb-10">(Your fault for being so gorgeous)</p>
      <div className="infinite-scroll-container">
        <div className="infinite-scroll-track">
          {duplicatedItems.map((item, i) => (
            <div key={i} className="infinite-scroll-item">
              <div className="group bg-white p-4 rounded-lg shadow-lg h-full">
                <CenteredImage
                  src={item.img}
                  alt={item.title || "Photo"}
                  ratio="9 / 16"
                  fit="cover"
                  className="border-4 border-white bg-white shadow-sm transform-gpu transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
