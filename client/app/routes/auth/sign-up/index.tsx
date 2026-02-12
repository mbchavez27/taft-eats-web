import { Checkbox } from "~/components/ui/checkbox";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taft Eats" },
    { name: "description", content: "Taft Eats" },
  ];
}

export default function SignUp() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <section
        className="
        bg-white 
        font-lexend 
        flex flex-col 
        justify-center 
        gap-5 
        p-6 md:p-8 
        w-full max-w-[626px] 
        h-auto 
        rounded-2xl
        shadow-sm"
      >
        <div className="mb-2 flex flex-col items-center justify-center">
          <img
            src="/logos/tafteats_logo.png"
            alt="Taft Eats Logo"
            className="mx-auto mb-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain"
          />
          <h1 className="text-center text-2xl md:text-3xl text-[#326F33] font-bold mb-2 leading-tight">
            Sign Up to unlock the <br className="hidden md:block" /> best of
            Taft Eats!
          </h1>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="name" className="font-medium mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-black font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="font-medium mb-1">
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirm-password" className="font-medium mb-1">
            Confirm Password *
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex items-start gap-2 text-[#9CB16F] w-full mt-1">
          <Checkbox
            id="terms"
            name="terms"
            required
            className="
              mt-0.5
              border-2 border-[#9CB16F]
              data-[state=unchecked]:bg-white
              data-[state=unchecked]:border-[#9CB16F]
              data-[state=checked]:bg-[#9CB16F]
              data-[state=checked]:border-[#9CB16F]
              w-5 h-5
            "
          />
          <label
            htmlFor="terms"
            className="text-sm text-black cursor-pointer select-none leading-tight"
          >
            I agree to the{" "}
            <span className="text-[#326F33] font-bold underline cursor-pointer">
              Terms & Conditions
            </span>
          </label>
        </div>

        <div className="flex flex-col mt-2">
          <button
            type="submit"
            value="Next"
            className="
              bg-[#326F33] 
              text-white 
              font-bold
              py-3 
              rounded-md
              hover:bg-[#285a29] 
              transition-colors
            "
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
