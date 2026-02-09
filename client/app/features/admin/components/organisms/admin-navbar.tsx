import { AiOutlineUser } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import SearchField from '~/components/molecules/searchfield'

export default function AdminNavBar() {
  return (
    <>
      <nav className="bg-[#FFFFFF] flex items-center justify-between px-8 lg:px-16 md:py-2">
        <section className="flex-1 pl-32 pr-8">
          <SearchField placeholder="Search for users, establishments, and reviews" />
        </section>

        <section className="flex gap-3 items-center">
          <div className="bg-[#326F33] text-white p-2 rounded-full cursor-pointer hover:bg-[#285a29] transition-colors">
            <IoMdNotificationsOutline size={24} />
          </div>
          <div className="bg-[#326F33] text-white p-2 rounded-full cursor-pointer hover:bg-[#285a29] transition-colors">
            <AiOutlineUser size={24} />
          </div>
        </section>
      </nav>
    </>
  )
}
