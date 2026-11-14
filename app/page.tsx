
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Bold } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-16">
      <div className="max-w-2xl space-y-6">
        <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
          WELCOME TO MY LITTLE CORNER
        </p>

        <h1 className="font-heading text-5xl font-semibold leading-tight text-primary sm:text-7xl">
          Hi, I'm Chloe Joy P. Pereyra.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Welcome to my personal portfolio! This is a little space
          where I share my background, interests, experiences,
          and the things that make me who I am.
        </p>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          i will also try to update this portfolio every once in a while to share my progress. ♡
        </p>
       <div className="flex flex-wrap gap-5 pt-2">
        <Link
    href="/about"
    className={buttonVariants({ variant: "default" })}
  >
    Get to know me
  </Link>

  <Link
    href="/contact"
    className={buttonVariants({ variant: "outline" })}
  >
    Contact me
  </Link>
</div>
      </div>
    </main>
  );
}
