import { useState } from "react";
import type { Route } from "./+types/index";
import { Step1 } from "~/features/auth/containers/signup/step1";
import { Step2 } from "~/features/auth/containers/signup/step2";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign Up" }, { name: "description", content: "Taft Eats" }];
}

export default function SignUp() {
  const [step, setStep] = useState(1);

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
        <img
          src="/logos/tafteats_logo.png"
          alt="Taft Eats Logo"
          className="w-[150px] h-[150px] object-contain"
        />
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onBack={() => setStep(1)} />}
      </section>
    </main>
  );
}
