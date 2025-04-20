import Logo from "@/components/Logo";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <section className="w-full md:p-10 p-3 border-b">
        <div className="w-full h-full flex flex-col md:gap-16 gap-8">
          <Logo />
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
      <section className="w-full min-h-[100svh] md:p-10 p-3 flex items-center">
        <p className="text-3xl leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          pariatur assumenda libero, tempora blanditiis ipsam exercitationem est
          vel placeat odio obcaecati, voluptatibus quo dicta laborum cupiditate,
          eos deleniti. Molestiae ipsa maiores ducimus expedita eaque possimus
          quaerat ratione accusamus cupiditate voluptates tempore, fugit
          laborum, sed perferendis optio impedit asperiores maxime nulla?
        </p>
      </section>
    </main>
  );
}
