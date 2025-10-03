"use client";

import Button from "@/components/Button";
import GradientBackground from "@/components/GradientBackground";

export default function NotFound() {
  return (
    <main>
      <div className="w-full min-h-screen px-4 flex flex-col justify-center items-center text-center gap-4 dark:invert">
        <GradientBackground />
        <div className="text-white mix-blend-difference">
          <h1 className="font-serif text-9xl">404</h1>
          <p>
            Looks like you wandered off the map! <br /> I could not find the
            page you are looking for.
          </p>
        </div>
        <Button href="/" className="w-max mix-blend-difference">
          Go To Home
        </Button>
      </div>
    </main>
  );
}
