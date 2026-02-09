import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '~/components/ui/popover'
import { CiSettings } from 'react-icons/ci'

export default function OwnerSettings() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className="bg-[#326F33] text-white p-2 rounded-full">
            <CiSettings size={24} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-white text-[#326F33] border-2 border-[#326F33] font-lexend font-bold px-6 py-8 flex flex-col justify-center items-center gap-6">
          <PopoverHeader className="flex flex-col justify-center items-center gap-2"></PopoverHeader>
          <section className="font-inter font-semibold text-xl flex flex-col gap-4"></section>
        </PopoverContent>
      </Popover>
    </>
  )
}
