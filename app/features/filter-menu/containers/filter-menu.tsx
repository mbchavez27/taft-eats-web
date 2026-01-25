import { ScrollArea } from "~/components/ui/scroll-area";
import { Checkbox } from "~/components/ui/checkbox";
export default function FilterMenu() {
  return (
    <>
      <main className="bg-[#FFFF] border-t-36 rounded-xl border-[#FFBF00] w-xs font-lexend text-[#326F33]">
        <section className="flex flex-col gap-2 px-8 py-4">
          <div>
            <h1 className="font-bold text-2xl">Cuisines</h1>
          </div>
          <div className="text-[#BEBEBE] text-sm px-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="cuisine-all"
                className="
      border-2
      border-gray-400
      data-[state=unchecked]:bg-white
      data-[state=unchecked]:border-gray-400
      data-[state=checked]:bg-gray-500
      data-[state=checked]:border-gray-500
      data-[state=checked]:text-white
    "
              />
              <label htmlFor="cuisine-all">Select All</label>
            </div>

            <div className="font-inter text-[#326F33] font-semibold">
              <ScrollArea className="px-4 py-2 text-lg flex flex-col gap-2 h-30 scroll-left">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    id="cuisine-korean"
                    className="
      border-2
      border-green-600
      data-[state=unchecked]:bg-white
      data-[state=unchecked]:border-green-600
      data-[state=checked]:bg-green-600
      data-[state=checked]:border-green-600
      data-[state=checked]:text-white
    "
                  />
                  <label htmlFor="cuisine-korean">Korean</label>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox
                    id="cuisine-chinese"
                    className="
      border-2
      border-green-600
      data-[state=unchecked]:bg-white
      data-[state=unchecked]:border-green-600
      data-[state=checked]:bg-green-600
      data-[state=checked]:border-green-600
      data-[state=checked]:text-white
    "
                  />
                  <label htmlFor="cuisine-korean">Chinese</label>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox
                    id="cuisine-mexican"
                    className="
      border-2
      border-green-600
      data-[state=unchecked]:bg-white
      data-[state=unchecked]:border-green-600
      data-[state=checked]:bg-green-600
      data-[state=checked]:border-green-600
      data-[state=checked]:text-white
    "
                  />
                  <label htmlFor="cuisine-korean">Mexican</label>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox
                    id="cuisine-japanese"
                    className="
      border-2
      border-green-600
      data-[state=unchecked]:bg-white
      data-[state=unchecked]:border-green-600
      data-[state=checked]:bg-green-600
      data-[state=checked]:border-green-600
      data-[state=checked]:text-white
    "
                  />
                  <label htmlFor="cuisine-korean">Japanese</label>
                </div>
              </ScrollArea>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
