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

        <section className="w-full">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-[60%]"
          >
            <CarouselContent className="flex gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="w-fit basis-auto">
                  <FoodCard />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </>
  )
}
