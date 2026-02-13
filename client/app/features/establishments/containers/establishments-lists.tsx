import EstablishmentsCard from "../components/organisms/establishment-card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { establishments } from "../data/establishments";

export default function EstablishmentsLists() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <header>
          <h1 className="font-climate text-xl md:text-4xl text-black">
            ESTABLISHMENTS
          </h1>
        </header>
        <ScrollArea className="h-120">
          <section className="flex flex-wrap gap-6 md:gap-12 lg:gap-9 justify-start">
            {establishments.map((establishment) => (
              <EstablishmentsCard
                key={establishment.id}
                name={establishment.name}
                rating={establishment.rating}
              />
            ))}
          </section>
        </ScrollArea>
      </main>
    </>
  );
}
