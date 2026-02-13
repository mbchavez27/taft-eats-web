import EstablishmentsCard from '~/features/establishments/components/organisms/establishment-card'
import { ScrollArea } from '~/components/ui/scroll-area'

export default function NearbyRestaurants() {
  return (
    <>
      <main className="bg-[#FFFF] border-10 rounded-xl border-[#416CAE]  font-lexend text-[#326F33] py-4 px-8 flex flex-col gap-10">
        <h1 className="font-extrabold text-3xl text-black">
          Establishments Around the Area
        </h1>
        <ScrollArea className="h-[600px]">
          <div className="flex flex-col gap-4">
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
            <EstablishmentsCard show_ratings={false} />
          </div>
        </ScrollArea>
      </main>
    </>
  )
}
