import Image from "next/image";

export default async function About() {
  return (
    <main className="relative">
      <section className="w-full md:p-10 p-3 border-b">
        <div className="w-full h-full flex flex-col md:gap-16 gap-8">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8 font-light sm:text-lg">
            <p className="leading-tight">
              I’m a Computer Science student with a passion for building clean,
              efficient, and purposeful software. I believe in the power of
              simple, readable code to solve complex problems.
            </p>
            <blockquote className="leading-tight">
              <p>“An idiot admires complexity, a genius admires simplicity.”</p>
              <footer className="ml-[1em]">— Terry Davis</footer>
            </blockquote>
            <Image
              src="/cover.jpg"
              alt="cover"
              priority
              width={3000}
              height={4000}
              className="md:block hidden"
            />
          </div>
          <Image
            src="/cover.jpg"
            alt="cover"
            priority
            width={3000}
            height={4000}
            className="md:hidden block"
          />
        </div>
      </section>
    </main>
  );
}
