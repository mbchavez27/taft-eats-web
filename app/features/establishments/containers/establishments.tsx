import EstablishmentsCard from '../components/organisms/establishment-card'

export default function Establishments() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <header>
          <h1 className="font-climate text-4xl text-white">ESTABLISHMENTS</h1>
        </header>
        <main className="grid grid-cols-6 gap-x-4 gap-y-8">
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
          <EstablishmentsCard name="La Toca" />
        </main>
      </div>
    </>
  )
}
