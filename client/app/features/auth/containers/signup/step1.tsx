import { Checkbox } from "~/components/ui/checkbox";

interface Step1Props {
  onNext: () => void;
}

export function Step1({ onNext }: Step1Props) {
  return (
    <div className="w-full flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="text-[#326F33] font-bold flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
          Sign Up to unlock the <br className="hidden md:block" /> best of Taft
          Eats!
        </h1>
      </div>

      <div className="flex flex-col w-full">
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

      <div className="flex flex-col w-full">
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

      <div className="flex flex-col w-full">
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

      <div className="flex">
        <button
          type="button"
          onClick={onNext}
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
    </div>
  );
}
