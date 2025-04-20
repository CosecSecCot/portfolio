import Link from "next/link";

export default async function About() {
  return (
    <main className="relative">
      <section className="w-full min-h-[100svh] md:p-10 p-3 flex flex-col justify-center gap-4">
        <h1 className="text-6xl leading-tight">Get In Touch.</h1>
        <Link
          href="mailto:jagjot23252@iiitd.ac.in"
          className="text-xl font-mono hover:underline"
        >
          jagjot23252@iiitd.ac.in
        </Link>
      </section>
    </main>
  );
}
