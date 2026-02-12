import { Checkbox } from "~/components/ui/checkbox";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign Up" }, { name: "description", content: "Taft Eats" }];
}

export default function SignUp() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <section
        className="
        bg-white 
        font-lexend 
        flex flex-col justify-center items-center 
        gap-5 
        py-8 px-6 
        w-full max-w-[500px] 
        rounded-2xl 
        shadow-sm"
      >
        <div className="text-[#326F33] font-bold flex flex-col justify-center items-center text-center">
          <img
            src="/logos/tafteats_logo.png"
            alt="Taft Eats Logo"
            className="w-[150px] h-[150px] object-contain"
          />

          <h1 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
            Sign Up to unlock the <br className="hidden md:block" /> best of
            Taft Eats!
          </h1>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-black font-medium mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-black font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-black font-medium mb-1">
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="confirm-password"
            className="text-black font-medium mb-1"
          >
            Confirm Password *
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm your password"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            required
          />
        </div>

        <div className="flex items-start justify-center gap-2 text-[#9CB16F] w-full mt-1">
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

        <div className="flex">
          <button
            type="submit"
            className="
              bg-[#326F33] 
              text-white 
              font-bold
              rounded-lg
              w-full 
              py-2 
              px-6
              cursor-pointer 
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
