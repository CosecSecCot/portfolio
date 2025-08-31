import Link from "next/link";
import TextReveal from "../features/animations/TextReveal";

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 w-full h-max z-[9999] mix-blend-difference">
      <nav className="absolute z-10 top-0 w-full px-[1.5em] py-[1em] flex gap-[1em] justify-end md:justify-between mix-blend-exclusion">
        <p className="text-[#8a8a8a] max-md:hidden">
          {" "}
          ✦ Persuing B.Tech at{" "}
          <Link
            href={"https://www.iiitd.ac.in/"}
            className="underline underline-offset-4"
          >
            IIIT Delhi
          </Link>
        </p>
        <ul className="uppercase text-white flex gap-[1em] justify-end">
          <li>
            <TextReveal>
              <Link href="/">Home</Link>
            </TextReveal>
          </li>
          <li>
            <TextReveal delay={0.1}>
              <Link href="/work">Work</Link>
            </TextReveal>
          </li>
          <li>
            <TextReveal delay={0.2}>
              <Link href="/blogs">Blogs</Link>
            </TextReveal>
          </li>
        </ul>
      </nav>
    </header>
  );
}
