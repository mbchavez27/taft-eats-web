import EstablishmentsCard from '../components/organisms/establishment-card'

export default function Establishments() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <header>
          <h1 className="font-climate text-4xl text-white">ESTABLISHMENTS</h1>
        </header>
        <main className="grid grid-cols-5 gap-8">
          <EstablishmentsCard name="La Tocaaaaaaaaaaaaaaa" rating={3} />
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
