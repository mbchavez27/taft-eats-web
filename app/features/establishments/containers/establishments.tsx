import EstablishmentsCard from '../components/organisms/establishment-card'
import { ScrollArea } from '~/components/ui/scroll-area'

export default function Establishments() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <header>
          <h1 className="font-climate text-2xl md:text-4xl text-white">
            ESTABLISHMENTS
          </h1>
        </header>
        <ScrollArea className="h-120 w-[60%]">
          <section className="flex flex-wrap gap-2 md:gap-12 lg:gap-8 justify-start">
            <EstablishmentsCard name="La Tocaaaaaaaaaaaaaaa" rating={3} />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
            <EstablishmentsCard name="La Toca" />
          </section>
        </ScrollArea>
      </main>
    </>
  )
}
