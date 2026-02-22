import CenteredImage from './CenteredImage'

type TimelineItem = {
  title: string
  body: string
  imgSrc: string
  alt?: string
  rotate?: number
}

type Props = {
  items: TimelineItem[]
}

export default function TimelineSection({ items }: Props) {
  return (
    <section className="my-16 md:my-24">
      <h2 className="text-4xl md:text-5xl font-anime text-center mb-12" data-aos="fade-up">
        You, through my eyes
      </h2>
      <div className="space-y-16">
        {items.map((item, idx) => {
          const even = idx % 2 === 0
          const rowDir = even ? 'md:flex-row' : 'md:flex-row-reverse'
          const textAlign = even ? 'md:text-left' : 'md:text-right'
          const aos = even ? 'fade-right' : 'fade-left'
          return (
            <div key={idx} className={`flex flex-col ${rowDir} items-center gap-8`} data-aos={aos}>
              <div className="w-full md:w-1/2">
                <CenteredImage
                  src={item.imgSrc}
                  alt={item.alt || item.title}
                  ratio="9 / 16"
                  fit="cover"
                  className="border-4 border-white bg-white shadow-xl"
                  rotate={item.rotate}
                />
              </div>
              <div className={`text-center ${textAlign}`}>
                <h3 className="text-2xl font-anime text-sakura">{item.title}</h3>
                <p className="mt-2 text-lg">{item.body}</p>
                <br />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
