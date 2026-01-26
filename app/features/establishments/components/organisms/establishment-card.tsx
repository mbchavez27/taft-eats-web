export default function EstablishmentsCard({ name }: { name?: string }) {
  return (
    <>
      <div className="bg-[#FFD24D] w-48 h-48 rounded-md flex flex-col justify-between p-2 gap-4">
        <div className="flex justify-center">
          <div className="bg-[#D9D9D9] w-full h-24 rounded-md px-1 py-2">
            <div className="bg-[#848484] w-7 h-7 rounded-full"></div>
          </div>
        </div>
        <div className="font-lexend font-bold text-[#326F33] text-xl pb-2 text-wrap">
          {name ?? 'Establishment Name'}
        </div>
      </div>
    </>
  )
}
