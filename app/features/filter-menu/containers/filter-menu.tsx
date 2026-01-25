import SelectCuisines from "../components/select-cusines";

export default function FilterMenu() {
  return (
    <>
      <main className="bg-[#FFFF] border-t-36 rounded-xl border-[#FFBF00] w-xs font-lexend text-[#326F33] py-2">
        <SelectCuisines />
        <hr className="border border-gray" />
        <SelectCuisines />
      </main>
    </>
  );
}
