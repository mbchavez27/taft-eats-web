export default function NavBar() {
  return (
    <>
      <nav className="bg-[#FFFFFF] flex items-center justify-between px-10 py-1">
        <section>
          <div className="flex items-center gap-1">
            <img
              src="/logos/tafteats_logo.png"
              alt="logo"
              width={73}
              height={73}
            />
            <div className="font-bold text-[#326F33] text-lg">
              <h1>TAFT</h1>
              <h1>EATS</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="font-medium text-lg flex gap-6">
            <button className="bg-white text-black border border-black px-4 py-1 rounded-lg">
              Log In
            </button>
            <button className="bg-[#326F33] text-white px-3 py-1 rounded-lg">
              Sign Up
            </button>
          </div>
        </section>
      </nav>
    </>
  )
}
