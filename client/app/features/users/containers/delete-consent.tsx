import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Checkbox } from '~/components/ui/checkbox'

export default function DeleteConsent() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="px-4 py-2 text-white bg-[#326F33] border-[#326F33] border rounded-2xl hover:opacity-50 duration-100 transition">
            Delete Establishment
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-xl text-[#326F33] font-lexend font-bold p-8 flex flex-col gap-8">
          <section className="flex flex-col gap-8 justify-center items-center">
            <div className="bg-black w-[180px] h-[180px]"></div>
            <div className="flex flex-col gap-6 font-lexend font-semibold text-xl text-center text-black">
              <p>
                Are you absolutely sure you want to delete your establishment?
              </p>
              <p>
                This action will permantently delete your establishment and all
                related data
              </p>
              <p>This process cannot be undone</p>
              <p>
                Taft Eats is not liable for any data loss resulting from this
                action
              </p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <Checkbox
                id="understand"
                name="understand"
                className="
    border-2 border-[#9CB16F]
    data-[state=unchecked]:bg-white
    data-[state=unchecked]:border-[#9CB16F]
    data-[state=checked]:bg-[#9CB16F]
    data-[state=checked]:border-[#9CB16F]
  "
              />
              <label htmlFor="understand" className="text-[#9CB16F]">
                Yes, I understand the consequences and confirm <br />
                that I want to permanently delete this establishment.
              </label>
            </div>
            <button className="px-4 py-2 text-white bg-[#326F33] border-[#326F33] border rounded-2xl hover:opacity-50 duration-100 transition">
              Delete Establishment
            </button>
          </section>
        </DialogContent>
      </Dialog>
    </>
  )
}
