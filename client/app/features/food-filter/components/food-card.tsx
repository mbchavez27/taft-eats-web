export default function FoodCard({
  food,
  img,
}: {
  food?: string
  img?: string
}) {
  return (
    <>
      <main className="bg-[#FFD24D] hover:bg-[#FFBF00] text-[#326F33] hover:text-white transition duration-100 w-36 min-h-36 md:w-44 md:min-h-44 rounded-md flex flex-col justify-between p-2 gap-4 drop-shadow-2xl">
        <div className="flex justify-center items-center mt-3">
          <img src={img} alt="" width={90} height={90} />
        </div>
        <div className="font-lexend font-bold  text-xl pb-2 truncate">
          {food ?? 'Food Name'}
        </div>
      </main>
    </>
  )
}
