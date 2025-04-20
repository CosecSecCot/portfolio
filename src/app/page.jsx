import TextLink from "@/components/custom/TextLink";
import Logo from "@/components/Logo";
import Image from "next/image";

const work = [
  {
    title: "RAY-TRACING ENGINE",
    date: "FEB 2025",
    img: "/sdkla.png",
    url: "https://github.com/CosecSecCot/Ebony",
  },
  {
    title: "DUNGEON BOI",
    date: "JAN 2021",
    img: "/ezvmv5.png",
    url: "https://cosecseccot.itch.io/dungeonboi",
  },
];

export default async function Home() {
  return (
    <main className="relative">
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
      <section className="hidden w-full min-h-[100svh] md:p-10 p-3 flex items-center">
        <p className="text-3xl leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          pariatur assumenda libero, tempora blanditiis ipsam exercitationem est
          vel placeat odio obcaecati, voluptatibus quo dicta laborum cupiditate,
          eos deleniti. Molestiae ipsa maiores ducimus expedita eaque possimus
          quaerat ratione accusamus cupiditate voluptates tempore, fugit
          laborum, sed perferendis optio impedit asperiores maxime nulla?
        </p>
      </section>
      <section className="w-full min-h-[100svh] md:p-10 p-3 flex flex-col gap-[48px] mb-[2em]">
        <h2 className="text-5xl">Work</h2>
        <div className="w-full flex flex-col items-center justify-center gap-4 font-mono">
          {work.map((wrk, index) => (
            <div key={index} className="md:w-[40%] w-[80%] space-y-[0.25em]">
              <div className="w-full h-full aspect-video bg-white">
                <Image
                  src={wrk.img}
                  alt={wrk.title}
                  width={1280}
                  height={720}
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex justify-between">
                <TextLink href={wrk.url} target="_blank">
                  {wrk.title}
                </TextLink>
                <p>{wrk.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
