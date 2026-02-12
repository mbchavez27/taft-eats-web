import type { Route } from "./+types/index";
import { Checkbox } from "~/components/ui/checkbox";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }, { name: "description", content: "Taft Eats" }];
}

export default function Login() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <section
        className="
        bg-white 
        font-lexend 
        flex flex-col justify-center items-center 
        gap-6 
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

          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            Log in to Taft Eats!
          </h1>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-black font-medium mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-black font-medium mb-1">
            Password *
          </label>
          <input
            id="password"
            type="password"
            className="border-2 border-black rounded-md w-full p-2 outline-none focus:border-[#326F33]"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-[#9CB16F] w-full">
          <Checkbox
            id="understand"
            name="understand"
            className="
              border-2 border-[#9CB16F]
              data-[state=unchecked]:bg-white
              data-[state=unchecked]:border-[#9CB16F]
              data-[state=checked]:bg-[#9CB16F]
              data-[state=checked]:border-[#9CB16F]
              w-5 h-5
            "
          />
          <label htmlFor="understand" className="cursor-pointer select-none">
            Remember me
          </label>
        </div>

        <div className="flex">
          <input
            type="submit"
            value="Log in"
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
          />
        </div>
      </section>
    </main>
  );
}
