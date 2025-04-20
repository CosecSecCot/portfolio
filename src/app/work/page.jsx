import TextLink from "@/components/custom/TextLink";
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
