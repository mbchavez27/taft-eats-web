import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import FoodCard from '../components/food-card'

export default function FoodFilter() {
  return (
    <>
      <main className="flex flex-col gap-3">
        <header>
          <h1 className="font-climate text-2xl md:text-4xl text-white">
            FOODS
          </h1>
        </header>

        <section>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="px-12"
          >
            <CarouselContent className="flex gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="w-fit basis-auto">
                  <FoodCard />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="translate-x-12 bg-[#FFBF00] outline-none border-none drop-shadow-2xl" />
            <CarouselNext className="-translate-x-12 bg-[#FFBF00] outline-none border-none drop-shadow-2x" />
          </Carousel>
        </section>
      </main>
    </>
  )
}
