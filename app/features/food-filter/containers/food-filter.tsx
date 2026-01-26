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
        <section className="flex gap-4">
          <FoodCard />
        </section>
      </main>
    </>
  )
}
